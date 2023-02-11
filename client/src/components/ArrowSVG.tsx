interface IArrowSvg {
	className: string;
	handleClick: (event: React.MouseEvent<HTMLSpanElement>) => void;
}

const ArrowSvg = ({ className, handleClick }: IArrowSvg) => {
	return (
		<span onClick={handleClick}>
			<svg
				className={`${className} cursor-pointer`}
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

export default ArrowSvg;
