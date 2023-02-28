import React from 'react';
import { Modal } from './Modal';
import { ModalHeader } from './ModalHeader';
import { ModalBody } from './ModalBody';
import { ModalFooter } from './ModalFooter';
import { Button, ButtonVariant } from '../Button/Button';

interface IDialogModalProps
{
	visible?: boolean;
	title?: string;
	onAccept?: () => void;
	onCancel?: () => void;
	children?: React.ReactNode;
}

export class DialogModal extends React.Component<IDialogModalProps>
{
	public render = () =>
	{
		return (
			<>
				<Modal visible={this.props.visible}>
					<ModalHeader>
						{this.props.title}
					</ModalHeader>
					<ModalBody>
						{this.props.children}
					</ModalBody>
					<ModalFooter>
						<Button label='Accept' variant={ButtonVariant.Success} onClick={this.props.onAccept}/>
						<Button label='Cancel' variant={ButtonVariant.Danger} onClick={this.props.onCancel}/>
					</ModalFooter>
				</Modal>
			</>
		);
	}
}
