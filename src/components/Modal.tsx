import styled from '@emotion/styled'
import {IChildProps} from '../shared/interfaces'
import { TypoAtom } from '../atoms';

interface IModalProps extends IChildProps {
  title: string;
}

const Modal = ({title, children}:IModalProps) => {
  return (
    <>
    <TypoAtom fontSize={`2.324375rem`} fontColor="#4B86FA">
        {title}
    </TypoAtom>
    <ModalContainer>{children}</ModalContainer>
    </>
  )
}

export default Modal

const ModalContainer = styled.div``