import { useState } from 'react';
import gitLogo from '../assets/github-mark-white.png'
import Button from '../components/Button';
import Input from '../components/Input';
import ItemRepo from '../components/ItemRepo';
import { Container } from './styles';


const App = () => {

  const [currentRepo, setCurrentRepo] = useState('')
  const [repos, setRepos] = useState([])

  const handleSearchRepo = async () => {
    const { data } = api.get(`repos/${currentRepo}`)

    if (data.id) {
       setRepos(prev => [...prev, data])      
    }

  }

  return (
    <div className="App">
        <Container>
            <img src={gitLogo} width={72} height={72} alt="GitHub Logo"/>
            <Input/>
            <Button/>
            <ItemRepo/>
        </Container>
    </div>
  );                                    
}

export default App;
