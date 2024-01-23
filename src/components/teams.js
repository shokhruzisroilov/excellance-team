import Container from './container'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { teamsData } from '@/utils/teamsData'

const Teams = () => {
	return (
		<div className='py-[100px] w-full bg-[#F6F6F8]'>
			<Container>
				<h3
					data-aos='fade-up'
					className='text-black text-center lg:text[36px] text-[32px] font-[700] leading-[146.28%]'
				>
					Bizning jamoa
				</h3>
				<p
					data-aos='fade-up'
					className='text-center mt-[50px] text-parahraph text-normal font-[400] leading-[158.47%]'
				>
					Bizning jamoa bilan tanishib chiqishingiz mumkin
				</p>
				<div className='mt-[70px] flex gap-10 justify-center flex-wrap'>
					{teamsData &&
						teamsData.map(item => {
							return (
								<React.Fragment key={item.id}>
									<div
										data-aos='fade-up'
										className='flex flex-col items-center justify-center text-center'
									>
										<span className='w-[255px] h-[255px]'>
											<Image
												src={item.image}
												alt={item.name}
												className='rounded-full w-full h-full object-cover top-0'
											/>
										</span>
										<h3 className='text-black mt-2 text-[28px] font-[600] leading-normal'>
											{item.name}
										</h3>
										<p className='text-parahraph text-[24px] font-normal leading-[158.47%]'>
											{item.label}
										</p>
									</div>
								</React.Fragment>
							)
						})}
				</div>
				<Link
					href='https://t.me/excellance'
					className='flex justify-center mt-10'
				>
					<button
						data-aos='fade-up'
						className='rounded-[30px] bg-[#4985ff] shadow-[0px 0px 10px 0px rgba(111, 111, 111, 0.25)] cursor-pointer text-[16px] font-[500] leading-normal pt-[13px] px-[36px] pb-[15px] text-[#fff]'
					>
						Bizning jamoa
					</button>
				</Link>
			</Container>
		</div>
	)
}

export default Teams
