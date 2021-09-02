import { useState } from 'react'
import { FaPlay, FaRegWindowClose } from 'react-icons/fa'
import Modal from 'react-modal'
import styled from 'styled-components'
import { IframeYoutube } from './IframeYoutube'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#ffffff24',
    borderRadius: '10px',
    width: '80%'
  },
  overlay: {
    backgroundColor: '#1107389e'
  }
}

export const ModalButton = ({ title }) => {
  let subtitle
  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal () {
    setIsOpen(true)
  }

  function afterOpenModal () {
    // references are now sync'd and can be accessed.
    subtitle.style.color = 'white'
  }

  function closeModal () {
    setIsOpen(false)
  }

  return (
    <Container>
      <button type='play' onClick={openModal}>
        <FaPlay size={25} />
        play
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Example Modal'
      >
        <TopModal>
          <h2 ref={_subtitle => (subtitle = _subtitle)}>{title}</h2>
          <button className='buttonClose' onClick={closeModal}>
            <FaRegWindowClose size={25} />
          </button>
        </TopModal>

        <div>
          <IframeYoutube />
        </div>
      </Modal>
    </Container>
  )
}

const Container = styled.div`
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;

    height: 55px;
    font-size: 1.3em;
    margin-bottom: 0.5em;
    svg {
      margin-right: 4px;
    }
    background: ${props => (props.transparent ? 'transparent' : 'white')};
    border: ${props => (props.border ? '1px solid white' : 'none')};
    color: ${props => (props.transparent ? 'white' : 'none')};
    border-radius: 0.5em;
    :hover {
      transform: scale(1.05);
      transition: all 0.5s ease;
      background: ${props => props.transparent && '#181818'};
    }
    @media ${({ theme }) => theme.device.tablet} {
      margin-bottom: 0em;
      width: 200px;
    }
  }
`

const TopModal = styled.div`
  display: flex;
  justify-content: space-between;
  .buttonClose {
    background: none;
    outline: none;
    border: none;
    cursor: pointer;
    svg {
      color: white;
    }
  }
`
