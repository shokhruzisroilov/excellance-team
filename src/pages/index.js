import style from '../styles/Home.module.css'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Services from '@/components/services'
import Development from '@/components/development'
import Works from '@/components/works'
import Teams from '@/components/teams'
import Advert from '@/components/advert'
import Subscribe from '@/components/subscribe'
import Footer from '@/components/footer'

export default function Home() {
	return (
		<>
			<div className={style.home}>
				<Header />
				<Hero />
			</div>
			<Services />
			<Development />
			<Works />
			<Teams />
			<Advert />
			<Subscribe />
			<Footer />
		</>
	)
}
