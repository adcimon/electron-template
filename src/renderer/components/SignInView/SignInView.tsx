import React from 'react';
import { CSSTransition } from 'react-transition-group';

import { ViewType, AppStateType } from '../../AppState';
import { TextInput } from '../Core/TextInput/TextInput';
import { Button } from '../Core/Button/Button';
import { Link } from '../Core/Link/Link';

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
		this.props.setAppState({ ...this.props.appState, activeView: this.state.transitionView });
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
						<div className='flex-1 h-full max-w-4xl m-6 bg-base-800 border-1 rounded-lg border-base-700 shadow-xl overflow-hidden'>
							<div className='flex flex-col md:flex-row overflow-hidden'>
								<div className='md:h-auto md:w-1/2'>
									<img className='object-cover w-full h-full' src={image}/>
								</div>

								<div className='flex items-center justify-center p-6 sm:p-12 md:w-1/2 overflow-hidden'>
									<div className='w-full'>

										<h1
											className='mb-4 text-xl font-semibold text-base-200'>
											Electron Template
										</h1>

										<TextInput label='Email' className='w-full'/>
										<TextInput label='Password' type='password' tip='' className='w-full mt-2'/>

										<Button label='Sign In' onClick={this.handleClickSignIn} className='w-full mt-4'/>

										<hr className='my-8'></hr>

										<Button label='Create an account' onClick={this.handleClickSignUp} className='w-full mt-4'/>

										<p
											className='mt-4'>
											<Link label={'Forgot your password?'} ref='#' onClick={this.handleClickRecoverPassword}/>
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
