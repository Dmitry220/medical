import React from 'react';
import feature from './feature.module.css'
import img1 from '../../../assets/img/feature_1.jpg'
import img2 from '../../../assets/img/feature_1.jpg'

export const Feature = () => {

	return (
		<section className={feature.page__feature + " feature"}>
			<div className={feature.feature__body}>
				<div className={feature.feature__column}>
					<div className={feature.feature__content}>
						<div className={feature.feature__title}>Learn more about</div>
					</div>
					<div className={feature.feature__img}>
						<img src={img1} alt={img1} />
					</div>
				</div>
				<div className={feature.feature__column}>
					<div className={feature.feature__content + ' ' + feature.feature__content_blue}>
						<div className={feature.feature__overTitle + " overTitle"}>Feature</div>
						<div className={feature.feature__title}>Professional surgeons</div>
						<div className={feature.feature__text + " text"}>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.
							Consequuntur officia illum officiis sed perspiciatis quasi
							porro odit veniam nostrum, perferendis cupiditate numquam qui
							velit quas! Facere perspiciatis sit magnam provident?
						</div>
					</div>
				</div>
				<div className={feature.feature__column + ' ' + feature.feature__column_3}>
					<div className={feature.feature__content + ' ' + feature.feature__content_blue}>
						<div className={feature.feature__overTitle + " overTitle"}>Feature</div>
						<div className={feature.feature__title}>Emergency care for children</div>
						<div className={feature.feature__text + " text"}>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.
							Consequuntur officia illum officiis sed perspiciatis quasi
							porro odit veniam nostrum, perferendis cupiditate numquam qui
							velit quas! Facere perspiciatis sit magnam provident?
						</div>
					</div>
				</div>
				<div className={feature.feature__column}>
					<div className={feature.feature__content}>
						<div className={feature.feature__title}>Learn more about</div>
					</div>
					<div className={feature.feature__img + " _ibg"}>
						<img src={img2} alt={img2} />
					</div>
				</div>
			</div>
		</section>);
};
