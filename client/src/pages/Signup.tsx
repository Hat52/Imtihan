import { Textfield, Button } from '../components';
import { RiLockPasswordLine } from 'react-icons/ri';
import { MdOutlineEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';

export default function Signup() {
	return (
		<div className="flex flex-col gap-5 justify-center items-center  h-full w-full ">
			<h1 className="text-typography text-[32px] font-bold">Log in</h1>
			<Textfield
				Icon={MdOutlineEmail}
				onChange={() => {
					console.log('Change');
				}}
				error=""
				placeholder="Full Name"
				name="fullName"
				type="text"
				label="Enter your Full Name"
				value=""
			/>
			<Textfield
				Icon={MdOutlineEmail}
				onChange={() => {
					console.log('Change');
				}}
				error=""
				placeholder="Email"
				name="email"
				type="email"
				label="Enter your email"
				value=""
			/>
			<Textfield
				Icon={RiLockPasswordLine}
				onChange={() => {
					console.log('Change');
				}}
				error=""
				placeholder="Password"
				name="password"
				type="password"
				label="Enter your password"
				value=""
			/>
			<Button text="Login" onClick={() => console.log('click')} />
			<div className="flex w-[500px] justify-end">
				<Link to="/" className="text-sm text-typography">
					Login?
				</Link>
			</div>
		</div>
	);
}
