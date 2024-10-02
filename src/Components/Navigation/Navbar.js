import React, { useEffect, useState } from 'react';
import "./Navbar.css";
import logo from "../../assets/images/images.png";
import * as Images from "../../assets/images/Featured-Category/index";
import Select from '../Select/Select';
import axios from 'axios';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Header from '../Header/Header'
import ClickAwayListener from "react-click-away-listener";

export default function Navbar() {
  const allItemTypes = Object.values(Images);
  const categories = [
    'Pan Corner',
    'Dairy, Bread & Eggs',
    'Fruits & Vegetables', 
    'Beauty & Cosmetics',
    'Pet Care',
    'Clothing & Fashion',
    'Home Appliances',
    'Electronics & Gadgets',
    'Sweet Tooth',
    'Cool Drinks & Juices'
  ];
  const itemCategories = [
    { image: allItemTypes[0], label: 'Pan Corner' },
    { image: allItemTypes[1], label: 'Dairy & Bread' },
    { image: allItemTypes[2], label: 'Fruits & Vegies' },
    { image: allItemTypes[3], label: 'Drinks & Juices' },
    { image: allItemTypes[4], label: 'Meat & Fleshes' },
    { image: allItemTypes[5], label: 'Kids store' },
    { image: allItemTypes[6], label: 'Medical Wellness' },
    { image: allItemTypes[7], label: 'Beauty Products' },
    { image: allItemTypes[8], label: 'Pet care' },
    { image: allItemTypes[9], label: 'Home-Appliances' },
    { image: allItemTypes[10], label: 'Kitchen' },
    { image: allItemTypes[11], label: 'Fashion' },
    { image: allItemTypes[12], label: 'Electronics' },
    { image: allItemTypes[13], label: 'Accessories' },
    { image: allItemTypes[14], label: 'Sweet-Tooth' }
  ];
  const countryAPI = "https://freetestapi.com/api/v1/countries";
  const [countriesList, setCountriesList] = useState([]);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const fetchData = (dataType, URL) => {
    switch (dataType) {
      case "Countries":
        axios.get(URL)
          .then(res => res.data)
          .then(data => {
            let arr = [];
            data.map(name => arr.push(name.name))
            setCountriesList(arr)
          })
          .catch(err => console.log("Cann't Fetch Country Data " + err))
    }
  }

  useEffect(() => {
    fetchData("Countries", countryAPI);
    // $('body').width()<577?setIsOpen(true):setIsOpen(false);
  }, []);

  return (
    <header>
      <div className="container-fluid">
        {/* Row 1 */}
        <div className="row">
          <div className="logo col-3 col-sm-1">
            <img src={logo}/>
          </div>
          {/* Search Box */}
          <div className="col-9 col-sm-6">
            <div className="headerSearch d-flex align-item-center">
              <Select list={categories} title='All Categories' />
              <div className="serachBox">
                <input type="text" placeholder='Search Items' />
              </div>
              <div className="searchIcon"><i className="fa-solid fa-magnifying-glass"></i></div>
            </div>
          </div>
          {/* Location Selection */}
          <div className="location col-6 col-sm-2">
            <Select list={countriesList} title='Location' />
          </div>
          {/* Others Will Added Later */}
          <div className="col-3 col-sm-2 g-2">

          </div>
          {/* Profile */}
          <ClickAwayListener onClickAway={()=> setIsProfileOpen(false)}>
            <div className="profile col-3 col-sm-1" onClick={() => setIsProfileOpen(!isProfileOpen)}>
              <i className="fa-solid fa-user"></i>
              {isProfileOpen &&
                <MenuList className='ProfilePopup'>
                  <MenuItem>Profile</MenuItem>
                  <MenuItem>Wishlist</MenuItem>
                  <MenuItem>Cart</MenuItem>
                  <MenuItem>Settings</MenuItem>
                </MenuList>
              }
            </div>
          </ClickAwayListener>
          
        </div>

        {/* Row 2 */}
        <div className="row">
          <Header category={itemCategories} />
        </div>
        {/* <div className="hamburger" onClick={()=>setIsOpen(!isOpen)}><MenuIcon/></div> */}
        {/* <div className='mobile-menu'>
          <Header category={itemCategories} />
        </div> */}
      </div>
    </header>
  )
}
