import React from 'react';

export enum ButtonVariant
{
	Normal,
	Success,
	Warning,
	Danger
}

interface IButtonProps
{
	label?: string;
	variant?: ButtonVariant;
	onClick?: () => void;
	className?: string;
}

export class Button extends React.Component<IButtonProps>
{
	public render = () =>
	{
		let backgroundColor: string = '';
		let hoverColor: string = '';
		let activeColor: string = '';
		let shadowColor: string = '';

		switch( this.props.variant )
		{
			case ButtonVariant.Success:
				backgroundColor = 'bg-green-600';
				hoverColor = 'hover:bg-green-500';
				activeColor = 'active:bg-green-600';
				shadowColor = 'focus:shadow-outline-green-600';
				break;
			case ButtonVariant.Warning:
				backgroundColor = 'bg-yellow-600';
				hoverColor = 'hover:bg-yellow-500';
				activeColor = 'active:bg-yellow-600';
				shadowColor = 'focus:shadow-outline-yellow-600';
				break;
			case ButtonVariant.Danger:
				backgroundColor = 'bg-red-600';
				hoverColor = 'hover:bg-red-500';
				activeColor = 'active:bg-red-600';
				shadowColor = 'focus:shadow-outline-red-600';
				break;
			case ButtonVariant.Normal:
			default:
				backgroundColor = 'bg-primary-600';
				hoverColor = 'hover:bg-primary-500';
				activeColor = 'active:bg-primary-600';
				shadowColor = 'focus:shadow-outline-primary-600';
				break;
		}

		return (
			<>
				<button
					onClick={this.props.onClick}
					className={`${this.props.className} block px-6 py-2 text-sm font-medium leading-5 text-center text-white ${backgroundColor} ${hoverColor} ${activeColor} border border-transparent rounded-lg focus:outline-none ${shadowColor} transition-colors duration-150`}>
					{this.props.label}
				</button>
			</>
		);
	}
}
