import React from 'react'
import styled from 'styled-components'
import DescriptionBox from '../../components/authentication-comp/descriptionBox'

const Section = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    box-sizing: border-box;
`

const NewSignup = () => {
  return (
    <Section>
      <form >

      </form>
      <DescriptionBox />
    </Section>
  )
}

export default NewSignup
