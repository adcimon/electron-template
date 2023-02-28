import React from 'react';
import { Modal } from './Modal';
import { ModalHeader } from './ModalHeader';
import { ModalBody } from './ModalBody';
import { ModalFooter } from './ModalFooter';
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
						<div
							className='inline-block p-3 mr-4 bg-primary-500 rounded-full'>
							<svg className='w-5 h-5 scale-150' viewBox='0 0 20 20' fill='currentColor'>
								<path d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z' fill-rule='evenodd' clip-rule='evenodd'></path>
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
						<Button label='Accept' onClick={this.props.onAccept}/>
					</ModalFooter>
				</Modal>
			</>
		);
	}
}
