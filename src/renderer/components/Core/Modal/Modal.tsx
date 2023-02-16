import React from 'react';

interface IModalProps
{
	visible?: boolean;
	children?: React.ReactNode;
}

export class Modal extends React.Component<IModalProps>
{
	public render = () =>
	{
		const modal =
		<>
			<div
				className='fixed inset-0 z-30 flex items-end sm:items-center sm:justify-center bg-black bg-opacity-50'>
				<div
					className='w-full px-6 py-3 sm:m-4 sm:max-w-xl bg-base-800 border-1 rounded-t-lg sm:rounded-lg border-base-700 overflow-hidden'>
					<div
						className='mt-4 mb-2'>
						{this.props.children}
					</div>
				</div>
			</div>
		</>;

		return (
			<>
				{this.props.visible ? modal : null}
			</>
		);
	}
}
