
import React from 'react';
import footer from './footer.module.css'
import { Link } from "react-router-dom";

export const Footer = () => {
	return (
		<footer className={footer.footer}>
			<div className={footer.footer__container + " _container"}>
				<div className={footer.footer__body}>
					<div className={footer.foooter__column + ' ' + footer.foooter__column_1}>
						<h3 className={footer.footer__title}>Medical</h3>
						<div className={footer.footer__text + " text"}>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
						</div>
						<div className={footer.footer__text + " text"}>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
							quas distinctio nostrum. Ab aspernatur consectetur temporibus
							praesentium in quibusdam pariatur, laboriosam culpa? Nostrum
							molestias molestiae mollitia. Repudiandae provident quod
							dolorem!
						</div>
					</div>
					<div className={footer.foooter__column + ' ' + footer.foooter__column_2}>
						<h3 className={footer.footer__title}>New York</h3>
						<div className={footer.footer__links}>
							<Link to="" className={footer.footer__link}>709 Honey Creek Dr.</Link>
							<Link to="" className={footer.footer__link}>New York</Link>
							<Link to="" className={footer.footer__link}>NY 10028</Link>
							<Link to="" className={footer.footer__link}>1-888-299-2000</Link>
							<Link to="" className={footer.footer__link}>yourmail@ompany.com</Link>
						</div>
					</div>
					<div className={footer.foooter__column + ' ' + footer.foooter__column_3}>
						<h3 className={footer.footer__title}>London</h3>
						<div className={footer.footer__links}>
							<Link to="" className={footer.footer__link}>4851 Willow Greene Drive</Link>
							<Link to="" className={footer.footer__link}>Montgomery</Link>
							<Link to="" className={footer.footer__link}>AL 36109</Link>
							<Link to="" className={footer.footer__link}>1-888-299-2000</Link>
							<Link to="" className={footer.footer__link}>yourmail@ompany.com</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};
