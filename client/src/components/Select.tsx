import { useRef, useState } from 'react';
import { useOutSideClick } from '../hooks';

interface IOptions {
	name: string;
	value: string | number;
	href?: string;
}

interface ISelect {
	options: IOptions[];
	handleChange: (value: IOptions) => void;
	value: string;
}

export default function Select({ options, handleChange, value }: ISelect) {
	const [visible, setVisible] = useState(false);
	const wrapperRef = useRef(null);
	useOutSideClick(wrapperRef, setVisible);

	return (
		<>
			<button
				ref={wrapperRef}
				id="dropdownDefaultButton"
				data-dropdown-toggle="dropdown"
				onClick={() => setVisible((visible: boolean) => !visible)}
				className="text-typography bg-blue-700 w-[500px] flex justify-between h-[48px] hover:bg-blue-800  focus:outline-none  font-medium rounded-lg text-sm px-4 py-2.5 text-center  items-center dark:bg-blue-600 dark:hover:bg-blue-700 "
				type="button">
				{value || 'Select Grade'}
				<svg
					className="w-5 h-5 ml-2"
					aria-hidden="true"
					fill="none"
					stroke="#E2E2E2"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M19 9l-7 7-7-7"></path>
				</svg>
			</button>

			<div
				id="dropdown"
				className={`z-10 absolute  bg-white divide-y divide-gray-100 rounded-lg shadow w-[500px] dark:bg-gray-700 ${
					visible ? 'visible' : 'invisible'
				}`}>
				<ul
					className="py-2 text-sm text-gray-700 dark:text-gray-200"
					aria-labelledby="dropdownDefaultButton">
					{options.map(({ value, name, href }: IOptions) => (
						<li>
							<div
								onClick={() => handleChange({ name, href, value })}
								className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
								{name}
							</div>
						</li>
					))}
				</ul>
			</div>
		</>
	);
}
