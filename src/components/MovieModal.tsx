import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react';

interface MovieModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    titleComponent?: React.ReactNode | JSX.Element | JSX.Element[];
    children: React.ReactNode | JSX.Element | JSX.Element[];
}

const MovieModal = (props: MovieModalProps) => {
    const { isOpen, onClose, children, title, titleComponent } = props;
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    {titleComponent ? titleComponent : title}
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>{children}</ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default MovieModal;
