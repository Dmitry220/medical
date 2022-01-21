import React from 'react';
import why from './why.module.css'
import image_why from '../../../assets/img/replace image.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export const Why = (props) => {

	return (
		<section className={why.page__why + ' ' + why.why}>
			<div className={why.why__container + " _container"}>
				<div className={why.why__body}>
					<div className={why.why__column}>
						<h2 className={why.why__overTitle + " overTitle over-title_blue"}>
							WELCOME TO clinic
						</h2>
						<h2 className={why.why__title + " title"}>Why you should choose us ?</h2>
						<div className={why.why__text + " text text_grey"}>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.
							Quia, asperiores consequuntur modi eligendi a deleniti
							praesentium quo debitis! Voluptates quo facilis in iure
							temporibus ratione obcaecati, omnis laborum id autem.
						</div>
						<div className={why.why__buttons}>
							<AnchorLink href={"#form"} className={why.why__btn + " btn"}>Get started now</AnchorLink>
						</div>
					</div>
					<div className={why.why__column + ' ' + why.why__column_2}>
						<div className={why.why__image}>
							<img src={image_why} alt={image_why} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
