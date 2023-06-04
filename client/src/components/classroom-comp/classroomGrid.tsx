import React from 'react'
import styled from 'styled-components'
import ClassroomCard from './classroomCard'

const Section = styled.div`
border: 1px solid red;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
/* gap: 12px; */
column-gap: 12px;
row-gap: 4rem;
`

const ClassroomGrid = () => {
  return (
    <Section>
        <ClassroomCard />
        <ClassroomCard />
        <ClassroomCard />
        <ClassroomCard />
        <ClassroomCard />
    </Section>
  )
}

export default ClassroomGrid
