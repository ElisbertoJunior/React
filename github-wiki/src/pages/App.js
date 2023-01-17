import gitLogo from '../assets/github.png'
import Input from '../components/Input';
import ItemRepo from '../components/ItemRepo';
import Button from '../components/Button';
import { Container } from './styles';

const App = () => {

const [repos, setRepos] = useState([]);

  return (
    <div className="App">
      <Container>
        <img src={gitLogo} width={72} height={72} alt="GitHub Logo"/>
        <Input />
        <Button/>
        <ItemRepo/>
      </Container>
    </div>
  );
}

export default App;
