import React from 'react';

interface IModalContentProps
{
	children?: React.ReactNode;
}

interface IModalContentState
{
}

export class ModalContent extends React.Component<IModalContentProps, IModalContentState>
{
	public render = () =>
	{
		return (
			<>
				<div
					className='text-sm text-base-400'>
					{this.props.children}
				</div>
			</>
		);
	}
}
