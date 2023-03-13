import React from 'react';
import { Card } from '../Core/Card/Card';
import { DataCard } from '../Core/Card/DataCard';
import { UserGroupSolid } from '../Core/Icon/UserGroupSolid';
import { TrophySolid } from '../Core/Icon/TrophySolid';
import { RocketLaunchSolid } from '../Core/Icon/RocketLaunchSolid';
import { Square2StackSolid } from '../Core/Icon/Square2StackSolid';

interface IContentViewProps
{
}

export class ContentView extends React.Component<IContentViewProps>
{
	constructor( props: IContentViewProps )
	{
		super(props);
	}

	public render = () =>
	{
		return (
			<>
				<div
					className='flex flex-col w-full h-full px-6 pb-32 gap-3 overflow-y-auto'>
					<h1
						className='my-6 text-2xl font-semibold text-base-200'>
						Content
					</h1>
					<Card
						title='Lorem ipsum'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
						Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</Card>
					<div
						className='flex items-center justify-center flex-wrap gap-3'>
						<DataCard
							title='Users'
							icon={<UserGroupSolid/>}
							className='flex-1'>
							9
						</DataCard>
						<DataCard
							title='Trophies'
							icon={<TrophySolid/>}
							className='flex-1'>
							11
						</DataCard>
						<DataCard
							title='Rockets'
							icon={<RocketLaunchSolid/>}
							className='flex-1'>
							100
						</DataCard>
					</div>
					<DataCard
						title='Data Cards'
						icon={<Square2StackSolid/>}>
						4
					</DataCard>
				</div>
			</>
		);
	}
}
