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
						className='text-sm text-gray-400'>
						{this.props.children}
					</label>
					<input
						className='block w-full mt-1 text-sm border-gray-600 bg-gray-700 focus:border-purple-400 focus:outline-none text-gray-300 focus:shadow-outline-gray form-input'
						type={this.props.type}
						placeholder={this.props.placeholder}/>
				</div>
			</>
		);
	}
}
