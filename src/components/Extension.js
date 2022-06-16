import React from 'react';

// images
import Chrome from '../images/logo-chrome.svg';
import Firefox from '../images/logo-firefox.svg';
import Opera from '../images/logo-opera.svg';
import Dot from '../images/bg-dots.svg';

export default function Extension() {
	return (
		<div className="w-screen px-8 md:px-16 flex flex-col items-center my-10">
			<p className="text-2xl md:text-3xl text-VeryDarkBlue font-bold text-center">Download the extension</p>
			<p className=" text-GrayishBlue text-lg text-center max-w-[650px] my-6">
				We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like to
				patronize
			</p>
			{/* card container */}
			<div className="flex flex-col md:flex-row my-6 md:space-x-6 mb-8 w-full flex-wrap items-center justify-center">
				{/* card */}
				<div className="self-center w-[100%] max-w-[300px] md:w-[240px] rounded-lg shadow-lg shadow-slate-300 h-[320px] flex items-center flex-col justify-center my-4 md:my-0">
					<img src={Chrome} alt="" className="max-w-[100px] mb-6" />
					<p className=" text-xl text-VeryDarkBlue text-center font-bold">Add to Chrome</p>
					<p className=" text-GrayishBlue text-md text-center mb-6">Miminum version 62</p>
					<img src={Dot} alt="" />
					<button className="self-center px-4 py-2 shadow-md rounded-md border-[2px] my-6 border-SoftBlue text-white duration-300 bg-SoftBlue hover:border-SoftBlue hover:text-SoftBlue hover:bg-white">
						Add & install Extension
					</button>
				</div>
				{/* card */}
				<div className="self-center w-[100%] max-w-[300px] md:w-[240px] rounded-lg shadow-lg shadow-slate-300 h-[320px] flex items-center flex-col justify-center md:mt-8 my-4 md:my-0">
					<img src={Firefox} alt="" className="max-w-[100px] mb-6" />
					<p className=" text-xl text-VeryDarkBlue text-center font-bold">Add to Firefox</p>
					<p className=" text-GrayishBlue text-md text-center mb-6">Miminum version 55</p>
					<img src={Dot} alt="" />
					<button className="self-center px-4 py-2 shadow-md rounded-md border-[2px] my-6 border-SoftBlue text-white duration-300 bg-SoftBlue hover:border-SoftBlue hover:text-SoftBlue hover:bg-white">
						Add & install Extension
					</button>
				</div>
				{/* card */}
				<div className="self-center w-[100%] max-w-[300px] md:w-[240px] rounded-lg shadow-lg shadow-slate-300 h-[320px] flex items-center flex-col justify-center md:mt-16 my-4 md:my-0">
					<img src={Opera} alt="" className="max-w-[100px] mb-6" />
					<p className=" text-xl text-VeryDarkBlue text-center font-bold">Add to Opera</p>
					<p className=" text-GrayishBlue text-md text-center mb-6">Miminum version 46</p>
					<img src={Dot} alt="" />
					<button className="self-center px-4 py-2 shadow-md rounded-md border-[2px] my-6 border-SoftBlue text-white duration-300 bg-SoftBlue hover:border-SoftBlue hover:text-SoftBlue hover:bg-white">
						Add & install Extension
					</button>
				</div>
			</div>
		</div>
	);
}
