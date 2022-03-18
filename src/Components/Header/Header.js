import React, {useEffect, useRef} from 'react';
import header from './header.module.css'
import { Link } from "react-router-dom";
import AnchorLink from 'react-anchor-link-smooth-scroll'

export const Header = ({ themeToggler, burgerActive, setBurgerActive }) => {

	let scrollPrev = 0;
	const r = useRef()

	useEffect(() => {

		const onScroll = () => {
			let scrolled = window.pageYOffset;
			if (scrolled > 100 && scrolled > scrollPrev) {
				document.querySelector(`.${header.header}`).classList.add(`${header.out}`);
			} else {
				document.querySelector(`.${header.header}`).classList.remove(`${header.out}`);
			}
			scrollPrev = scrolled;
		};
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, [scrollPrev])

	useEffect(()=>{
		document.querySelector('body').classList.toggle('lock');
	}, [burgerActive])

	return (
		<header className={header.header} ref={r}>
			<div className={header.header__container}>
				<div className={header.header__body}>
					<div className={header.header__column + ' ' + header.header__column_1}>
						<Link to="/" className={header.header__logo}>Medical </Link>
						<div className={burgerActive ? header.header__burger + ' ' + header.active : header.header__burger} onClick={() => setBurgerActive(prev => !prev)}>
							<span />
						</div>
						<nav className={burgerActive ? header.header__menu + ' ' + header.active : header.header__menu}>
							<ul className={header.header__list}>
								<li><Link to="" className={header.header__link}>Home</Link></li>
								<li><Link to="" className={header.header__link}>About us</Link></li>
								<li><Link to="" className={header.header__link}>Services</Link></li>
								<li><Link to="" className={header.header__link}>Portfolio</Link></li>
								<li><Link to="" className={header.header__link}>Blog</Link></li>
								<li><Link to="" className={header.header__link}>Contact</Link></li>
								<li className={header.themeCheck}><div className={header.header__link}>Темная тема</div>
									<label className={header.switch}>
										<input type="checkbox" onChange={themeToggler} />
										<span className={header.slider + ' ' + header.round} />
									</label>
								</li>
							</ul>
						</nav>
					</div>
					<div className={header.header__column}>
						<AnchorLink href="#form" className={header.header__btn + " btn"}>Get started</AnchorLink>
					</div>
				</div>
			</div>
		</header>
	);
};
