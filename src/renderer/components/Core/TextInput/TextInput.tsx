import React from 'react';

export enum TextInputVariant
{
	Info,
	Success,
	Warning,
	Error
}

interface ITextInputProps
{
	label?: string;
	type?: string;
	placeholder?: string;
	tip?: string;
	variant?: TextInputVariant;
	className?: string;
}

interface ITextInputState
{
}

export class TextInput extends React.Component<ITextInputProps, ITextInputState>
{
	public render = () =>
	{
		let borderColor: string = '';
		let borderHoverColor: string = '';
		let borderFocusColor: string = '';
		let shadowOutlineColor: string = '';
		let tipTextColor: string = '';

		switch( this.props.variant )
		{
			case TextInputVariant.Success:
				borderColor = 'border-green-700';
				borderHoverColor = 'hover:border-green-600';
				borderFocusColor = 'focus:border-green-700';
				shadowOutlineColor = 'focus:shadow-outline-green-700';
				tipTextColor = 'text-green-500';
				break;
			case TextInputVariant.Warning:
				borderColor = 'border-yellow-500';
				borderHoverColor = 'hover:border-yellow-400';
				borderFocusColor = 'focus:border-yellow-500';
				shadowOutlineColor = 'focus:shadow-outline-yellow-500';
				tipTextColor = 'text-yellow-500';
				break;
			case TextInputVariant.Error:
				borderColor = 'border-red-700';
				borderHoverColor = 'hover:border-red-600';
				borderFocusColor = 'focus:border-red-700';
				shadowOutlineColor = 'focus:shadow-outline-red-700';
				tipTextColor = 'text-red-500';
				break;
			case TextInputVariant.Info:
			default:
				borderColor = 'border-base-600';
				borderHoverColor = 'hover:border-primary-500';
				borderFocusColor = 'focus:border-primary-600';
				shadowOutlineColor = 'focus:shadow-outline-primary-600';
				tipTextColor = 'text-base-400';
				break;
		}

		return (
			<>
				<label
					className={`${this.props.className} inline-block`}>
					<span
						className='block text-sm text-base-400'>
						{this.props.label}
					</span>
					<input
						className={`block w-full mt-1 px-2 py-2 text-sm text-base-300 bg-base-700 border-1 rounded ${borderColor} ${borderHoverColor} ${borderFocusColor} focus:outline-none ${shadowOutlineColor} transition-colors duration-150`}
						type={this.props.type}
						placeholder={this.props.placeholder}/>
					<span
						className={`block ${(typeof this.props.tip === 'string') ? 'h-4': ''} m-1 text-xs ${tipTextColor}`}>
						{this.props.tip}
					</span>
				</label>
			</>
		);
	}
}
