import Link from 'next/link'
import Container from './container'
import styles from '../styles/Header.module.css'
import { FaBarsStaggered } from 'react-icons/fa6'
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'

const Header = () => {
	const [menu, setMenu] = useState(false)
	return (
		<>
			{/* <div className={styles.headerScroll}> */}
			<Container>
				<div className={styles.header}>
					<div className={styles.logo}>
						Excellance<span className={styles['logo-span']}>Team</span>
					</div>
					<div className={styles.burger}>
						<FaBarsStaggered
							onClick={() => setMenu(!menu)}
							className='lg:hidden'
						/>
					</div>
					<nav>
						<ul>
							<li>
								<Link href='#home' className={styles.active}>
									Bosh sahifa
								</Link>
							</li>
							<li>
								<Link href='#works' className={styles.link}>
									Bizning loyihalarimiz
								</Link>
							</li>
							<li>
								<Link href='#service' className={styles.link}>
									Xizmatlar
								</Link>
							</li>
							<li>
								<Link href='#news' className={styles.link}>
									Yangiliklar
								</Link>
							</li>
							<li>
								<Link href='#contacts' className={styles.link}>
									Kontaktlar
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</Container>
			{/* </div> */}
			<div className={styles.line}></div>
			<div className={`${styles.navbar} ${menu && styles['navbar-active']}`}>
				<div className={styles.nav}>
					<AiOutlineClose
						className={styles.close}
						onClick={() => setMenu(!menu)}
					/>
				</div>
				<ul>
					<li>
						<Link
							href='#home'
							className={styles.linkMobile}
							onClick={() => setMenu(!menu)}
						>
							Bosh sahifa
						</Link>
					</li>
					<li>
						<Link
							href='#works'
							className={styles.linkMobile}
							onClick={() => setMenu(!menu)}
						>
							Bizning loyihalarimiz
						</Link>
					</li>
					<li>
						<Link
							href='#service'
							className={styles.linkMobile}
							onClick={() => setMenu(!menu)}
						>
							Xizmatlar
						</Link>
					</li>
					<li>
						<Link
							href='#news'
							className={styles.linkMobile}
							onClick={() => setMenu(!menu)}
						>
							Yangiliklar
						</Link>
					</li>
					<li>
						<Link
							href='https://t.me/shohruz_isroilov'
							className={styles.linkMobile}
							onClick={() => setMenu(!menu)}
						>
							Kontaktlar
						</Link>
					</li>
				</ul>
			</div>
		</>
	)
}

export default Header
