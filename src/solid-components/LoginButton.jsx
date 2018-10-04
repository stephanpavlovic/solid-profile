import React from 'react'
import auth from 'solid-auth-client'
import styled, { css } from 'styled-components'

const Button = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;

  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`

/** Button that lets the user log in with Solid. */
export default ({ popup }) =>
  <Button primary
    onClick={() => auth.popupLogin({ popupUri: popup })}>Log in</Button>
