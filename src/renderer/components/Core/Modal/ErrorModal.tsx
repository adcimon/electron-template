import React from 'react';
import { Modal } from './Modal';
import { ModalHeader } from './ModalHeader';
import { ModalBody } from './ModalBody';
import { ModalFooter } from './ModalFooter';
import { Button, ButtonVariant } from '../Button/Button';

interface IErrorModalProps
{
	visible?: boolean;
	title?: string;
	onAccept?: () => void;
	children?: React.ReactNode;
}

export class ErrorModal extends React.Component<IErrorModalProps>
{
	public render = () =>
	{
		return (
			<>
				<Modal visible={this.props.visible}>
					<ModalHeader>
						<div
							className='inline-block p-3 mr-4 bg-red-500 rounded-full'>
							<svg className='w-5 h-5 scale-150' viewBox='0 0 20 20' fill='currentColor'>
								<path d='M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z' fill-rule='evenodd' clip-rule='evenodd'></path>
							</svg>
						</div>
						<span
							className='inline-block'>
							{this.props.title}
						</span>
					</ModalHeader>
					<ModalBody>
						{this.props.children}
					</ModalBody>
					<ModalFooter>
						<Button label='Accept' variant={ButtonVariant.Danger} onClick={this.props.onAccept}/>
					</ModalFooter>
				</Modal>
			</>
		);
	}
}
