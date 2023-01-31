import React from 'react';
import { CSSTransition } from 'react-transition-group';

import { ViewType, AppStateType } from '../../AppState';
import { Button } from '../Button/Button';
import { TextInput } from '../TextInput/TextInput';

import '../../styles/FadeAnimation.css';
import image from '../../../../assets/images/earth_computer.jpg';

interface ISignInViewProps
{
	appState: AppStateType;
	setAppState: (state: AppStateType) => void;
}

interface ISignInViewState
{
	visible: boolean;
	transitionView: ViewType | undefined;
}

export class SignInView extends React.Component<ISignInViewProps, ISignInViewState>
{
	constructor( props: ISignInViewProps )
	{
		super(props);

		this.state =
		{
			visible: false,
			transitionView: undefined
		};
	}

	componentDidMount(): void
	{
		this.setState({ visible: true });
	}

	handleClickSignIn = () =>
	{
		this.setState({ visible: false, transitionView: ViewType.Main });
	}

	handleClickSignUp = () =>
	{
		this.setState({ visible: false, transitionView: ViewType.SignUp });
	}

	handleClickRecoverPassword = () =>
	{
		this.setState({ visible: false, transitionView: ViewType.RecoverPassword });
	}

	handleExited = () =>
	{
		this.props.setAppState({...this.props.appState, activeView: this.state.transitionView });
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
						<div className='flex-1 h-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-xl bg-base-800 border-1 border-base-700'>
							<div className='flex flex-col overflow-hidden md:flex-row'>

								<div className='h-32 md:h-auto md:w-1/2'>
									<img className='object-cover w-full h-full' src={image}/>
								</div>

								<div className='flex items-center justify-center p-6 sm:p-12 md:w-1/2 overflow-hidden'>
									<div className='w-full'>

										<h1
											className='mb-4 text-xl font-semibold text-base-200'>
											Electron Template
										</h1>

										<TextInput className='w-full'>Email</TextInput>
										<TextInput type='password' className='w-full mt-4'>Password</TextInput>
										<Button
											className='w-full mt-4'
											onClick={this.handleClickSignIn}>
											Sign In
										</Button>

										<hr className='my-8'></hr>

										<Button
											className='w-full mt-4'
											onClick={this.handleClickSignUp}>
											Create an account
										</Button>

										<p
											className='mt-4'>
											<a
												className='text-sm font-medium text-secondary-400 hover:underline'
												onClick={this.handleClickRecoverPassword}
												href='#'>
												Forgot your password?
											</a>
										</p>

									</div>
								</div>
							</div>
						</div>
				</CSSTransition>
			</>
		);
	}
}
