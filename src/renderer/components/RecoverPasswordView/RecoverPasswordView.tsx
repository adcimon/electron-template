import React from 'react';
import { CSSTransition } from 'react-transition-group';

import { ViewType, AppStateType } from '../../AppState';
import { Button } from '../Core/Button/Button';
import { TextInput } from '../Core/TextInput/TextInput';
import { Link } from '../Core/Link/Link';

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

								<div className='md:h-auto md:w-1/2'>
									<img className='object-cover w-full h-full' src={image}/>
								</div>

								<div className='flex items-center justify-center p-6 sm:p-12 md:w-1/2 overflow-hidden'>
									<div className='w-full'>

										<TextInput label='Email' tip='' className='w-full'/>

										<Button label='Recover password' className='w-full mt-4'/>

										<p
											className='mt-4'>
											<Link label={'Back to Sign In'} ref='#' onClick={this.handleClickSignIn}/>
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
