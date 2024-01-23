import Container from './container'

import Image from 'next/image'
import Link from 'next/link'
import { worksData } from '@/utils/worksData'

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
					<div className='mt-[70px] grid lg:grid-cols-3 md:grid-cols-2 gap-x-6 gap-y-10 justify-center '>
						{worksData &&
							worksData.map(item => {
								return (
									<div
										data-aos='zoom-in-down'
										className='max-w-[350px]'
										key={item.id}
									>
										<Image
											src={item.image}
											alt='work image'
											width={350}
											height={300}
											priority={true}
											className='w-[350px] h-[300px] object-cover rounded-[10px] object-top'
										/>
										<h4 className='mt-6 text-black text-[18px] font-[600] leading-normal'>
											<span className='text-accent'>0{item.id}. </span>{' '}
											{item.title}
										</h4>
										<p className='w-full my-6 text-parahraph text-normal font-[400] leading-[158.47%]'>
											{' '}
											{item.description}
										</p>
										<Link
											href={item.link}
											className='text-normal font-[500] leading-normal underline text-accent'
										>
											Batafsil
										</Link>
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
