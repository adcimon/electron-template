import React from 'react';

interface IModalBodyProps
{
	children?: React.ReactNode;
}

export class ModalBody extends React.Component<IModalBodyProps>
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
