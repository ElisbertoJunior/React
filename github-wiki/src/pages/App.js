import gitLogo from '../assets/github.png'
import Input from '../components/Input';
import { Container } from './styles';

const App =() => {
  return (
    <div className="App">
      <Container>
        <img src={gitLogo} width={72} height={72} alt="GitHub Logo"/>
        <Input></Input>
      </Container>
    </div>
  );
}

export default App;
