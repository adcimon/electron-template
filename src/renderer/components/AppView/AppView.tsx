import React from 'react';

import { ViewType, AppStateType, SessionStateType } from '../../AppState';
import { SignInViewContainer } from '../SignInView/SignInViewContainer';
import { SignUpViewContainer } from '../SignUpView/SignUpViewContainer';
import { RecoverPasswordViewContainer } from '../RecoverPasswordView/RecoverPasswordViewContainer';
import { MainViewContainer } from '../MainView/MainViewContainer';

import './AppView.css';

interface IAppViewProps
{
	appState: AppStateType;
	setAppState: (state: AppStateType) => void;
	sessionState: SessionStateType;
	setSessionState: (state: SessionStateType) => void;
}

interface IAppViewState
{
}

export class AppView extends React.Component<IAppViewProps, IAppViewState>
{
	public render = () =>
	{
		const view = () =>
		{
			switch( this.props.appState.activeView )
			{
				case ViewType.SignIn: return <SignInViewContainer/>;
				case ViewType.SignUp: return <SignUpViewContainer/>;
				case ViewType.RecoverPassword: return <RecoverPasswordViewContainer/>;
				case ViewType.Main: return <MainViewContainer/>;
				default: return <div>Error</div>
			}
		}

		return (
			<>
				<div className='flex items-center min-h-screen p-6 bg-base-900'>
					{ view() }
				</div>
			</>
		);
	}
}
