import { Navbar, Select } from '../components';
import { options } from '../constants';

export default function Dashboard() {
	return (
		<div className="dashboard">
			<Navbar />
			<div className="flex flex-col w-screen p-20 md:flex-row gap-20 h-screen">
				<div className="w-full gap-3 flex items-center px-10 flex-col md:w-1/5  bg-dark-grey py-10 h-max rounded-[2px] text-typography">
					<div className="w-[80px] h-[80px] flex items-center justify-center border-2 border-primary rounded-full">
						<h3 className="font-bold text-[32px]">H</h3>
					</div>
					<p className="font-semibold">Hamza Ali</p>
					<p className="font-semibold">Grade : 12th</p>
					<Item label="Test taken:" value="20" />
					<Item label="Average score:" value="20" />
					<Item label="Average percentage:" value="20" />
				</div>
				<div className="w-full p-5 md:w-4/5 flex flex-col gap-5 border-2 border-dark-grey h-full">
					<div className="w-max ">
						<Select
							className="min-w-[200px] max-w-max !bg-dark-grey"
							options={options}
							handleChange={(value) => console.log(value)}
							value="selected value"
						/>
					</div>
					<div className="border-2 border-dark-grey w-full h-full inline-block flex ">
						<div className="state-card w-[200px] h-[100px] inline-block bg-dark-grey"></div>
					</div>
				</div>
			</div>
		</div>
	);
}

interface IItem {
	label: string;
	value: string | number;
}

const Item = ({ label, value }: IItem) => {
	return (
		<div className="flex w-full justify-between">
			<p>{label}</p>
			<p>{value}</p>
		</div>
	);
};
