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
						<div
							className='flex h-screen bg-base-900'>
							<aside
								className='z-20 hidden w-64 overflow-y-auto bg-base-800 md:block flex-shrink-0'>
								<div
									className='py-4 text-base-400'>
									<p
										className='ml-6 text-lg font-bold text-base-200'>
										Electron Template
									</p>
									<ul>
										<li className='relative px-6 py-3'>
											<a
												className='inline-flex items-center w-full text-sm font-semibold hover:text-base-200 transition-colors duration-150'>
												<svg
													className='w-5 h-5'
													viewBox='0 0 24 24'
													stroke='currentColor'
													stroke-width='2'
													stroke-linecap='round'
													stroke-linejoin='round'
													fill='none'>
													<path d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01'></path>
												</svg>
												<span
													className='ml-4'>
													Forms
												</span>
											</a>
										</li>
									</ul>
								</div>
							</aside>
						</div>
				</CSSTransition>
			</>
		);
	}
}
