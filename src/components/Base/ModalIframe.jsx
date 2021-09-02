import Modal from 'react-modal'
import styled from 'styled-components'
import { MdClose } from 'react-icons/md'

import { colors } from '../../styles/theme'
import { IframeYoutube } from './IframeYoutube'

export function ModalIframe ({ deviceType, visible, changeVisible, url }) {
  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0,0,0,.8)',
      zIndex: 99,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    content: {
      zIndex: 100,
      maxHeight: '80%',
      maxWidth: 420,
      minWidth: '20%',
      position: 'relative',
      background: colors.bg,
      color: colors.white,
      border: 0,
      top: 0,
      left: 0,
      right: 0
    }
  }
  const title = 'Trailer'
  return (
    <ModalStyle>
      <Modal
        isOpen={visible}
        onRequestClose={() => changeVisible(false)}
        style={customStyles}
        contentLabel={title}
      >
        <ModalContainer>
          <ModalHeader>
            <ModalClose onClick={() => changeVisible(false)}>
              <MdClose size={25} />
            </ModalClose>
            <ModalTitle>{title}</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <IframeYoutube deviceType={deviceType} url={url} />
          </ModalBody>
        </ModalContainer>
      </Modal>
    </ModalStyle>
  )
}

const ModalStyle = styled.div`
  div {
    z-index: 100;
  }
`

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 420px;
  margin-right: 0;
`

const ModalTitle = styled.h1`
  font-size: 1.3rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  padding: 0 2.2rem;
`
const ModalClose = styled.div`
  position: relative;
  width: 100%;
  cursor: pointer;
  svg {
    position: absolute;
    color: ${({ theme }) => theme.colors.white};
    right: 0px;
    top: 0px;
  }
`

const ModalHeader = styled.div`
  width: 100%;
  max-width: 420px;
  margin: 0 0;
  border-bottom: 2px solid transparent;
  border-bottom-color: ${({ theme }) => theme.colors.primary};
`

const ModalBody = styled.div`
  max-width: 420px;
  padding: 5px 10px;
`
