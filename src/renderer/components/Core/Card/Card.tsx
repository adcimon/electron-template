import React from 'react';

interface ICardProps
{
	title?: string;
	className?: string;
	children?: React.ReactNode;
}

export class Card extends React.Component<ICardProps>
{
	public render = () =>
	{
		return (
			<>
				<div
					className={this.props.className + ' min-w-0 p-4 bg-base-700 rounded-lg shadow-xs'}>
					<p
						className='mb-4 font-semibold text-base-300'>
						{this.props.title}
					</p>
					<p
						className='text-base-400'>
						{this.props.children}
					</p>
				</div>
			</>
		);
	}
}
