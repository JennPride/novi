import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React, {useState, useEffect} from 'react';
import { User } from '../common/util';
import SideBar from './SideBar';

type DataTableProps = {
  data: Array<User>
}

export default function DataTable({data}: DataTableProps) { 

  const [selectedUser, setSelectedUser] = useState<User | undefined>()
  const [displayHeaders, setDisplayHeaders] = useState<Array<string>>([])

  const headers = [
    'Name',
    'Email',
    'Age',
    'Occupation',
    '# of Cats',
    'Avg Daily Water Consumption (L)',
    'Location'
  ]

  const hideOnSelectUser = ['Location']

    useEffect(() => {
      let updatedHeaders = headers.filter(header => !(hideOnSelectUser.includes(header) && !!selectedUser))
      setDisplayHeaders(updatedHeaders)
    }, [selectedUser])

    return (
      <div className="">
          <Table sx={{ width: 1/2 }}>
          <TableHead>
            <TableRow>
              {displayHeaders.map((header: string) => (
                <TableCell align="left">{header}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.id}
                onClick={() => setSelectedUser(row)}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.email}</TableCell>
                <TableCell align="left">{row.age}</TableCell>
                <TableCell align="left">{row.occupation}</TableCell>
                <TableCell align="left">{row.numOfCats}</TableCell>
                <TableCell align="left">{row.avgDailyWaterConsumptionLiters}</TableCell>
                {!selectedUser && (
                  <TableCell align="left">{row.location}</TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <SideBar user={selectedUser} isOpen={!!selectedUser} onClose={() => setSelectedUser(undefined)}/>
      </div>
    )
}