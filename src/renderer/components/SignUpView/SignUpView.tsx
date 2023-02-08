import React from 'react';
import { CSSTransition } from 'react-transition-group';

import { ViewType, AppStateType } from '../../AppState';
import { Button } from '../Button/Button';
import { TextInput } from '../TextInput/TextInput';
import { Checkbox } from '../Checkbox/Checkbox';
import { Link } from '../Link/Link';

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

										<TextInput label='Email' className='w-full'/>
										<TextInput label='Password' type='password' className='w-full mt-4'/>
										<TextInput label='Confirm Password' type='password' className='w-full mt-4'/>

										<Checkbox label={<>I agree to the <span className='underline'>privacy policy</span></>} className='mt-4'/>

										<Button label='Create account' className='w-full mt-4'/>

										<p
											className='mt-4'>
											<Link label={'Already have an account? Sign In'} ref='#' onClick={this.handleClickSignIn}/>
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
