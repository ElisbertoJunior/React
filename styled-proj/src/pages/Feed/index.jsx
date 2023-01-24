import { Link } from 'react-router-dom'

import Button from '../../components/Button';
import Header from '../../components/Header';
import Card from '../../components/Card';
import UserInfo from '../../components/UserInfo';
import { Container, Title, TitleHighLight, TextContent } from './styles'

 const Feed = () => {
  return (
    <>
      <Header/>
      <Container>
        <Card/>
        <UserInfo/>
      </Container>
    
    </>
  )
}

export default Feed;