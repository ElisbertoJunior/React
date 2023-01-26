
import Header from '../../components/Header';
import Card from '../../components/Card';
import UserInfo from '../../components/UserInfo';
import { Container, Title, TitleHighLight, Column } from './styles'

 const Feed = () => {
  return (
    <>
      <Header authenticated={true}/>
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </Column>
        <Column flex={1}>
          <TitleHighLight>#RANKING TOP 5 DA SEMANA</TitleHighLight>
          <UserInfo percentual={75} name="Elisberto Junior" image="https://avatars.githubusercontent.com/u/94086819?v=4"/>
          <UserInfo percentual={75} name="Elisberto Junior" image="https://avatars.githubusercontent.com/u/94086819?v=4"/>
          <UserInfo percentual={75} name="Elisberto Junior" image="https://avatars.githubusercontent.com/u/94086819?v=4"/>
          <UserInfo percentual={75} name="Elisberto Junior" image="https://avatars.githubusercontent.com/u/94086819?v=4"/>
          <UserInfo percentual={75} name="Elisberto Junior" image="https://avatars.githubusercontent.com/u/94086819?v=4"/>
        </Column>
       
      </Container>
    
    </>
  )
}

export default Feed;