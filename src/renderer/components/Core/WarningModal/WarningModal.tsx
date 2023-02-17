import React from 'react';
import { Modal } from '../Modal/Modal';
import { ModalHeader } from '../Modal/ModalHeader';
import { ModalBody } from '../Modal/ModalBody';
import { ModalFooter } from '../Modal/ModalFooter';
import { Button, ButtonVariant } from '../Button/Button';

interface IWarningModalProps
{
	visible?: boolean;
	title?: string;
	onAccept?: () => void;
	children?: React.ReactNode;
}

export class WarningModal extends React.Component<IWarningModalProps>
{
	public render = () =>
	{
		return (
			<>
				<Modal visible={this.props.visible}>
					<ModalHeader>
						<div
							className='inline-block p-3 mr-4 bg-yellow-500 rounded-full'>
							<svg className='w-5 h-5 scale-150' viewBox='0 0 20 20' fill='currentColor'>
								<path d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z' fill-rule='evenodd' clip-rule='evenodd'></path>
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
						<Button label='Accept' variant={ButtonVariant.Warning} onClick={this.props.onAccept}/>
					</ModalFooter>
				</Modal>
			</>
		);
	}
}
