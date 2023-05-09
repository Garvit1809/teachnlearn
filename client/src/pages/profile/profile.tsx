import React from 'react'
import Navbar from '../../components/general-components/navbar'
import ProfileOptions from '../../components/profile-comp/profileOptions'
import styled from 'styled-components'

const Section = styled.div`
    padding: 5rem;
    border: 1px solid red;
`

const Profile = () => {
  return (
    <>
      <Navbar />
      <Section>
      <ProfileOptions />
      </Section>
    </>
  )
}

export default Profile
