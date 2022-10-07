import React from 'react';
import { Link } from 'react-router-dom';
import NotFound from "../Images/icons/not-found.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHome} from "@fortawesome/free-solid-svg-icons";
const PageNotFound = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <img src={NotFound}  alt="" />
            <h3 className='md:text-3xl sm:text-2xl my-4'>Page not found </h3>
            <Link to="/"> <button className='border px-8 py-1 text-white bg-black hover:bg-white hover:text-black duration-300'>Home <FontAwesomeIcon icon={faHome} size="sm" className='mx-2' /></button> </Link>
        </div>
    );
};

export default PageNotFound;