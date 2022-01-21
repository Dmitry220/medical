import React, { useState } from 'react';
import galery from './gallery.module.css'
import { Link } from "react-router-dom";
import { Modal } from '../../../Modal/Modal';

const Gallery = () => {

	
	const [modalActive, setModalActive] = useState(false)
	const [modalImagePath, setModalImagePath] = useState('')

	const importAll = r => {
		let images = {};
		r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
		return images;
	}

	const images = importAll(require.context('../../../assets/img/Gallery', false, /\.(png|jpe?g|svg)$/));

	const zoomImage = (path) => {
		setModalActive(true);
		setModalImagePath(path)
	}

	return (
		<section className={galery.page__gallery + ' gallery'}>
			<div className={galery.gallery__container + " _container"}>
				<div className={galery.gallery__body} >
					{
						Object.values(images).map(path => (
							<div className={galery.gallery_blockImage} key={path}>
								<Link to="#" className={galery.gallery__image} onClick={() => zoomImage(path)}>
									<img src={path} alt={path} />
								</Link>
							</div>
						))
					}
				</div>
				{<Modal active={modalActive} setActive={setModalActive}>
					<img src={modalImagePath} className={galery.gallery__modalImg} alt="" />
				</Modal>}
			</div>
		</section>
	);
};

export default Gallery;