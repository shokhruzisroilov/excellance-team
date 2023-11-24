import Container from './container'
import Image from 'next/image'
import { servicesData } from '@/utils/servicesData'
import Link from 'next/link'

const Services = () => {
	return (
		<Container>
			<div id='service' className='flex flex-col items-center'>
				<h3
					data-aos='fade-up'
					className='max-w-[740px] text-primary text-center leading-[146.28%] font-[700] md:text-[36px] text-[32px] mt-[110px] '
				>
					Biz websaytlar yaratamiz sizning bisnesingiz uchun!
				</h3>
				<p
					data-aos='fade-up'
					className='max-w-[730px] text-center mt-[50px] text-parahraph text-normal font-[400] leading-[158.47%]'
				>
					Biz sizga eng sifatli bo`lgan saytlarni hamyonbop narxga yaratib
					beramiz. Bizning maqsadimiz insonlarga hamyonbop narxda, tez, sifatli
					va qulay xizmat ko`rsatish.
				</p>
			</div>
			<div className='mt-[70px] gap-[30px] justify-center grid lg:grid-cols-3 md:grid-cols-2'>
				{servicesData &&
					servicesData.map(item => {
						return (
							<div
								data-aos='zoom-in-up'
								className='flex gap-[18px] items-center'
								key={item.id}
							>
								<div className='border-[1px] border-[#E0E0E0] rounded-full p-[10px] '>
									<div className='p-[25px] border-[1px] border-[#4985FF] rounded-full'>
										<Image
											src={item.image}
											alt='image'
											className='max-w-[40px]'
										/>
									</div>
								</div>
								<div className='max-w-[222px] mt-[46px]'>
									<h3 className='text-black text-[18px] font-[600] leading-normal'>
										{item.title}
									</h3>
									<p className='text-parahraph text-[14px] font-normal leading-[158.47%]'>
										{item.paragraph}
									</p>
								</div>
							</div>
						)
					})}
			</div>
			<div
				data-aos='fade-up'
				className='mt-[55px] mb-[105px] flex justify-center'
			>
				<Link href='https://t.me/ExcelLanceTeam'>
					<button className='rounded-[30px] bg-[#4985ff] shadow-[0px 0px 10px 0px rgba(111, 111, 111, 0.25)] cursor-pointer text-[16px] font-[500] leading-normal pt-[13px] px-[36px] pb-[15px] text-[#fff]'>
						Barcha xizmatlar
					</button>
				</Link>
			</div>
		</Container>
	)
}

export default Services
