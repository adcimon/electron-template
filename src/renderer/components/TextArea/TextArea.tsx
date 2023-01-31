import React from 'react';

export enum TextAreaResize
{
	None,
	Horizontal,
	Vertical,
	Both
}

interface ITextAreaProps
{
	rows?: number;
	placeholder?: string;
	resize?: TextAreaResize;
	className?: string;
	children?: React.ReactNode;
}

interface ITextAreaState
{
}

export class TextArea extends React.Component<ITextAreaProps, ITextAreaState>
{
	public render = () =>
	{
		let resize: string = 'resize-none';
		switch( this.props.resize )
		{
			case TextAreaResize.None:
				resize = 'resize-none';
				break;
			case TextAreaResize.Horizontal:
				resize = 'resize-x';
				break;
			case TextAreaResize.Vertical:
				resize = 'resize-y';
				break;
			case TextAreaResize.Both:
				resize = 'resize-both';
				break;
		}

		return (
			<>
				<div className={this.props.className + ' block mt-4 text-sm'}>
					<label
						className='block text-base-400'>
						{this.props.children}
					</label>
					<textarea
						className={'inline-block w-full mt-1 px-2 py-2 text-sm text-base-300 bg-base-700 border-1 rounded border-base-600 hover:border-primary-500 focus:border-primary-600 focus:outline-none focus:shadow-outline-primary-600 textarea ' + resize}
						rows={this.props.rows || 3}
						placeholder={this.props.placeholder}>
					</textarea>
				</div>
			</>
		);
	}
}
