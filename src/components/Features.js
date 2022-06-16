import React, { useState } from 'react';

// toggle tabs
import Simplebookmarking from './Simplebookmarking';
import Easysharing from './Easysharing';
import Speedysearching from './Speedysearching';

const Features = () => {
	const [ one, setOne ] = useState(true);
	const [ two, setTwo ] = useState(false);
	const [ three, setThree ] = useState(false);
	return (
		<div className=" flex flex-col mt-8 px-8 md:px-16 justify-center w-screen items-center mb-6">
			<p className="text-3xl text-VeryDarkBlue text-center font-bold md:text-4xl">Features</p>
			<p className=" text-lg text-GrayishBlue text-center max-w-[600px] my-6 self-center">
				Our aim is to quickly access your favourite websites. Your bookmarks syncs between your device so you
				can use them on the go
			</p>
			<div>
				<div className="flex flex-col lg:flex-row items-center justify-center my-12 max-w-[900px]">
					<button
						className={
							one ? (
								'hover:text-SoftRed animated h-[60px] w-full lg:w-[300px] text-VeryDarkBlue font-semibold text-xl px-3 p-4 border-b-2 border-b-SoftRed'
							) : (
								'hover:text-SoftRed h-[60px] w-full  lg:w-[300px] text-GrayishBlue text-xl px-3 p-2 border-b-2 border-b-gray-400'
							)
						}
						onClick={() => {
							setOne(true);
							setTwo(false);
							setThree(false);
						}}
					>
						Simple Bookmarking
					</button>
					<button
						className={
							two ? (
								'hover:text-SoftRed h-[60px] animated w-full lg:w-[300px] text-VeryDarkBlue font-semibold text-xl px-3 p-4 border-b-2 border-b-SoftRed'
							) : (
								'hover:text-SoftRed h-[60px] w-full lg:w-[300px] text-GrayishBlue text-xl px-3 p-2 border-b-2 border-b-gray-400'
							)
						}
						onClick={() => {
							setOne(false);
							setTwo(true);
							setThree(false);
						}}
					>
						Speedy Searching
					</button>
					<button
						className={
							three ? (
								'hover:text-SoftRed h-[60px] animated w-full lg:w-[300px] text-VeryDarkBlue font-semibold text-xl px-3 p-4 border-b-2 border-b-SoftRed'
							) : (
								'hover:text-SoftRed h-[60px] w-full lg:w-[300px] text-GrayishBlue text-xl px-3 p-2 border-b-2 border-b-gray-400'
							)
						}
						onClick={() => {
							setOne(false);
							setTwo(false);
							setThree(true);
						}}
					>
						Easy Sharing
					</button>
				</div>
				<div>
					{one && <Simplebookmarking />}
					{two && <Speedysearching />}
					{three && <Easysharing />}
				</div>
			</div>
		</div>
	);
};

export default Features;
