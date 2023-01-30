import React from 'react';

interface IButtonProps
{
	className?: string;
	onClick?: () => void;
	children?: React.ReactNode;
}

interface IButtonState
{
}

export class Button extends React.Component<IButtonProps, IButtonState>
{
	public render = () =>
	{
		return (
			<>
				<button
					className={this.props.className + ' block px-4 py-2 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 border bg-primary-600 hover:bg-primary-500 active:bg-primary-600 border-transparent rounded-lg focus:outline-none focus:shadow-outline-primary-600'}
					onClick={this.props.onClick}>
					{this.props.children}
				</button>
			</>
		);
	}
}
