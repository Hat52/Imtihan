import { Navbar, Select } from '../components';
import { options } from '../constants';

export default function Dashboard() {
	return (
		<div className="dashboard">
			<Navbar />
			<div className="flex flex-col w-screen p-20 md:flex-row gap-20 h-screen">
				<div className="w-full gap-3 flex items-center px-10 flex-col md:w-1/5   shadow-dark-grey shadow-md border border-dark-grey  py-10 h-max rounded-[2px] text-typography">
					<div className="w-[80px] h-[80px] flex items-center justify-center border-2 border-dark-grey rounded-full">
						<h3 className="font-bold text-[32px]">H</h3>
					</div>
					<p className="font-semibold">Hamza Ali</p>
					<p className="font-semibold">Grade : 12th</p>
					<Item label="Test taken:" value="20" />
					<Item label="Average score:" value="20" />
					<Item label="Average percentage:" value="20" />
				</div>
				<div className="w-full p-5  md:w-4/5 flex flex-col gap-5 h-full">
					<div className="flex items-center justify-between">
						<h2 className="text-typography text-lg font-semibold">Analytics</h2>
						<Select
							className="min-w-[200px] max-w-max !bg-dark-grey"
							options={options}
							handleChange={(value) => console.log(value)}
							value="selected value"
						/>
					</div>
					<div className="w-full py-10 h-full flex gap-5 flex-wrap">
						<StatsCard label="Total Test" value="20" />
						<StatsCard label="Total Test" value="20" />
						<StatsCard label="Total Test" value="20" />
						<StatsCard label="Total Test" value="20" />
						<StatsCard label="Total Test" value="20" />
						<StatsCard label="Total Test" value="20" />
						<StatsCard label="Total Test" value="20" />
						<StatsCard label="Total Test" value="20" />
					</div>
				</div>
			</div>
		</div>
	);
}

const StatsCard = ({ label, value }: IItem) => {
	return (
		<div className="state-card text-typography cursor-default items-center hover:bg-dark-grey hover:scale-105 hover:text-white transition-all duration-500 rounded-[8px] gap-2 p-2 min-w-[200px] grow h-[100px] flex flex-col justify-center shadow-dark-grey shadow-md border border-dark-grey">
			<h3 className="font-medium capitalize">{label}</h3>
			<p className="font-light text-[20px]">{value}</p>
		</div>
	);
};

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
