import { Textfield, Button } from './components';
import { RiLockPasswordLine } from 'react-icons/ri';
import { MdOutlineEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';

function App() {
	return (
		<div className="App w-screen h-screen flex justify-center items-center">
			<div className="flex flex-col gap-5 justify-center items-center  h-full w-full ">
				<h1 className="text-typography text-[32px] font-bold">Log in</h1>
				<Textfield
					Icon={MdOutlineEmail}
					onChange={() => {
						console.log('Change');
					}}
					error=""
					placeholder="Email"
					name="name"
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
				<div className="flex w-[500px] justify-between">
					<a href="/#" className="text-sm text-typography">
						Forgot Password?
					</a>
					<a href="/#" className="text-sm text-typography">
						Sign up?
					</a>
				</div>
			</div>
		</div>
	);
}

export default App;
