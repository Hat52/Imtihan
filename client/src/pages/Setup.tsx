import React from 'react';
import { Select, Stepper } from '../components';

const options = [
	{ name: 'option 1', value: 'option 1', href: '#' },
	{ name: 'option 2', value: 'option 2', href: '#' },
	{ name: 'option 3', value: 'option 3', href: '#' }
];

export default function Setup() {
	const steps = ['Step 1', 'Step 2', 'Step 3'];
	const [activeStep, setActiveStep] = React.useState(1);

	return (
		<div className="h-screen cursor-pointer flex justify-start pt-20 flex-col gap-10 items-center px-3 w-screen">
			<h3 className="text-typography text-2xl">
				You're so close! Give us a little more info and let the learning commence
			</h3>
			<Stepper steps={steps} className="" activeStep={activeStep} />
			<div className="flex items-center gap-20 min-h-[60%]">
				<ArrowSvg className="w-40 invisible h-40 rotate-90 hover:animate-pulse" />
				{/* <div className="flex flex-col gap-2">
					<h4 className="text-typography">Select Your Grade</h4>
					<Select
						options={options}
						handleChange={(value) => console.log(value)}
						value="selected value"
					/>
				</div> */}
				<div className="flex flex-col px-10">
					<h4 className="text-typography">Select Your Subject</h4>
					<div className="flex gap-5 w-[500px] max-w-full py-10 flex-wrap h-auto max-h-[200px] hide-scrollbar overflow-scroll bg-secondary">
						<Subject label="Chemistry" />
						<Subject label="Chemistry" />
						<Subject label="Chemistry" />
						<Subject label="Chemistry" />
					</div>
				</div>
				<ArrowSvg className="w-40 h-40 -rotate-90 hover:animate-pulse" />
			</div>
		</div>
	);
}

interface IArrowSvg {
	className: string;
}

const ArrowSvg = ({ className }: IArrowSvg) => {
	return (
		<svg
			className={className}
			aria-hidden="true"
			fill="none"
			stroke="#1F37B5"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg">
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M19 9l-7 7-7-7"></path>
		</svg>
	);
};

interface ISubject {
	label: string;
}

const Subject = ({ label }: ISubject) => {
	return (
		<div className="font-normal bg-typography text-secondary py-1 px-5 h-[30px] flex items-center rounded-lg hover:border-none hover:bg-dark-grey hover:text-typography">
			<span>{label}</span>
		</div>
	);
};
