import React from 'react';
// image
import Image from '../images/illustration-features-tab-1.svg';
export default function Simplebookmarking() {
	return (
		<div className="w-full flex flex-col md:flex-row items-center md:justify-between my-6">
			<img src={Image} alt="" className="w-full md:w-[45%] max-w-[500px] animated-left" />
			<div className="w-full md:w-[50%] text-center md:text-left flex flex-col justify-center animated-right">
				<p className="text-3xl text-VeryDarkBlue font-bold my-6 text-center md:text-left">
					Bookmark in one click
				</p>
				<p className="text-lg text-GrayishBlue md:max-w-[500px] text-center md:text-left">
					Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete
					control over how you manage your favourite sites.
				</p>
				<button className="  self-center md:self-start px-4 py-2 shadow-md rounded-md border-[2px] my-6 border-SoftBlue text-white duration-300 bg-SoftBlue hover:border-SoftBlue hover:text-SoftBlue hover:bg-white">
					More info
				</button>
			</div>
		</div>
	);
}
