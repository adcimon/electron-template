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
				<header
					className='h-16 z-10 py-4 bg-base-800 shadow-md'>
				</header>
			</>
		);
	}
}
