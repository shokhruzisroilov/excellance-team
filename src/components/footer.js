import Link from 'next/link'
import Container from './container'
import { CiMail, CiLocationOn } from 'react-icons/ci'
import { IoCallOutline } from 'react-icons/io5'
import { MdKeyboardArrowRight } from 'react-icons/md'

const Footer = () => {
	return (
		<div className='bg-[#F6F6F8] py-[70px]'>
			<Container>
				<div className='flex flex-wrap gap-[50px] lg:justify-between justify-center'>
					<ul className='flex flex-col gap-6'>
						<li className='flex items-center gap-[15px]'>
							<h4 className='text-[#000] text-[18px] font-[600] leading-normal'>
								Kontakt ma'lumotlari
							</h4>
						</li>
						<li className='flex items-center gap-[15px]'>
							<CiMail className='text-[15px] text-parahraph cursor-pointer' />
							<p className='text-parahraph text-[14px] font-normal leading-[158.47%] cursor-pointer'>
								shohruzweb@gmail.com
							</p>
						</li>
						<li className='flex items-center gap-[15px]'>
							<IoCallOutline className='text-[15px] text-parahraph cursor-pointer' />
							<p className='text-parahraph text-[14px] font-normal leading-[158.47%] cursor-pointer'>
								+998940080473
							</p>
						</li>
						<li className='flex items-center gap-[15px]'>
							<CiLocationOn className='text-[15px] text-parahraph cursor-pointer' />
							<p className='text-parahraph text-[14px] font-normal leading-[158.47%] cursor-pointer'>
								Oʻzbekiston
							</p>
						</li>
					</ul>
					<ul className='flex flex-col gap-6'>
						<li className='flex items-center gap-[15px]'>
							<h4 className='text-[#000] text-[18px] font-[600] leading-normal'>
								Asosiy havolalar
							</h4>
						</li>
						<li className='flex items-center gap-[10px]'>
							<MdKeyboardArrowRight className='text-[15px] text-parahraph cursor-pointer' />
							<Link
								href='#home'
								className='text-parahraph text-[14px] font-normal leading-[158.47%] cursor-pointer'
							>
								Bosh sahifa
							</Link>
						</li>
						<li className='flex items-center gap-[10px]'>
							<MdKeyboardArrowRight className='text-[15px] text-parahraph cursor-pointer' />
							<Link
								href='#works'
								className='text-parahraph text-[14px] font-normal leading-[158.47%] cursor-pointer'
							>
								Bizning loyhalar
							</Link>
						</li>
						<li className='flex items-center gap-[10px]'>
							<MdKeyboardArrowRight className='text-[15px] text-parahraph cursor-pointer' />
							<Link
								href='#service'
								className='text-parahraph text-[14px] font-normal leading-[158.47%] cursor-pointer'
							>
								Xizmatlar
							</Link>
						</li>
						<li className='flex items-center gap-[10px]'>
							<MdKeyboardArrowRight className='text-[15px] text-parahraph cursor-pointer' />
							<Link
								href='#contacts'
								className='text-parahraph text-[14px] font-normal leading-[158.47%] cursor-pointer'
							>
								Kontaktlat
							</Link>
						</li>
					</ul>
					<ul className='flex flex-col gap-6'>
						<li className='flex items-center gap-[15px]'>
							<h4 className='text-[#000] text-[18px] font-[600] leading-normal'>
								Ijtimoiy tarmoqlar
							</h4>
						</li>
						<li className='flex items-center gap-[10px]'>
							<MdKeyboardArrowRight className='text-[15px] text-parahraph cursor-pointer' />
							<Link
								href='https://t.me/excellance'
								className='text-parahraph text-[14px] font-normal leading-[158.47%] cursor-pointer'
							>
								Telegram kanal
							</Link>
						</li>
						<li className='flex items-center gap-[10px]'>
							<MdKeyboardArrowRight className='text-[15px] text-parahraph cursor-pointer' />
							<Link
								href='https://t.me/excellance_group'
								className='text-parahraph text-[14px] font-normal leading-[158.47%] cursor-pointer'
							>
								Telegram guruh
							</Link>
						</li>
						<li className='flex items-center gap-[10px]'>
							<MdKeyboardArrowRight className='text-[15px] text-parahraph cursor-pointer' />
							<Link
								href='https://t.me/shohruz_isroilov'
								className='text-parahraph text-[14px] font-normal leading-[158.47%] cursor-pointer'
							>
								Founder
							</Link>
						</li>
						<li className='flex items-center gap-[10px]'>
							<MdKeyboardArrowRight className='text-[15px] text-parahraph cursor-pointer' />
							<Link
								href='https://t.me/lazy_smart_programmer'
								className='text-parahraph text-[14px] font-normal leading-[158.47%] cursor-pointer'
							>
								Admin
							</Link>
						</li>
					</ul>
				</div>
			</Container>
		</div>
	)
}

export default Footer
