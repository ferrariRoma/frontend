import styled from '@emotion/styled';
import { IChildProps } from '../shared/interfaces';
import { BtnAtom, CardAtom, TypoAtom } from '../atoms';

interface IModalProps extends IChildProps {
  title: string;
  handleClose: () => void;
  handleDone?: () => void;
}

const Modal = ({ title, children, handleClose, handleDone }: IModalProps) => {
  return (
    <>
      <ModalContainer>
        <HeaderContainer>
          <TypoAtom fontSize={`2.324375rem`} fontColor="#4B86FA">
            {title}
          </TypoAtom>
          <BtnAtom handler={handleClose}>
            <span className="material-symbols-outlined">close</span>
          </BtnAtom>
        </HeaderContainer>
        {children}
        {/* <FooterContainer>
          <BtnAtom handler={handleDone}>
            <span className="material-symbols-outlined">done</span>
          </BtnAtom>
        </FooterContainer> */}
      </ModalContainer>
    </>
  );
};

export default Modal;

const ModalContainer = styled(CardAtom)`
  background: ${({ theme: { colors } }) =>
    `linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.85) 0%,
      rgba(255, 255, 255, 0) 55.21%
    ), ${colors.bgYellow}`};
  padding: 2.324375 3.2925;
`;

const HeaderContainer = styled.div``;

const FooterContainer = styled.div``;
