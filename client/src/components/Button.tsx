interface ButtonProps {
	text: string;
	onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

export default function Button({ text, onClick }: ButtonProps) {
	return (
		<button
			className="bg-secondary w-[500px] h-[48px] text-typography font-bold text-lg hover:bg-[blue] transform-all duration-400"
			onClick={onClick}>
			{text}
		</button>
	);
}
