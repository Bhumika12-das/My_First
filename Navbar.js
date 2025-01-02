import React, { useState } from "react";
import logo from "<svg width="175" height="35" viewBox="0 0 175 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.5 1.195H20.435V6.325H5.81V15.46H18.545V20.545H5.81V34H0.5V1.195ZM24.8422 17.62C24.8422 15.37 25.2772 13.24 26.1472 11.23C27.0172 9.19 28.2172 7.405 29.7472 5.875C31.2772 4.315 33.0472 3.085 35.0572 2.185C37.0972 1.285 39.2572 0.834998 41.5372 0.834998C43.8472 0.834998 46.0072 1.285 48.0172 2.185C50.0572 3.085 51.8572 4.315 53.4172 5.875C54.9772 7.405 56.1922 9.19 57.0622 11.23C57.9322 13.24 58.3672 15.37 58.3672 17.62C58.3672 19.96 57.9322 22.135 57.0622 24.145C56.1922 26.155 54.9772 27.94 53.4172 29.5C51.8572 31.03 50.0572 32.23 48.0172 33.1C46.0072 33.94 43.8472 34.36 41.5372 34.36C39.2572 34.36 37.0972 33.94 35.0572 33.1C33.0472 32.23 31.2772 31.045 29.7472 29.545C28.2172 28.015 27.0172 26.23 26.1472 24.19C25.2772 22.15 24.8422 19.96 24.8422 17.62ZM30.3322 17.665C30.3322 19.795 30.8272 21.745 31.8172 23.515C32.8372 25.255 34.2022 26.65 35.9122 27.7C37.6522 28.72 39.5872 29.23 41.7172 29.23C43.8172 29.23 45.7072 28.72 47.3872 27.7C49.0672 26.65 50.4022 25.255 51.3922 23.515C52.3822 21.745 52.8772 19.78 52.8772 17.62C52.8772 15.46 52.3672 13.495 51.3472 11.725C50.3572 9.955 49.0072 8.56 47.2972 7.54C45.5872 6.49 43.6822 5.965 41.5822 5.965C39.4822 5.965 37.5772 6.49 35.8672 7.54C34.1572 8.59 32.8072 10 31.8172 11.77C30.8272 13.54 30.3322 15.505 30.3322 17.665ZM63.3383 17.62C63.3383 15.37 63.7733 13.24 64.6433 11.23C65.5133 9.19 66.7133 7.405 68.2433 5.875C69.7733 4.315 71.5433 3.085 73.5533 2.185C75.5933 1.285 77.7533 0.834998 80.0333 0.834998C82.3433 0.834998 84.5033 1.285 86.5133 2.185C88.5533 3.085 90.3533 4.315 91.9133 5.875C93.4733 7.405 94.6883 9.19 95.5583 11.23C96.4283 13.24 96.8633 15.37 96.8633 17.62C96.8633 19.96 96.4283 22.135 95.5583 24.145C94.6883 26.155 93.4733 27.94 91.9133 29.5C90.3533 31.03 88.5533 32.23 86.5133 33.1C84.5033 33.94 82.3433 34.36 80.0333 34.36C77.7533 34.36 75.5933 33.94 73.5533 33.1C71.5433 32.23 69.7733 31.045 68.2433 29.545C66.7133 28.015 65.5133 26.23 64.6433 24.19C63.7733 22.15 63.3383 19.96 63.3383 17.62ZM68.8283 17.665C68.8283 19.795 69.3233 21.745 70.3133 23.515C71.3333 25.255 72.6983 26.65 74.4083 27.7C76.1483 28.72 78.0833 29.23 80.2133 29.23C82.3133 29.23 84.2033 28.72 85.8833 27.7C87.5633 26.65 88.8983 25.255 89.8883 23.515C90.8783 21.745 91.3733 19.78 91.3733 17.62C91.3733 15.46 90.8633 13.495 89.8433 11.725C88.8533 9.955 87.5033 8.56 85.7933 7.54C84.0833 6.49 82.1783 5.965 80.0783 5.965C77.9783 5.965 76.0733 6.49 74.3633 7.54C72.6533 8.59 71.3033 10 70.3133 11.77C69.3233 13.54 68.8283 15.505 68.8283 17.665ZM103.859 34V1.195H113.219C116.489 1.195 119.264 1.69 121.544 2.68C123.824 3.67 125.669 4.99 127.079 6.64C128.489 8.26 129.509 10.075 130.139 12.085C130.799 14.065 131.129 16.06 131.129 18.07C131.129 20.53 130.694 22.75 129.824 24.73C128.984 26.68 127.799 28.345 126.269 29.725C124.739 31.105 122.984 32.17 121.004 32.92C119.054 33.64 116.984 34 114.794 34H103.859ZM109.169 28.87H113.804C116.144 28.87 118.199 28.45 119.969 27.61C121.739 26.74 123.119 25.48 124.109 23.83C125.129 22.15 125.639 20.11 125.639 17.71C125.639 15.64 125.294 13.885 124.604 12.445C123.944 11.005 123.059 9.835 121.949 8.935C120.869 8.035 119.684 7.375 118.394 6.955C117.134 6.535 115.904 6.325 114.704 6.325H109.169V28.87ZM138.093 1.195H143.403V34H138.093V1.195ZM152.419 1.195H174.199V6.325H157.729V14.965H172.399V20.095H157.729V28.87H174.829V34H152.419V1.195Z" fill="#FE9E0D"/>
</svg>";
import { BsCart2 } from "react-icons/bs";
import { MiOutlineBars3 } from "react-icons/hi2";
import{ 
    Box,
    Drawer,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText }
     from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import {infoIcon} from "@mui/icons-material/info";
import { CommentRoundedIcon } from "@mui/icons-material/CommentRounded";
import { PhoneRoundedIcon } from "@mui/icons-material/PhoneRounded";
import { ShoppingCartRoundedIcon } from "@mui/icons-material/ShoppingCartRounded";
const  Navbar = () => {
    const [openmenu,setopenmenu] = useState(false)
    const menuoptions = [
        {
            text:"Home",
            icon:<HomeIcon/>
        },
        {
        text:"About",
        icon:<infoIcon/>
        },
        {
        text:"Testimonials",
            icon:<CommentRoundedIcon/>
        },
            {
            text:"Contact",
            icon:<PhoneRoundedIcon/>
            }
{
    text:"Cart",
    icon:<ShoppingCartRoundedIcon/>
},
    ];
  return (
    <nav>
        <div className="nav-logo-container">
            <ing src={logo} alt=""/>
            </div>
            <div className="navbar-links-container">
                <a href="">Home</a>
<a href="">About</a>
<a href="">Testimonials</a>
<a href="">Contact</a>
  <a href="">
    <BsCart2 className="navbar-cart-icon"/>
    </a>      
    <button className="primary-button">Bookings now</button>        
                </div>
                <div className="navbar-menu-container">
                    <MiOutlineBars3 oneclick = {() => setopenmenu(true)} />
                </div>
<Drawer open={openmenu}onClose={() => setopenmenu(false)}
anchor="right">
    <Box sx={ { Width: 250} }
    role = "presentation"
    oneclick ={() => setopenmenu(false)}
    onkeyDown ={() => setopenmenu(false)}
    >
        <list>
{menuoptions.map{(item) => 
(<ListItem key={item.text} disablePadding>
    <ListItemButton>
    <ListItemIcon>{item.icon}</ListItemIcon>
    <ListItemText primary = {item.text} />
    </ListItemButton>
    </ListItem>
)}}

        </list>
</Box>
</Drawer>
    </nav>;
  )
};

export default Navbar;