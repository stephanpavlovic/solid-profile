import React from 'react'
import styled from 'styled-components'
import { DataField } from '../solid-components/index'

const Head = styled.div`
  display: flex;
  flex-direction: column
  width: 100vw;
  height: 210px;
  background: rgb(41,73,240);
  background: linear-gradient(135deg, rgba(41,73,240,1) 0%, rgba(171,2,250,1) 100%);
  align-items: center
`

const Card = styled.div`
  background: white;
  border-radius: 8px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: -100px 20px 0;
  opacity: 0.97;
  padding: 20px;
  box-shadow: 0 1px 20px rgba(0, 0, 0, 0.15);
`

const Image = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-top: -70px;
  box-shadow: 0 1px 20px rgba(0, 0, 0, 0.75) ;
  margin-bottom: 20px;
`

const Name = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 5px
`

const City = styled.div`
  font-size: 14px;
  color: rgba(41,73,240,1)
`

export default class Profile extends React.PureComponent {
  render() {
    return <div>
      <Head/>
      <Card>
        <Image src={this.props.image}/>
        <Name>
          <DataField data={this.props.user.name}/>
        </Name>
        <City>
          <DataField data={this.props.user.birthday}/>
        </City>
      </Card>
    </div>
  }
}
