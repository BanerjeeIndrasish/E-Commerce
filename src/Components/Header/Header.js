import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import '../Header/Header.css';
import CategoryIcon from '@mui/icons-material/Category';
import Categorycard from './Categorycard';
import ClickAwayListener from "react-click-away-listener";

export default function Header({category}) {
    const [isCategory, setIsCategory] = useState(false);
    const handleCategoryPanel = () => {
        setIsCategory(!isCategory);
    }
    useEffect(() => {
        // console.log(isCategory)
    }, [isCategory])
    return (
        <div className="header">
            <div className='Nav d-flex align-items-center'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="Coulmn1 col-3 col-sm-3">
                            <Button variant='contained' className='Allbutton' onClick={handleCategoryPanel}><CategoryIcon className='icon'/>Browse All</Button>
                        </div>
                        <div className="Coulmn2 col-9 col-sm-6">
                            <Button variant='outlined' className='button'>Home</Button>
                            <Button variant='outlined' className='button'>About</Button>
                            <Button variant='outlined' className='button'>Shop</Button>
                            <Button variant='outlined' className='button'>Menu</Button>
                            <Button variant='outlined' className='button'>Pages</Button>
                            <Button variant='outlined' className='button'>Contact</Button>
                        </div>
                        {/* <div className="Coulmn3 col-2 col-sm-3">
                            {<h5>Contact Us 1001-356326</h5>}
                        </div> */}
                    </div>

                </div>
            </div>

            {isCategory && 
            <ClickAwayListener onClickAway={handleCategoryPanel}>
            <div className="allCategoriesPanel">
                <div className="category-container">
                    {category.map((category, index) => <div className="catCards" key={index}><Categorycard image={category.image} label={category.label}/></div>)}
                </div>
            </div>
            </ClickAwayListener>}
        </div>
    )
}
