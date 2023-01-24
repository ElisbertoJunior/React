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
      <ImageBackground src="https://i.pinimg.com/originals/5c/7b/53/5c7b53a7be1dd267f24f7559584d1345.jpg"/>
      <Content>
        <UserInfo>
          <UserPicture src="https://avatars.githubusercontent.com/u/94086819?v=4"/>
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