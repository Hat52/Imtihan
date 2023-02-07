import React from 'react';

interface StepperProps {
	steps: string[];
	activeStep: number;
	className?: string;
}

const Stepper: React.FC<StepperProps> = ({ className, steps, activeStep }) => {
	return (
		<div className={`flex justify-between ${className || ''}`}>
			{steps.map((step, index) => (
				<div className="flex items-center gap-2">
					<div
						key={step}
						className={`relative inline-block p-3 rounded-full ${
							index < activeStep
								? 'bg-secondary text-typography'
								: 'bg-gray-300 text-secondary'
						}`}>
						<span className="absolute inset-0 flex items-center justify-center">
							{index + 1}
						</span>
					</div>
					{index !== steps.length - 1 && (
						<div
							className={`transition-all duration-500 ease-in-out w-[200px]  delay-150  h-[10px] inline-block rounded-xl mr-2 ${
								index < activeStep ? 'bg-secondary' : 'bg-gray-300'
							}`}></div>
					)}
				</div>
			))}
		</div>
	);
};

export default Stepper;
