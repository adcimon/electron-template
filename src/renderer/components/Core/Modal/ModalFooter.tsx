import React from 'react';

interface IModalFooterProps
{
	children?: React.ReactNode;
}

export class ModalFooter extends React.Component<IModalFooterProps>
{
	public render = () =>
	{
		return (
			<>
				<div
					className='flex flex-col items-center justify-end px-6 py-2 -mx-6 mt-4 space-y-4 sm:space-y-0 sm:space-x-6 sm:flex-row bg-base-800'>
					{this.props.children}
				</div>
			</>
		);
	}
}
