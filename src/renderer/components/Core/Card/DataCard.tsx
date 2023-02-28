import React from 'react';

interface IDataCardProps
{
	title?: string;
	className?: string;
	children?: React.ReactNode;
}

export class DataCard extends React.Component<IDataCardProps>
{
	public render = () =>
	{
		return (
			<>
				<div
					className={this.props.className + ' flex items-center p-4 rounded-lg bg-base-700 shadow-xs'}>
					<div
						className='p-3 mr-4 text-primary-100 bg-primary-600 rounded-full'>
						{/* <svg
							className='w-5 h-5'
							viewBox='0 0 20 20'
							fill='currentColor'>
							<path d='M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z' fill-rule='evenodd' clip-rule='evenodd'></path>
						</svg> */}
						<svg
							className='w-5 h-5'
							viewBox='0 0 24 24'
							stroke='currentColor'
							stroke-width='2'
							fill='none'>
							<path d='M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z'></path>
						</svg>
					</div>
					<div>
						<p
							className='mb-2 text-sm font-medium text-base-400'>
							{this.props.title}
						</p>
						<p
							className='text-lg font-semibold text-base-200'>
							{this.props.children}
						</p>
					</div>
				</div>
			</>
		);
	}
}
