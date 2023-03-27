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
            <div className="px-4">
                <h2>{name}</h2>
                <p>Phone Number: {phoneNumber}</p>
                <p>Favorite Color: {favColor}</p>
                <p>What is Best In Life?: {bestInLife}</p>
            </div>
        </Drawer>
    </>
)

}