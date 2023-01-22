import { Link } from 'react-router-dom'

import Button from '../../components/Button';
import Header from '../../components/Header';
import { Container, Title, TitleHighLight, TextContent } from './styles'

 const Login = () => {
  return (
      <>
        <Header/>
        <Container>
          <div>
            <Title>
              <TitleHighLight>
                Implemente
                <br/>  
              </TitleHighLight>
              O seu futuro global agora!
            </Title>
            <TextContent>
              Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo
              e encare seu novo desafio profissional, evoluindo com os melhores experts.
            </TextContent>
            <Button title='Comecar agora' variant="secondary" onClick={() => null}/>
          </div>
          <div>
            <img src="#" alt="Imagem principal" />
          </div>
        </Container>
      
      </>
  )
}

export default Login;