import { useEffect } from 'react'
import styles from '../styles/Hero.module.css'
import Container from './container'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Link from 'next/link'

const Hero = () => {
	useEffect(() => {
		AOS.init({ duration: 1000 })
	}, [])
	return (
		<Container>
			<div data-aos='fade-up' className={`${styles.hero} `}>
				<p className={`${styles.position}`}>Excellance IT Team</p>
				<h1 className={`${styles.title} md:text-[48px] text-[40px]`}>
					Biz murakkab vazifalar va muammolarga oson yechimlarni yaratamiz
				</h1>
				<Link href='#works'>
					<button className='rounded-[30px] bg-[#4985ff] shadow-[0px 0px 10px 0px rgba(111, 111, 111, 0.25)] cursor-pointer text-[16px] font-[500] leading-normal pt-[13px] px-[36px] pb-[15px] text-[#fff]'>
						Bizning loyihalar
					</button>
				</Link>
			</div>
		</Container>
	)
}

export default Hero
