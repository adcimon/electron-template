import React from 'react';

interface IModalProps
{
	className?: string;
}

interface IModalState
{
}

export class Modal extends React.Component<IModalProps, IModalState>
{
	public render = () =>
	{
		return (
			<div
				className='fixed inset-0 z-30 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center'>
				<div
					className='w-full px-6 py-4 overflow-hidden rounded-t-lg bg-base-800 sm:rounded-lg sm:m-4 sm:max-w-xl'>
					<div
						className='mt-4 mb-6'>
						<p
							className='mb-2 text-lg font-semibold text-base-300'>
							Header
						</p>
						<p
							className='text-sm text-base-400'>
							Text
						</p>
					</div>
					<footer
						className='flex flex-col items-center justify-end px-6 py-3 -mx-6 -mb-4 space-y-4 sm:space-y-0 sm:space-x-6 sm:flex-row bg-base-800'>
						Footer
					</footer>
				</div>
			</div>
		);
	}
}
