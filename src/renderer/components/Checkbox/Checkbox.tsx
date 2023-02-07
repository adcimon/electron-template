import React from 'react';

interface ICheckboxProps
{
	label?: string | React.ReactNode;
	value?: string | number | readonly string[] | undefined;
	onChange?: () => void;
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
				<div className='flex mt-6 text-sm'>
					<label className='flex items-center text-base-400'>
						<input
							type='checkbox'
							value={this.props.value}
							onChange={this.props.onChange}
							className='inline-block w-4 h-4 text-primary-600 bg-base-700 border-1 rounded border-base-600 focus:border-primary-400 focus:outline-none focus:shadow-outline-primary-600 checkbox'/>
						<span
							className='ml-2'>
							{this.props.label}
						</span>
					</label>
				</div>
			</>
		);
	}
}
