import React from 'react';

// images
import Image from '../images/illustration-features-tab-3.svg';

const Easysharing = () => {
	return (
		<div className="w-full flex flex-col md:flex-row items-center md:justify-between my-6">
			<img src={Image} alt="" className="w-full md:w-[45%] max-w-[500px] animated" />
			<div className="w-full md:w-[50%] text-center md:text-left flex flex-col justify-center animated">
				<p className="text-3xl text-VeryDarkBlue font-bold my-6 text-center md:text-left">
					Share your bookmarks
				</p>
				<p className="text-lg text-GrayishBlue md:max-w-[500px] text-center md:text-left">
					Easily share your bookmark and collection with others. Create a sharable link that you can send at
					the click of a button
				</p>
				<button className="  self-center md:self-start px-4 py-2 shadow-md rounded-md border-[2px] my-6 border-SoftBlue text-white duration-300 bg-SoftBlue hover:border-SoftBlue hover:text-SoftBlue hover:bg-white">
					More info
				</button>
			</div>
		</div>
	);
};

export default Easysharing;
