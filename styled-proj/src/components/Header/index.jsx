import React from 'react'
import Button from '../Button'
import {
  Column, 
  Container, 
  Menu, 
  Input, 
  MenuRight, 
  Row, 
  SearchInputContainer, 
  UserPicture, 
  Wrapper
} from './styles'

 const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <img  alt="Logo"/>
          <SearchInputContainer title="Entrar">
            <Input placeholder='Buscar...'/>
          </SearchInputContainer>
          <Menu>Live code</Menu>
          <Menu>Global</Menu>
        </Row>
        <Row>
          <MenuRight href='#'>Home</MenuRight>
          <Button title="Entrar"/>
          <Button title="Cadastrar"/>
        </Row>
      </Container>
    </Wrapper>
  )
}

export default Header;