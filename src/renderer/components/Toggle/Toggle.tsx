import React from 'react';

interface IToggleProps
{
	children?: React.ReactNode;
}

interface IToggleState
{
}

export class Toggle extends React.Component<IToggleProps, IToggleState>
{
	public render = () =>
	{
		return (
			<>
				<div className='flex mt-6 text-sm'>
					<label className='flex items-center text-gray-400'>
						<input
							type='checkbox'
							className='text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:shadow-outline-gray'/>
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
