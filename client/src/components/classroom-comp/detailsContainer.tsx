import React from 'react'
import styled from 'styled-components';

const Section = styled.div`
  p {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    color: #4a5578;
    margin-bottom: 1.5rem;
  }

  h3 {
    font-size: 22px;
    opacity: 0.8;
    margin-bottom: 0.8rem;
  }

  ul {
    padding-left: 1rem;
    li {
      font-weight: 500;
      color: #4a5578;
      font-size: 18px;
      line-height: 26px;
      margin-bottom: 0.5rem;
    }
  }
`;

const DetailsContainer = () => {
  return (
    <Section>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
              explicabo cupiditate recusandae debitis vel quaerat, dignissimos
              eum ipsa perferendis reprehenderit sunt optio laboriosam quis at
              veniam reiciendis sit atque expedita repudiandae hic sint
              assumenda vero. Pariatur consectetur distinctio eos eius?
            </p>
            <h3>After this Class, students would be able to :-</h3>
            <ul>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus ea cumque vero facere ipsam necessitatibus!
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus ea cumque vero facere ipsam necessitatibus!
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus ea cumque vero facere ipsam necessitatibus!
              </li>
            </ul>
          </Section>
  )
}

export default DetailsContainer
