import React from 'react'
import {FiThumbsUp} from 'react-icons/fi'

import {
  CardContainer, 
  Content, 
  HasInfo, 
  ImageBackground, 
  PostInfo, 
  UserInfo, 
  UserPicture
} from './styles'


const Card = () => {
  return (
    <CardContainer>
      <ImageBackground/>
      <Content>
        <UserInfo>
          <UserPicture/>
          <div>
            <h4>Elisberto Junior</h4>
            <p>Ha 5 minutos</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projetos para cursos de HTML e CSS</h4>
          <p>Projeto feito no curso de HTML e CSS no bootcamp... <strong>Saiba Mais</strong></p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #JavaScript</h4>
          <p>
            <FiThumbsUp/> 10
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  )
}

export default Card