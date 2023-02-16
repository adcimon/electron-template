import React from 'react';

interface IModalHeaderProps
{
	children?: React.ReactNode;
}

export class ModalHeader extends React.Component<IModalHeaderProps>
{
	public render = () =>
	{
		return (
			<>
				<div
					className='mb-4 text-lg font-semibold text-base-300'>
					{this.props.children}
				</div>
			</>
		);
	}
}
