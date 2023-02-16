import React from 'react';

export enum TextAreaVariant
{
	Info,
	Warning,
	Valid,
	Invalid
}

export enum TextAreaResize
{
	None,
	Horizontal,
	Vertical,
	Both
}

interface ITextAreaProps
{
	label?: string;
	rows?: number;
	placeholder?: string;
	tip?: string;
	variant?: TextAreaVariant;
	resize?: TextAreaResize;
	className?: string;
}

interface ITextAreaState
{
}

export class TextArea extends React.Component<ITextAreaProps, ITextAreaState>
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
			case TextAreaVariant.Warning:
				borderColor = 'border-yellow-500';
				borderHoverColor = 'hover:border-yellow-400';
				borderFocusColor = 'focus:border-yellow-500';
				shadowOutlineColor = 'focus:shadow-outline-yellow-500';
				tipTextColor = 'text-yellow-500';
				break;
			case TextAreaVariant.Valid:
				borderColor = 'border-green-700';
				borderHoverColor = 'hover:border-green-600';
				borderFocusColor = 'focus:border-green-700';
				shadowOutlineColor = 'focus:shadow-outline-green-700';
				tipTextColor = 'text-green-500';
				break;
			case TextAreaVariant.Invalid:
				borderColor = 'border-red-700';
				borderHoverColor = 'hover:border-red-600';
				borderFocusColor = 'focus:border-red-700';
				shadowOutlineColor = 'focus:shadow-outline-red-700';
				tipTextColor = 'text-red-500';
				break;
			case TextAreaVariant.Info:
			default:
				borderColor = 'border-base-600';
				borderHoverColor = 'hover:border-primary-500';
				borderFocusColor = 'focus:border-primary-600';
				shadowOutlineColor = 'focus:shadow-outline-primary-600';
				tipTextColor = 'text-base-400';
				break;
		}

		let resize: string = '';
		switch( this.props.resize )
		{
			case TextAreaResize.Horizontal:
				resize = 'resize-x';
				break;
			case TextAreaResize.Vertical:
				resize = 'resize-y';
				break;
			case TextAreaResize.Both:
				resize = 'resize-both';
				break;
			case TextAreaResize.None:
			default:
				resize = 'resize-none';
				break;
		}

		return (
			<>
				<label
					className={`${this.props.className} inline-block mt-4 text-sm`}>
					<span
						className='block text-base-400'>
						{this.props.label}
					</span>
					<textarea
						className={`block w-full mt-1 px-2 py-2 text-sm text-base-300 bg-base-700 border-1 rounded ${borderColor} ${borderHoverColor} ${borderFocusColor} focus:outline-none ${shadowOutlineColor} transition-colors duration-150 ${resize} textarea`}
						rows={this.props.rows || 3}
						placeholder={this.props.placeholder}>
					</textarea>
					<span
						className={`block ${(typeof this.props.tip === 'string') ? 'h-4': ''} m-1 text-xs ${tipTextColor}`}>
						{this.props.tip}
					</span>
				</label>
			</>
		);
	}
}
