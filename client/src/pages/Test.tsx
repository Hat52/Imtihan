import { useState } from 'react';
import { Card } from '../components';

export default function Test() {
	const [selected, setSelected] = useState(false);
	const [move, setMove] = useState('start');

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
		<div className="w-screen h-screen flex overflow-hidden items-center justify-center">
			<button
				className="absolute left-0 top-0"
				onClick={() => {
					setSelected(!selected);
					setNextMove('next');
				}}>
				Next
			</button>
			<button
				className="absolute left-10 top-0"
				onClick={() => {
					setSelected(!selected);
					setNextMove('previous');
				}}>
				Previous
			</button>
			<Card isSelected={selected} move={move} />
		</div>
	);
}
