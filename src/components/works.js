import Container from './container'

import Image from 'next/image'
import Link from 'next/link'
import { worksData } from '@/utils/worksData'

import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

// import required modules
import { Navigation } from 'swiper/modules'

const Works = () => {
	return (
		<>
			<div id='works' className='w-full mb-[100px]'>
				<div className='w-full h-[490px] bgBlue'></div>
				<Container>
					<div className='flex flex-col lg:flex-row gap-10 items-center justify-between mt-[-390px]'>
						<h3
							data-aos='fade-up'
							className=' text-[#fff] lg:text-start text-center leading-[146.28%] font-[700] md:text-[36px] text-[32px]'
						>
							Bizning loyhalarimizdan <br /> namunalar⬇️
						</h3>
						<Link href='https://t.me/excellance'>
							<button
								data-aos='fade-up'
								className='rounded-[30px] bg-[#4985ff] shadow-[0px 0px 10px 0px rgba(111, 111, 111, 0.25)] cursor-pointer text-[16px] font-[500] leading-normal pt-[13px] px-[36px] pb-[15px] text-[#fff]'
							>
								Barcha loyhalar
							</button>
						</Link>
					</div>
					<div className='mt-[70px] gap-4 grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1'>
						{worksData &&
							worksData.map(item => {
								return (
									<div className='max-w-sm bg-[#fff] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
										<Image
											className='rounded-t-lg h-[300px]'
											src={item.image}
											alt='images'
										/>
										<div className='p-5'>
											<h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
												<span className='text-accent'>0{item.id}. </span>
												{item.title}
											</h5>
											<p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
												{item.description}
											</p>
											<a
												href={`${item.link}`}
												className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#fff] bg-accent rounded-lg  focus:ring-4 focus:outline-none '
											>
												Ko'proq
												<svg
													className='rtl:rotate-180 w-3.5 h-3.5 ms-2'
													aria-hidden='true'
													xmlns='http://www.w3.org/2000/svg'
													fill='none'
													viewBox='0 0 14 10'
												>
													<path
														stroke='currentColor'
														strokeLinecap='round'
														strokeLinejoin='round'
														strokeWidth={2}
														d='M1 5h12m0 0L9 1m4 4L9 9'
													/>
												</svg>
											</a>
										</div>
									</div>
								)
							})}
					</div>
				</Container>
			</div>
		</>
	)
}

export default Works
