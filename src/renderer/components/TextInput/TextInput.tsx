import React from 'react';

interface ITextInputProps
{
	label?: string;
	type?: string;
	placeholder?: string;
	className?: string;
}

interface ITextInputState
{
}

export class TextInput extends React.Component<ITextInputProps, ITextInputState>
{
	public render = () =>
	{
		return (
			<>
				<label
					className={this.props.className + ' inline-block'}>
					<span
						className='block text-sm text-base-400'>
						{this.props.label}
					</span>
					<input
						className={this.props.className + ' inline-block w-full mt-1 px-2 py-2 text-sm text-base-300 bg-base-700 border-1 rounded border-base-600 hover:border-primary-500 focus:border-primary-600 focus:outline-none focus:shadow-outline-primary-600 transition-colors duration-150'}
						type={this.props.type}
						placeholder={this.props.placeholder}/>
				</label>
			</>
		);
	}
}
