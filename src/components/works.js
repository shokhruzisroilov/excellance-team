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
					<div className='mt-[70px]'>
						<Swiper
							navigation={true}
							modules={[Navigation]}
							className='mySwiper'
							breakpoints={{
								768: {
									slidesPerView: 2,
								},
								480: {
									slidesPerView: 1,
								},
								1024: {
									slidesPerView: 3,
								},
							}}
						>
							{worksData &&
								worksData.map(item => (
									<SwiperSlide key={item.id}>
										<div
											data-aos='zoom-in-down'
											className='max-w-[350px] bg-[#F6F6F8] rounded-[10px] cursor-pointer'
										>
											<Image
												src={item.image}
												alt='work image'
												width={350}
												height={300}
												priority={true}
												className='w-[350px] h-[300px] object-cover rounded-[10px] object-top'
											/>
											<h4 className='mt-6 pl-2 text-black text-[18px] font-[600] leading-normal'>
												<span className='text-accent'>0{item.id}. </span>{' '}
												{item.title}
											</h4>
											<p className='w-full my-6 pl-2 text-parahraph text-normal font-[400] leading-[158.47%]'>
												{' '}
												{item.description}
											</p>
											<Link
												href={item.link}
												className='text-normal pl-2 font-[500] leading-normal underline text-accent'
											>
												Batafsil
											</Link>
										</div>
									</SwiperSlide>
								))}
						</Swiper>
					</div>
				</Container>
			</div>
		</>
	)
}

export default Works
