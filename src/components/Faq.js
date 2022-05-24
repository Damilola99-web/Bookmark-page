import React from 'react';
import { useState } from 'react';

// icons
import { FaAngleDown } from 'react-icons/fa';

export default function Faq() {
	const [ firstQ, setfirstQ ] = useState(false);
	const [ secondQ, setsecondQ ] = useState(false);
	const [ thirdQ, setthirdQ ] = useState(false);
	const [ fourthQ, setfourthQ ] = useState(false);
	return (
		<div className="flex flex-col w-screen px-8 md:px-16 items-center justify-center my-20">
			<p className=" text-center text-VeryDarkBlue text-3xl font-bold">Frequently Asked Questions</p>
			<p className="text-GrayishBlue text-lg text-center my-8 max-w-[550px]">
				Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email
				us.
			</p>
			<button className="self-center px-4 py-2 shadow-md rounded-md border-[2px] my-6 border-SoftBlue text-white duration-300 bg-SoftBlue hover:border-SoftBlue hover:text-SoftBlue hover:bg-white">
				More info
			</button>

			{/* faqs */}
			<div className=" flex flex-col w-full py-8 items-center justify-center ">
				{/* faq */}
				<div className="w-[90%] flex flex-col max-w-[550px]">
					<div className=" w-full flex justify-between items-center max-w-[550px] border-t-2 py-4">
						<p className="hover:text-SoftRed text-VeryDarkBlue text-lg">What is Bookmark ?</p>
						<FaAngleDown
							size="20"
							className={
								firstQ ? (
									'cursor-pointer text-SoftRed spinned'
								) : (
									'cursor-pointer text-SoftBlue  spined duration-300'
								)
							}
							onClick={() => setfirstQ(!firstQ)}
						/>
					</div>
					{firstQ && (
						<p className=" text-GrayishBlue text-lg animated mb-4">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget
							ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.
						</p>
					)}
				</div>
				{/* faq end */}
				{/* faq */}
				<div className="w-[90%] flex flex-col max-w-[550px]">
					<div className=" w-full flex justify-between items-center max-w-[550px] border-t-2 py-4">
						<p className="hover:text-SoftRed text-VeryDarkBlue text-lg">
							How can i request a new browser ?
						</p>
						<FaAngleDown
							size="20"
							className={
								secondQ ? (
									'cursor-pointer text-SoftRed spinned'
								) : (
									'cursor-pointer text-SoftBlue  spined duration-300'
								)
							}
							onClick={() => setsecondQ(!secondQ)}
						/>
					</div>
					{secondQ && (
						<p className=" text-GrayishBlue text-lg animated mb-4">
							Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula.
							Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
							ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies.
							Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.
						</p>
					)}
				</div>
				{/* faq end */}
				{/* faq */}
				<div className="w-[90%] flex flex-col max-w-[550px]">
					<div className=" w-full flex justify-between items-center max-w-[550px] border-t-2 py-4">
						<p className="hover:text-SoftRed text-VeryDarkBlue text-lg">Is there a mobile app ?</p>
						<FaAngleDown
							size="20"
							className={
								thirdQ ? (
									'cursor-pointer text-SoftRed spinned'
								) : (
									'cursor-pointer text-SoftBlue  spined duration-300'
								)
							}
							onClick={() => setthirdQ(!thirdQ)}
						/>
					</div>
					{thirdQ && (
						<p className=" text-GrayishBlue text-lg animated mb-4">
							Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut
							condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra
							purus. Sed sollicitudin ex et ultricies bibendum.
						</p>
					)}
				</div>
				{/* faq end */}
				{/* faq */}
				<div className="w-[90%] flex flex-col max-w-[550px]">
					<div className=" w-full flex justify-between items-center max-w-[550px] border-t-2 border-b-2 py-4">
						<p className="hover:text-SoftRed text-VeryDarkBlue text-lg">
							What about other chromium browser ?
						</p>
						<FaAngleDown
							size="20"
							className={
								fourthQ ? (
									'cursor-pointer text-SoftRed spinned'
								) : (
									'cursor-pointer text-SoftBlue  spined duration-300'
								)
							}
							onClick={() => setfourthQ(!fourthQ)}
						/>
					</div>
					{fourthQ && (
						<p className=" text-GrayishBlue text-lg animated mb-4">
							Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui.
							Aliquam vitae neque eget nisl gravida pellentesque non ut velit.
						</p>
					)}
				</div>
				{/* faq end */}
			</div>
		</div>
	);
}
