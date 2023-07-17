import React from 'react'
import { styled } from 'styled-components'

const Section = styled.div`
 display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 24px;
  background: #fecdca;
  border-radius: 41px;
  cursor: pointer;
  font-weight: 600;
  font-size: 18px;
  line-height: 30px;
  color: #b42318;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
`



const ReportUser = () => {

  // user id, localuserid

  return (
    <Section>
      Report User
    </Section>
  )
}

export default ReportUser
