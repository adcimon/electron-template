import React from 'react';

interface ITopBarProps
{
}

export class TopBar extends React.Component<ITopBarProps>
{
	constructor( props: ITopBarProps )
	{
		super(props);
	}

	public render = () =>
	{
		return (
			<>
				<div
					className='basis-16 flex-shrink-0 z-10 py-4 bg-base-800 shadow-md'>
					<span
						className='ml-6 text-lg font-bold text-base-200'>
						Electron Template
					</span>
				</div>
			</>
		);
	}
}
