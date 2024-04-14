import Container from './container'

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
						width='866'
						height='487'
						src='https://www.youtube.com/embed/IIf2PSgv1jg'
						title='Web dasturchilar kim ?'
						frameborder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						referrerpolicy='strict-origin-when-cross-origin'
						allowfullscreen
					></iframe>
				</div>
			</Container>
		</div>
	)
}

export default Advert
