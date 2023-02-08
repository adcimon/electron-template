import React from 'react';

interface IMultiselectProps
{
	label?: string;
	value?: string | number | readonly string[] | undefined;
	onChange?: () => void;
	className?: string;
	children?: React.ReactNode;
}

interface IMultiselectState
{
}

export class Multiselect extends React.Component<IMultiselectProps, IMultiselectState>
{
	public render = () =>
	{
		return (
			<>
				<label
					className='block mt-4 text-sm'>
					<span
						className='text-base-400'>
						{this.props.label}
					</span>
					<select
						multiple={true}
						value={this.props.value}
						onChange={this.props.onChange}
						className={this.props.className + ' block mt-1 px-3 py-2 text-sm text-base-300 bg-base-700 border-1 rounded border-base-600 hover:border-primary-500 focus:border-primary-600 focus:outline-none focus:shadow-outline-purple focus:shadow-outline-primary-600 transition-colors duration-150'}>
						{this.props.children}
					</select>
				</label>
			</>
		);
	}
}
