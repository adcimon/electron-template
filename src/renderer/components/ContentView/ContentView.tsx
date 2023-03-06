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
					className='container mx-auto px-6'>
					<h1
						className='my-6 text-2xl font-semibold text-base-200'>
						Content
					</h1>
					<div>
						<DataCard title='Data Card'>
							666$
						</DataCard>
					</div>
				</div>
			</>
		);
	}
}
