import React from 'react';
import Logo from '../images/logo-bookmark.svg';
import LogoWhite from '../images/logo-bookmark3.svg';
import Hamburger from '../images/icon-hamburger.svg';
import Close from '../images/icon-close.svg';
import { useState } from 'react';

// icons
import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

export default function Navbar() {
	const [ navOpen, setnavOpen ] = useState(false);
	return (
		<div className="w-screen h-[80px] flex items-center justify-between px-8 sm:px-16 max-w-[1300px]">
			{!navOpen && <img className=" max-w-[150px] sm:max-w-[200px] object-contain" src={Logo} alt="" />}
			{/* nav items */}
			<div className="hidden md:flex items-center">
				<h3 className=" cursor-pointer mx-5 text-gray-900 hover:text-[#fa5757]">FEATURES</h3>
				<h3 className=" cursor-pointer mx-5 text-gray-900 hover:text-[#fa5757]">PRICING</h3>
				<h3 className=" cursor-pointer mx-5 text-gray-900 hover:text-[#fa5757]">CONTACT</h3>
				<button className=" mx-5 bg-[#fa5757] border-2 hover:bg-white hover:text-[#fa5757] border-[#fa5757] px-5 py-[6px] rounded-md text-gray-200 shadow-md">
					LOGIN
				</button>
			</div>

			{/* hamburger */}
			<div className=" md:hidden z-10" onClick={() => setnavOpen(!navOpen)}>
				{!navOpen && <img src={Hamburger} alt="" />}
			</div>

			{/* mobile menu */}
			{navOpen && (
				<div className="fixed w-screen h-screen top-0 duration-500 left-0 z-5 px-6 py-6 bg-[#1c284ee8]">
					<div className="top flex justify-between items-center ">
						<img className=" max-w-[150px] sm:max-w-[200px] object-contain" src={LogoWhite} alt="" />
						<img src={Close} alt="" onClick={() => setnavOpen(!navOpen)} />
					</div>
					<div className=" mt-[80px] ">
						<h3 className=" cursor-pointer border-collapse border-y-2 mx-[10px] text-center py-5 text-white text-xl hover:text-[#fa5757]">
							PRICING
						</h3>
						<h3 className=" cursor-pointer border-collapse border-y-2 mx-[10px] text-center py-5 text-white text-xl hover:text-[#fa5757]">
							FEATURES
						</h3>
						<h3 className=" cursor-pointer border-collapse border-y-2 mx-[10px] text-center py-5 text-white text-xl hover:text-[#fa5757]">
							CONTACT
						</h3>
						<button className=" border-2 w-[100%] mt-6 border-white hover:bg-[#fa5757] py-3 rounded-md text-gray-200">
							LOGIN
						</button>
					</div>

					<div className="icons flex items-center justify-center mt-20 md:my-0">
						<FaFacebookSquare className=" text-white hover:text-SoftRed mx-4" size="40" />
						<FaTwitter className="text-white hover:text-SoftRed mx-4" size="40" />
					</div>
				</div>
			)}
		</div>
	);
}
