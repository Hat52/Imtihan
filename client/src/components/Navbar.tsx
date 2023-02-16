import { Link } from 'react-router-dom';
import Logout from '../assets/img/logout.svg';

export default function Navbar() {
	return (
		<div className="navbar absolute top-0 w-full h-[50px] bg-dark-grey flex shadow-sm items-center justify-between px-5 md:px-20">
			<div className="flex gap-2 items-center">
				<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24">
					<path
						fill="#E2E2E2"
						d="M21.8,5.5c-0.4-0.4-1-0.4-1.4,0l-1.7,1.7l2.8,2.8l1.7-1.7C22.2,6.5,22.2,5.9,21.8,5.5z"
					/>
					<path
						fill="#1F37B5"
						d="M6.7,16.3c0,0.6,0.5,1,1,1H17c0.6,0,1-0.5,1-1v-8H6.7V16.3z M14,5.5l-1.7,1.7l-4.6-4.6l1.7-1.7c0.4-0.4,1-0.4,1.4,0l2,2C14.4,4.5,14.4,5.1,14,5.5z"
					/>
				</svg>
				<p className="text-typography font-normal text-lg">Imtihan</p>
			</div>
			<Link to="/">
				<img src={Logout} className="w-[15px] h-[15px] md:w-[20px] md:h-[20px]" />
			</Link>
		</div>
	);
}
