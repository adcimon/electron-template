import React from 'react';

interface IDataCardProps
{
	title?: string;
	icon?: React.ReactNode;
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
						{this.props.icon}
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
