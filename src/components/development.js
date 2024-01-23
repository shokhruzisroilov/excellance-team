import Container from './container'
import Image from 'next/image'
import Link from 'next/link'
import developmentImage from '../assets/image/development-image.png'
import { ourResult } from '@/utils/ourResult'

const Development = () => {
	return (
		<div id='news' className='min-h-[800px] w-full bg-[#F6F6F8]'>
			<Container>
				<div className='flex flex-col lg:flex-row lg:gap-[120px] gap-[50px] text-center items-center justify-center py-[100px]'>
					<div data-aos='fade-up' className='lg:text-start text-center'>
						<h3 className='max-w-[740px] text-primary leading-[146.28%] font-[700] md:text-[36px] text-[32px]'>
							Yuqori standartlar rivojlanish!
						</h3>
						<p className='max-w-[730px] mt-[40px] mb-[30px] text-parahraph text-normal font-[400] leading-[158.47%]'>
							{`Biz o'z jamoni kundan kunga rivojlantirib kelmoqdamiz.Agar sizda
							bizning jamoga qo'shilmoqchi bo'lsangiz link orqali o'ting.Biz
							doim rivojlanishdan to'xtamaymiz.`}
						</p>
						<Link
							href='https://t.me/excellance'
							className='text-normal font-[500] leading-normal underline text-accent'
						>
							Kompaniya haqida batafsil
						</Link>
					</div>
					<div data-aos='fade-up'>
						<Image
							src={developmentImage}
							alt='developmentImage'
							width={500}
							height={400}
						/>
					</div>
				</div>
				<div className='w-full h-[1px] bg-[#E0E0E0]'></div>
				<div
					data-aos='fade-up'
					className='py-[70px] flex flex-wrap gap-x-[100px] gap-y-[50px] justify-center items-center'
				>
					{ourResult &&
						ourResult.map(item => {
							return (
								<div data-aos='zoom-in-up' key={item.id}>
									<div className='flex gap-4 items-center'>
										<span className='text-[32px] text-accent'>
											{item.image}
										</span>
										<h3 className='text-black leading-[146.28%] font-[400] text-[36px]'>
											{item.num}
										</h3>
									</div>
									<span className='pt-[17px] text-parahraph text-normal font-[400] leading-[158.47%]'>
										{item.name}
									</span>
								</div>
							)
						})}
				</div>
			</Container>
		</div>
	)
}

export default Development
