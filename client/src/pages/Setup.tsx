import { useState } from 'react';
import { Select } from '../components';

const options = [
	{ name: 'option 1', value: 'option 1', href: '#' },
	{ name: 'option 2', value: 'option 2', href: '#' },
	{ name: 'option 3', value: 'option 3', href: '#' }
];

export default function Setup() {
	const [activeStep, setActiveStep] = useState(1);

	return (
		<div className="h-screen cursor-pointer flex justify-start pt-20 flex-col gap-10 items-center px-3 w-screen">
			<h3 className="text-typography text-2xl">
				You're so close! Give us a little more info and let the learning commence
			</h3>
			{/* <Stepper steps={steps} className="" activeStep={activeStep} /> */}
			<div className="flex items-center gap-20 min-h-[60%]">
				<ArrowSvg
					className={`w-40 h-40  rotate-90 hover:animate-pulse ${
						activeStep !== 1 ? 'visible' : 'invisible'
					}`}
					handleClick={() => setActiveStep(activeStep - 1)}
				/>
				{activeStep === 1 ? (
					<>
						<div className="flex flex-col gap-2">
							<h4 className="text-typography">Select Your Grade</h4>
							<Select
								options={options}
								handleChange={(value) => console.log(value)}
								value="selected value"
							/>
						</div>
					</>
				) : (
					<>
						<div className="flex flex-col px-10">
							<h4 className="text-typography text-2xl font-bold ">Select Your Subject</h4>
							<div className="flex gap-5 w-max max-w-[400px] h-max max-h-[40vh] py-10 flex-wrap hide-scrollbar overflow-scroll">
								<Subject label="Chemistry" selected={true} />
								<Subject label="Chemistry" selected={false} />
								<Subject label="Chemistry" selected={true} />
								<Subject label="Chemistry" selected={false} />
								<Subject label="Chemistry" selected={false} />
								<Subject label="Chemistry" selected={false} />
							</div>
						</div>
					</>
				)}

				<ArrowSvg
					className="w-40 h-40 -rotate-90 hover:animate-pulse"
					handleClick={() => setActiveStep(activeStep + 1)}
				/>
			</div>
		</div>
	);
}

interface IArrowSvg {
	className: string;
	handleClick: (event: React.MouseEvent<HTMLSpanElement>) => void;
}

const ArrowSvg = ({ className, handleClick }: IArrowSvg) => {
	return (
		<span onClick={handleClick}>
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
		</span>
	);
};

interface ISubject {
	label: string;
	selected: boolean;
}

const Subject = ({ label, selected }: ISubject) => {
	return (
		<div
			className={`font-normal  py-1 px-5 h-[30px] transition-all  duration-500 flex items-center rounded-lg hover:border-none  hover:text-typography ${
				selected
					? 'bg-secondary text-typography hover:bg-blue-900'
					: 'bg-typography text-secondary hover:bg-dark-grey hover:animate-pulse'
			}`}>
			<span>{label}</span>
		</div>
	);
};
