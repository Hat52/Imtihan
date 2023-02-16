import { useState } from 'react';
import { ArrowSvg, Card, Select } from '../components';
import { cards, options } from '../constants';

export default function Test() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const getMove = (index: number) => {
		if (index === currentIndex) {
			return 'center';
		} else if (index === currentIndex - 1) {
			return 'end';
		}

		return 'start';
	};

	return (
		<div className="flex flex-col overflow-hidden gap-10">
			<div className="h-[80px] w-max overflow-hidden ml-10">
				<h1
					className="relative w-max text-typography  hover:text-secondary cursor-default transition-all duration-500 before:-bottom-3 before:inline-block before:w-full before:h-1 before:absolute before:bg-secondary
				before:invisible
			before:left-full
			hover:before:visible
			hover:before:-translate-x-full
			before:transition-all
			before:duration-500
			before:ease-in-out
			">
					English
				</h1>
			</div>
			<div className="w-screen h-[80vh] justify-center gap-[50%] flex overflow-hidden items-center">
				<ArrowSvg
					className={`w-[100px] h-[100px] rotate-90 hover:animate-pulse `}
					handleClick={() => {
						if (currentIndex === 0) return;
						setCurrentIndex(currentIndex - 1);
					}}
				/>
				{cards.map(({ description, title }: any, index) => {
					if (
						currentIndex === index ||
						index === currentIndex + 1 ||
						index === currentIndex - 1
					) {
						return (
							<Card
								isSelected={index === currentIndex}
								move={getMove(index)}
								description={description}
								title={title}
							/>
						);
					}
				})}
				<ArrowSvg
					className="w-[100px] h-[100px] -rotate-90 hover:animate-pulse"
					handleClick={() => {
						if (currentIndex === cards.length - 1) return;
						setCurrentIndex(currentIndex + 1);
					}}
				/>
			</div>
		</div>
	);
}
