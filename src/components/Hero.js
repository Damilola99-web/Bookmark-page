import React from 'react';
import HeroImg from '../images/illustration-hero.svg';

export default function Hero() {
	return (
		<div className=" w-screen px-8 sm:px-16 flex flex-col-reverse md:flex-row items-center justify-between my-10">
			<div className=" w-[100%] md:w-[50%] flex flex-col items-center md:items-start md:pr-8 text-center md:text-left animated">
				<p className=" font-bold text-3xl md:text-5xl mb-6 text-VeryDarkBlue">A Simple Bookmark Manager</p>
				<p className=" text-lg text-GrayishBlue">
					A clean and simple interface to organize your favourite websites. Open a new browser tab and see
					your page load instantly. Try it for free.
				</p>
				<div className=" flex space-x-4 mt-6">
					<button className=" px-4 py-2 shadow-md rounded-md border-[2px] border-SoftBlue text-white duration-300 bg-SoftBlue hover:border-SoftBlue hover:text-SoftBlue hover:bg-white">
						Get it on Chrome
					</button>
					<button className=" px-4 py-2 shadow-md rounded-md border-[2px] duration-300 hover:border-SoftBlue text-center">
						Get it on Firefox
					</button>
				</div>
			</div>
			<div className=" w-[100%] md:w-[50%] animated">
				<img src={HeroImg} alt="" className="w-full" />
			</div>
		</div>
	);
}
