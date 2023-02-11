interface ICard {
	isSelected: boolean;
	move: string;
}

export default function Card({ isSelected, move }: ICard) {
	// From Left to right
	// !isSelected
	// ? 'w-0 h-0 overflow-hidden left-0'
	// : 'card flex flex-col items-center left-1/2 transform -translate-x-1/2   overflow-scroll hide-scrollbar  gap-5 bg-[#1A1F1F] w-[350px] h-[500px] rounded-lg p-2 shadow-lg shadow-secondary'

	const nextStep: any = {
		end: {
			visible: '',
			hidden: 'left-full -translate-x-full '
		},
		center: {
			visible: 'left-1/2 -translate-x-1/2 ',
			hidden: ''
		},
		start: {
			visible: 'left-1/2 -translate-x-1/2',
			hidden: 'left-0'
		}
	};

	return (
		<div
			className={`transition-all absolute duration-500  ease-in-out  ${
				!isSelected
					? `w-0 h-0 overflow-hidden ${nextStep[move].hidden}`
					: `${nextStep[move].visible} card flex flex-col items-center transform overflow-scroll hide-scrollbar gap-5 bg-[#1A1F1F] w-[350px] h-[500px] rounded-lg p-2 shadow-lg shadow-secondary`
			}`}>
			<div
				className={`${
					!isSelected ? 'w-0 h-0 overflow-hidden ' : ''
				} transition-all duration-700`}>
				<h4 className="text-typography text-center font-bold text-xl">Loops In programming</h4>
				<p className="text-typography text-center">
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
					Ipsum has been the industry's standard dummy text ever since the 1500s, when an
					unknown printer took a galley of type and scrambled it to make a type specimen book.
					It has survived not only five centuries, but also the leap into electronic
					typesetting, remaining essentially unchanged. It was popularised in the 1960s with
					the release of Letraset sheets containing Lorem Ipsum passages, and more recently
					with desktop publishing software like Aldus PageMaker including versions of Lorem
					Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
					Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
					unknown printer took a galley of type and scrambled it to make a type specimen book.
					It has survived not only five centuries, but also the leap into electronic
					typesetting, remaining essentially unchanged. It was popularised in the 1960s with
					the release of Letraset sheets containing Lorem Ipsum passages, and more recently
					with desktop publishing software like Aldus PageMaker including versions of Lorem
					Ipsum.
				</p>
			</div>
		</div>
	);
}
