import Container from "./container"

const Advert = () => {
	return (
		<div className='w-full h-[570px] advertBg'>
			<Container>
				<div className='flex flex-col items-center justify-center'>
					<h3
						data-aos='fade-up'
						className='text-[#fff] pt-[70px] text-center leading-[146.28%] font-[700] md:text-[36px] text-[32px]'
					>
						Bizning ishimiz haqida video
					</h3>
					<p
						data-aos='fade-up'
						className='text-[#fff] mt-6 text-center text-[16px] font-normal leading-[158.47%]'
					>
						Qilgan ishlayotganimizni tomosha qiling
					</p>
					<iframe
						data-aos='fade-up'
						src='https://www.youtube.com/embed/lvSXqKvp364'
						title='What Is Website ? | How Website Works ? | What Is Website URL ?'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						className='mt-[70px] video lg:w-[970px] w-full md:h-[430px] h-[230px]'
					></iframe>
				</div>
			</Container>
		</div>
	)
}

export default Advert
