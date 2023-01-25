import { useNavigate } from 'react-router-dom'
import { MdEmail, MdLock } from 'react-icons/md'

import Button from '../../components/Button';
import Header from '../../components/Header';
import Input from '../../components/Input';
import { 
  Container, 
  Column, 
  CreateAccount, 
  ForgotText, 
  Row, 
  SubtitleLogin,
  Title,
  TitleLogin,
  Wrapper 
} from './styles'

 const Login = () => {

  const navigate = useNavigate();

  const handleClickSign = () => {
    navigate("/Feed")
  }

  return (
      <>
        <Header/>
        <Container>
          <Column>
            <Title>
              A plataforma para voce aprender com experts, dominar as
              principais tecnologias e entrar mais rapido nas empresas mais desejadas.
            </Title>
          </Column>
          <Column>
            <Wrapper>
              <TitleLogin>Faca seu cadastro</TitleLogin>
              <SubtitleLogin>Faca seu login e make the change._</SubtitleLogin>
              <form>
                <Input placeholder="E-mail" leftIcon={<MdEmail/>}/>
                <Input placeholder="Senha" type="password" leftIcon={<MdLock/>}/>
                <Button title="Entrar" variant="secondary" onClick={handleClickSign} type="button"/>
              </form>
              <Row>
                <ForgotText>Esqueci minha senha</ForgotText>
                <CreateAccount>Criar Conta</CreateAccount>
              </Row>
            </Wrapper>
          </Column>
        </Container>
      
      </>
  )
}

export default Login;