import React from 'react';

interface IInputProps
{
	type?: string;
	placeholder?: string;
	className?: string;
	children?: React.ReactNode;
}

interface IInputState
{
}

export class Input extends React.Component<IInputProps, IInputState>
{
	public render = () =>
	{
		return (
			<>
				<div className={this.props.className + ' inline-block'}>
					<label
						className='text-sm text-base-400'>
						{this.props.children}
					</label>
					<input
						className='block w-full mt-1 px-2 py-2 text-sm text-base-300 bg-base-700 border-1 rounded border-base-600 hover:border-primary-500 focus:border-primary-600 focus:outline-none focus:shadow-outline-primary-600'
						type={this.props.type}
						placeholder={this.props.placeholder}/>
				</div>
			</>
		);
	}
}
