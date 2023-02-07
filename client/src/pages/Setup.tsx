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
			<div className=" bg-[blue] p-20">
				<Select
					options={options}
					handleChange={(value) => console.log(value)}
					value="selected value"
				/>
			</div>
		</div>
	);
}
