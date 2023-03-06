import React from 'react';
import { CSSTransition } from 'react-transition-group';

import { TopBarContainer } from '../TopBar/TopBarContainer';
import { SideBarContainer } from '../SideBar/SideBarContainer';
import { ContentViewContainer } from '../ContentView/ContentViewContainer';

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
		this.props.setAppState({ ...this.props.appState, activeView: ViewType.SignIn });
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
						className='flex flex-col w-full h-screen'>
						<div
							className='flex flex-col flex-1 w-full'>
							<TopBarContainer></TopBarContainer>
							<div
								className='flex'>
								<SideBarContainer></SideBarContainer>
								<ContentViewContainer></ContentViewContainer>
							</div>
						</div>
					</div>
				</CSSTransition>
			</>
		);
	}
}
