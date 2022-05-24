import React from 'react';

export default function Connect() {
	return (
		<div className=" bg-SoftBlue md:h-[300px] w-screen px-8 md:px-16 flex flex-col items-center text-center justify-center py-16 md:py-0">
			<p className=" text-white text-md font-semibold">35,000+ ALREADY JOINED</p>
			<p className=" my-6 text-white text-2xl md:text-3xl font-bold md:max-w-[400px]">
				Stay up-to-date with what we're doing
			</p>
			<div className="flex flex-col md:flex-row w-full self-center items-center justify-center space-y-3 md:space-y-0">
				<input
					type="email"
					placeholder="Enter email"
					className="pl-[30px] w-full md:w-[300px] h-[45px] md:h-[40px] rounded-md focus:border-0 focus:outline-0"
				/>
				<button className="w-full md:w-auto md:mx-3 h-[45px] md:h-[40px] bg-[#fa5757] border-2 hover:bg-white hover:text-[#fa5757] border-[#fa5757] px-5 py-[6px] rounded-md text-gray-200 shadow-md">
					Contact Us
				</button>
			</div>
		</div>
	);
}
