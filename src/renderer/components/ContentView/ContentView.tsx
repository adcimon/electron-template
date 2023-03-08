import React from 'react';
import { DataCard } from '../Core/Card/DataCard';

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
					<DataCard title='Data Card'>
						666$
					</DataCard>
					<DataCard title='Data Card'>
						666$
					</DataCard>
					<DataCard title='Data Card'>
						666$
					</DataCard>
					<DataCard title='Data Card'>
						666$
					</DataCard>
					<DataCard title='Data Card'>
						666$
					</DataCard>
					<DataCard title='Data Card'>
						666$
					</DataCard>
					<DataCard title='Data Card'>
						666$
					</DataCard>
					<DataCard title='Data Card'>
						666$
					</DataCard>
					<DataCard title='Data Card'>
						666$
					</DataCard>
					<DataCard title='Data Card'>
						666$
					</DataCard>
					<DataCard title='Data Card'>
						666$
					</DataCard>
					<DataCard title='Data Card'>
						666$
					</DataCard>
				</div>
			</>
		);
	}
}
