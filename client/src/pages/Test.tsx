import { useState } from 'react';
import { ArrowSvg, Card } from '../components';
import { cards } from '../constants';

export default function Test() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [move, setMove] = useState('center');

	const setNextMove = (towards: string) => {
		if (towards === 'previous') {
			if (move === 'center') {
				setMove('start');
				return;
			}
			setMove('center');
			return;
		}
		if (move === 'start') {
			setMove('center');
		} else if (move === 'center') {
			setMove('end');
		}
	};
	return (
		<div className="w-screen h-screen justify-center gap-[50%] flex overflow-hidden items-center">
			<ArrowSvg
				className={`w-[100px] h-[100px] rotate-90 hover:animate-pulse `}
				handleClick={() => {
					if (currentIndex === 0) return;
					setCurrentIndex(currentIndex - 1);
					setNextMove('previous');
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
							move={
								index === currentIndex
									? 'center'
									: index === currentIndex - 1
									? 'end'
									: 'start'
							}
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
					setNextMove('next');
				}}
			/>
		</div>
	);
}
