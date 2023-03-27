import Drawer from '@mui/material/Drawer';
import React, {useState} from 'react';
import {User} from '../common/util'


type SideBarProps = {
    isOpen: boolean,
    onClose: () => void,
    user?: User,
  }

export default function SideBar({user, isOpen, onClose}: SideBarProps) { 

const {name, favColor, bestInLife, phoneNumber} = user || {};

return (
    <>
        <Drawer
        anchor='right'
        open={isOpen}
        onClose={onClose}
        >
            <div className="p-6">
                <h2 className="text-xl py-4">{name}</h2>
                <p className="py-2"><b>Phone Number:</b> {phoneNumber}</p>
                <p className="py-2"><b>Favorite Color</b>: {favColor}</p>
                <p className="py-2"><b>What is Best In Life?</b>: {bestInLife}</p>
            </div>
        </Drawer>
    </>
)

}