import Link from 'next/link'
import Container from './container'

const Subscribe = () => {
	return (
		<Container>
			<div
				id='contacts'
				className='w-full mt-[165px] h-[1px] bg-[#E0E0E0] md:flex hidden'
			></div>
			<div
				data-aos='fade-up'
				className='flex flex-col items-center justify-center'
			>
				<h4 className='text-[#000] text-center mt-[85px] text-[18px] font-[600] leading-normal'>
					{`Bizning kanalimizga obuna bo'ling`}
				</h4>
				<p className='text-parahraph text-center font-normal leading-[158.47%] mt-4'>
					Foydali maqolalar, aksiyalar, yangiliklar – hammasini hoziroq oling!
				</p>
				<div className='sm:flex input mt-[30px] '>
					<input
						type='text'
						placeholder='Emailingiz'
						className='outline-none text-parahraph text-[13px] font-normal leading-[158.47%] py-3 px-8 borderIn'
					/>
					<Link href='https://t.me/excellance'>
						<button className='bg-accent text-[#fff] w-full h-full px-6 border text-center text-normal font-[500] leading-normal max-sm:rounded-tr-full max-sm:rounded-bl-full max-sm:py-2'>
							{`Obuna bo'lish`}
						</button>
					</Link>
				</div>
				<p className='text-parahraph text-center font-normal leading-[158.47%] mt-[35px] mb-[85px]'>
					{`Biz spam yubormaymiz va ma'lumotlaringizni hech kimga bermaymiz.`}
				</p>
			</div>
		</Container>
	)
}

export default Subscribe
