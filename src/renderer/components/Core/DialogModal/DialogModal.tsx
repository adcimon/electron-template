import React from 'react';
import { Modal } from '../Modal/Modal';
import { ModalHeader } from '../Modal/ModalHeader';
import { ModalBody } from '../Modal/ModalBody';
import { ModalFooter } from '../Modal/ModalFooter';
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
