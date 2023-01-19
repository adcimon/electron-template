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
					className={this.props.className + ' block px-4 py-2 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple'}
					onClick={this.props.onClick}>
					{this.props.children}
				</button>
			</>
		);
	}
}
