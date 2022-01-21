import React from 'react';
import main from './main.module.css'
import bg from '../../../assets/img/bg header replace.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export const Main = () => {
	return (
		<section className={main.page__mainBlock + ' ' + main.mainBlock}>
			<div className={main.mainBlock__container + " _container"}>
				<div className={main.mainBlock__body}>
					<h1 className={main.mainBlock__title}>The best doctors in Medicine!</h1>
					<h3 className={main.mainBlock__subTitle}>
						in the world of modern medicine!
					</h3>
					<div className={main.mainBlock__text + " text"}>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
						rerum in, eos labore fuga ipsam sunt expedita dolorum
						dignissimos velit cupiditate fugiat, nihil quisquam architecto.
						Optio nobis atque similique amet.
					</div>
					<div className={main.mainBlock__buttons}>
						<AnchorLink href="#form" className={main.mainBlock__button + " btn"}>get started now</AnchorLink>

					</div>
				</div>
			</div>
			<div className={main.mainBlock__image + " _ibg"}>
				<img src={bg} alt={bg} />
			</div>
		</section>
	);
};
