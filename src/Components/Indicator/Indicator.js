import React, { useEffect } from 'react';
import './indicator.css'

export const Indicator = () => {
	useEffect(() => {
		const onScroll = e => {
		 document.querySelector('.progressBar').style.width = (window.pageYOffset* 100/(document.body.scrollHeight - window.innerHeight)) + "%"
		};
		window.addEventListener("scroll", onScroll);
	
		return () => window.removeEventListener("scroll", onScroll);
	  }, []);

	return <div className="progressBar"></div>	
};
