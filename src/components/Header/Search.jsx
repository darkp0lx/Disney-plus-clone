import styled, { css } from 'styled-components'
import { useState, useRef, useEffect } from 'react'
import { MdSearch, MdClose } from 'react-icons/md'
import { addOpacityToColor } from '../../styles/utils'

export function Search ({ visible, toggle }) {
  const inputRef = useRef()
  const [text, changeText] = useState('')

  const handleSearch = e => {
    const input = e.target.value
    changeText(input)
    search({ variables: { input } })
  }

  const handleClose = () => {
    toggle()
    changeText('')
    if (!visible) {
      inputRef.current.focus()
    }
  }
  const detectKey = e => {
    if (e.keyCode === 27) {
      handleClose()
    }
    if (e.keyCode === 13) {
      handleClose()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', detectKey, false)

    return () => {
      document.removeEventListener('keydown', detectKey, false)
    }
  }, [])

  return (
    <>
      <Form>
        <Input
          ref={inputRef}
          type='text'
          autoComplete='off'
          visible={visible}
          placeholder='Busca dorama...'
          value={text}
          onChange={handleSearch}
        />
      </Form>
      <SearchButton visible={visible} onClick={handleClose}>
        {visible ? <MdClose size={27} /> : <MdSearch size={27} />}
      </SearchButton>
    </>
  )
}
/* SEARCH */
const SearchButton = styled.a`
  padding: 0.6rem 0.5rem 0.5rem;
  float: right;
  margin-top: 20px;

  svg {
    color: ${({ theme, visible }) =>
      visible ? theme.colors.primary : theme.colors.white};
  }
`

const Form = styled.div`
  display: block;
  margin-top: 0em;
`

const Input = styled.input`
  display: block;
  width: calc(100% - 120px);
  height: 2.5rem;
  opacity: ${({ visible }) => (visible ? 0.8 : 0)};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.5rem 1rem;
  pointer-events: ${({ visible }) => (visible ? 'auto' : 'none')};
  background-color: ${({ theme }) =>
    addOpacityToColor(theme.colors.white, 0.3)};
  box-shadow: 0 0 5px
      ${({ theme }) => addOpacityToColor(theme.colors.black, 0.5)},
    inset 0 0 0 1px ${({ theme }) => addOpacityToColor(theme.colors.white, 0.2)};
  margin-bottom: 0;
  border-radius: 3px;
  position: absolute;
  top: 20px;
  left: 0;
  &:focus {
    outline: 0;
  }
`
