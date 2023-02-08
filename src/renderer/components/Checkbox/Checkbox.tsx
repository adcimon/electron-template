import React from 'react';

interface ICheckboxProps
{
	label?: string | React.ReactNode;
	value?: string | number | readonly string[] | undefined;
	onChange?: () => void;
	className?: string;
}

interface ICheckboxState
{
}

export class Checkbox extends React.Component<ICheckboxProps, ICheckboxState>
{
	public render = () =>
	{
		return (
			<>
				<label
					className={this.props.className + ' inline-flex items-center m-1 text-base-400'}>
					<input
						type='checkbox'
						value={this.props.value}
						onChange={this.props.onChange}
						className='w-4 h-4 text-primary-600 bg-base-700 border-1 rounded border-base-600 hover:border-primary-500 focus:border-primary-400 focus:outline-none focus:shadow-outline-primary-600 transition-colors duration-150 checkbox'/>
					<span
						className='ml-2'>
						{this.props.label}
					</span>
				</label>
			</>
		);
	}
}
