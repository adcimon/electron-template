import React from 'react';
import { CSSTransition } from 'react-transition-group';

import { ViewType, AppStateType } from '../../AppState';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { Toggle } from '../Toggle/Toggle';

import '../../styles/FadeAnimation.css';
import image from '../../../../assets/images/earth_computer.jpg';

interface ISignUpViewProps
{
	appState: AppStateType;
	setAppState: (state: AppStateType) => void;
}

interface ISignUpViewState
{
	visible: boolean;
}

export class SignUpView extends React.Component<ISignUpViewProps, ISignUpViewState>
{
	constructor( props: ISignUpViewProps )
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

	handleClickSignIn = () =>
	{
		this.setState({ visible: false });
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
						<div className='flex-1 h-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-xl bg-base-800 border-1 border-base-700'>
							<div className='flex flex-col overflow-hidden md:flex-row'>

								<div className='h-32 md:h-auto md:w-1/2'>
									<img className='object-cover w-full h-full' src={image}/>
								</div>

								<div className='flex items-center justify-center p-6 sm:p-12 md:w-1/2 overflow-hidden'>
									<div className='w-full'>

										<h1
											className='mb-4 text-xl font-semibold text-base-200'>
											Create account
										</h1>

										<Input className='w-full'>Email</Input>
										<Input type='password' className='w-full mt-4'>Password</Input>
										<Input type='password' className='w-full mt-4'>Confirm Password</Input>

										<Toggle>
											I agree to the <span className='underline'>privacy policy</span>
										</Toggle>

										<Button className='w-full mt-4'>Create account</Button>

										<p
											className='mt-4'>
											<a
												className='text-sm font-medium text-secondary-400 hover:underline'
												onClick={this.handleClickSignIn}
												href='#'>
												Already have an account? Sign In
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
