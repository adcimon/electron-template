import React from 'react';
import { Modal } from '../Modal/Modal';
import { ModalHeader } from '../Modal/ModalHeader';
import { ModalBody } from '../Modal/ModalBody';
import { ModalFooter } from '../Modal/ModalFooter';
import { Button } from '../Button/Button';

interface IInfoModalProps
{
	visible?: boolean;
	title?: string;
	onAccept?: () => void;
	children?: React.ReactNode;
}

export class InfoModal extends React.Component<IInfoModalProps>
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
						<Button label='Accept' onClick={this.props.onAccept}/>
					</ModalFooter>
				</Modal>
			</>
		);
	}
}
