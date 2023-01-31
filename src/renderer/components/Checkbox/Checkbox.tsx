import React from 'react';

interface ICheckboxProps
{
	children?: React.ReactNode;
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
							className='inline-block w-4 h-4 text-primary-600 bg-base-700 border-1 rounded border-base-600 focus:border-primary-400 focus:outline-none focus:shadow-outline-primary-600 checkbox'/>
						<span
							className='ml-2'>
							{this.props.children}
						</span>
					</label>
				</div>
			</>
		);
	}
}
