import React from 'react';

interface ILinkProps
{
	label?: string | React.ReactNode;
	ref?: string;
	onClick?: () => void;
	className?: string;
}

interface ILinkState
{
}

export class Link extends React.Component<ILinkProps, ILinkState>
{
	public render = () =>
	{
		return (
			<>
				<a
					href={this.props.ref}
					onClick={this.props.onClick}
					className={this.props.className + ' text-sm font-medium text-secondary-400 cursor-pointer hover:underline'}>
					{this.props.label}
				</a>
			</>
		);
	}
}
