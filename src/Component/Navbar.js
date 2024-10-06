import React from 'react';
import {Link} from 'react-router-dom';
import { IoMdArrowDropdown } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import { MdLightMode } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";
import './navbar.css';

export default function Navbar() {
  return (
    <div className='nav'>
        <div className='logo'><h1>ImageReshape</h1></div>
        <div className='links'>
          <p>Image Resizer</p>
          <p>Crop Image</p>
          <p>Image Compressor</p>
          <p>Bulk Resize</p>
          <p className='more'>More</p>
        </div>
        <div className='social-icon'>
            <p><MdLightMode/></p>
            <p><FaGithub/></p>
            <p><IoLanguage/></p>
            </div>
            <div className='toogle'><CiMenuFries/></div>
    </div>
  )
}
