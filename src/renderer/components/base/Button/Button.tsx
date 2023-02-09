import React from 'react';

interface IButtonProps
{
	label?: string | React.ReactNode;
	onClick?: () => void;
	className?: string;
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
					onClick={this.props.onClick}
					className={this.props.className + ' block px-4 py-2 text-sm font-medium leading-5 text-center text-white bg-primary-600 hover:bg-primary-500 active:bg-primary-600 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-primary-600 transition-colors duration-150'}>
					{this.props.label}
				</button>
			</>
		);
	}
}
