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

const Result = styled.div`
  position: absolute;
  left: 0px;
  top: 80px;
  width: 100%;
  opacity: 1;
  cursor: inherit;
  box-shadow: inset 0 0 70px
      ${({ theme }) => addOpacityToColor(theme.colors.black, 0.3)},
    0 0 20px ${({ theme }) => addOpacityToColor(theme.colors.black, 0.5)};
  background-color: ${({ theme }) => theme.colors.bg};
  display: block;
  max-height: 600px;
  overflow: scroll;
`

const ResultList = styled.ul`
  margin: 0;
  margin-bottom: 1rem;
  padding: 0px;
  cursor: pointer;
`

const ResultItem = styled.li`
  font-size: 0.75rem;
  padding-right: 1rem;
  text-align: left;
  line-height: 2.5rem;
  position: relative;
  min-height: 2.5rem;
  display: list-item;
  margin: 0;
  padding: 10px;
  display: flex;

  border-bottom: 0.5px solid
    ${({ theme }) => addOpacityToColor(theme.colors.white, 0.3)};
  .ResultItemLink {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.tinyBlack};
    border-left: 5px solid ${({ theme }) => theme.colors.primary};
    svg {
      color: ${({ theme }) => theme.colors.primary} !important;
    }
    padding-left: 1px;
  }
`

const ResultMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  line-height: 2.5rem;
  min-height: 5rem;
  margin: 0;
  color: ${({ theme }) => theme.colors.white};

  div {
    margin-right: 0.5rem;
  }
`

const ResultType = styled.span`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  line-height: 1rem;
  height: 1rem;
  font-size: 0.625rem !important;
  padding: 0 0.6rem;
  font-weight: 700;
  margin-top: 5px;
  text-transform: uppercase;
  margin-left: 0.5rem;
  max-width: 100px;
  text-align: center;
  position: absolute;
  bottom: 10px;
`

const ResultItemLink = styled.a`
  display: flex;
  flex-direction: column;
  width: 100%;
`
const ResulText = styled.span`
  margin: -10px 0;
  padding-left: 0.5rem;
  font-size: 0.875rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.white};
  max-width: 200px;
  font-weight: 600;

  ${({ sub }) =>
    sub &&
    css`
      opacity: 0.7;
      font-weight: 500;
    `}

  @media ${({ theme }) => theme.device.mobileM} {
    max-width: 260px;
  }

  @media ${({ theme }) => theme.device.mobileL} {
    max-width: 300px;
  }
  @media ${({ theme }) => theme.device.tablet} {
    max-width: 100%;
  }
`
