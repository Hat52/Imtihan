interface TextfieldProp {
	Icon: any;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	error: string | undefined;
	placeholder: string;
	name: string;
	type: 'email' | 'password' | 'text';
	label?: string;
	value: string | number | undefined;
}

export default function Textfield({
	Icon,
	onChange,
	error,
	placeholder,
	type,
	name,
	label,
	value
}: TextfieldProp) {
	return (
		<div>
			{label ? (
				<label
					htmlFor={name}
					className="text-typography mb-1 text-md font-semibold inline-block">
					{label}
				</label>
			) : null}
			<div
				className={`${
					error ? 'mb-2 border border-error' : ''
				} relative pl-10 bg-dark-grey rounded-lg w-[500px] h-[48px]`}>
				<input
					className="w-full h-full bg-transparent outline-none caret-secondary text-typography"
					onChange={onChange}
					type={type}
					placeholder={placeholder}
					name={name}
					id={name}
					value={value}
				/>
				<span className="absolute left-[4%] top-[50%] text-secondary transform -translate-y-1/2 -translate-x-1/2 ">
					<Icon size={20} />
				</span>
				{error ? (
					<p className="absolute top-12 left-0 text-error text-[12px] font-normal">{error}</p>
				) : null}
			</div>
		</div>
	);
}
