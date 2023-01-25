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

 const Header = ({authenticated}) => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <img  alt="Logo"/>
          {authenticated ? (
             <>
              <SearchInputContainer title="Entrar">
                <Input placeholder='Buscar...'/>
              </SearchInputContainer>
              <Menu>Live code</Menu>
              <Menu>Global</Menu>
             </>
          ) : null}
       
        </Row>
        <Row>
          {authenticated ? (
              <UserPicture src="https://avatars.githubusercontent.com/u/94086819?v=4"/>   
            ) : (
              <>
              <MenuRight href='#'>Home</MenuRight>
              <Button title="Entrar"/>
              <Button title="Cadastrar"/>
            </>
          )}
        
        </Row>
      </Container>
    </Wrapper>
  )
}

export default Header;