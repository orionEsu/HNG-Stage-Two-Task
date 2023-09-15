import './footer.scss';

const Footer = () => {
	const date = new Date();

	return (
		<footer className='footer'>
			<div className='footer__icons'>
				<img
					src='src/assets/fa-brands_facebook-square.svg'
					alt='Facebook Icon'
				/>
				<img
					src='src/assets/fa-brands_instagram.svg'
					alt='Instagram Icon'
				/>
				<img
					src='src/assets/fa-brands_twitter.svg'
					alt='Twitter Icon'
				/>
				<img
					src='src/assets/youtube.svg'
					alt='Youtube Icon'
				/>
			</div>

			<div className='footer__links'>
				<a href='#'>Conditions of Use</a>
				<a href='#'>Privacy & Policy</a>
				<a href='#'>Press Room</a>
			</div>

			<p className='footer__credits'>
				© {' '} {date.getFullYear()} {' '}
				MovieBox by Orion Esu
			</p>
		</footer>
	);
};

export default Footer;
