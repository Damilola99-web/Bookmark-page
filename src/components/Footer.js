import React from 'react';
import Logo from '../images/logo-bookmark3.svg';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
export default function Footer() {
	return (
		<div className="flex flex-col md:flex-row w-screen bg-VeryDarkBlue md:h-[80px] justify-between md:px-20 px-8 py-6 md:py-0">
			<div className="flex md:flex-row flex-col items-center justify-center">
				<img src={Logo} alt="" className=" md:mr-10 my-4 md:my-0" />
				<p className=" cursor-pointer text-white text-md text-center my-3 md:my-0 md:mx-2 hover:text-SoftRed">
					FEATURES
				</p>
				<p className=" cursor-pointer text-white text-md text-center my-3 md:my-0 md:mx-2 hover:text-SoftRed">
					PRICING
				</p>
				<p className=" cursor-pointer text-white text-md text-center my-3 md:my-0 md:mx-2 hover:text-SoftRed">
					CONTACT
				</p>
			</div>
			<div className="icons flex items-center justify-center my-10 md:my-0">
				<FaFacebookSquare className=" text-white hover:text-SoftRed mx-4" size="30" />
				<FaTwitter className="text-white hover:text-SoftRed mx-4" size="30" />
			</div>
		</div>
	);
}
