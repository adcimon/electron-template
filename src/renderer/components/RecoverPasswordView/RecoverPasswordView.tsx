import React from 'react';
import { CSSTransition } from 'react-transition-group';

import { ViewType, AppStateType } from '../../AppState';
import { Button } from '../Button/Button';
import { TextInput } from '../TextInput/TextInput';

import '../../styles/FadeAnimation.css';
import image from '../../../../assets/images/earth_computer.jpg';

interface IRecoverPasswordViewProps
{
	appState: AppStateType;
	setAppState: (state: AppStateType) => void;
}

interface IRecoverPasswordViewState
{
	visible: boolean;
}

export class RecoverPasswordView extends React.Component<IRecoverPasswordViewProps, IRecoverPasswordViewState>
{
	constructor( props: IRecoverPasswordViewProps )
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

										<TextInput className='w-full'>Email</TextInput>

										<Button className='w-full mt-4'>Recover password</Button>

										<p
											className='mt-4'>
											<a
												className='text-sm font-medium text-secondary-400 hover:underline'
												onClick={this.handleClickSignIn}
												href='#'>
												Back to Sign In
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
