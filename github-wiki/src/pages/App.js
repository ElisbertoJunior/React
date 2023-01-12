/* eslint-disable jsx-a11y/alt-text */
import gitLogo from '../assets/github.png'
import { Container } from './styles';

const App =() => {
  return (
    <div className="App">
      <Container>
        <img src={gitLogo} width={72} height={72} alt="GitHub Logo"/>
      </Container>
    </div>
  );
}

export default App;
