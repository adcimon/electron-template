import React from 'react';
import { CSSTransition } from 'react-transition-group';

import { ViewType, AppStateType } from '../../AppState';

interface IMainViewProps
{
	appState: AppStateType;
	setAppState: (state: AppStateType) => void;
}

interface IMainViewState
{
	visible: boolean;
}

export class MainView extends React.Component<IMainViewProps, IMainViewState>
{
	constructor( props: IMainViewProps )
	{
		super(props);

		this.state =
		{
			visible: false
		};
	}

	componentDidMount(): void
	{
		this.setState({ visible: true });
	}

	handleExited = () =>
	{
		this.props.setAppState({...this.props.appState, activeView: ViewType.SignIn });
	}

	public render = () =>
	{
		return (
			<>
				<CSSTransition
					in={this.state.visible}
					timeout={500}
					classNames='fade'
					onExited={() => this.handleExited()}>
						<div className='flex-1 h-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-xl bg-gray-800 border-1 border-gray-700'>
							<div className='flex flex-col overflow-hidden md:flex-row'>

								<div className='flex items-center justify-center p-6 sm:p-12 md:w-1/2 overflow-hidden'>
									<div className='w-full'>
										Main
									</div>
								</div>

							</div>
						</div>
				</CSSTransition>
			</>
		);
	}
}
