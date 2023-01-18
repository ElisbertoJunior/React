import { useState } from 'react';
import gitLogo from '../assets/github-mark-white.png'
import Button from '../components/Button';
import Input from '../components/Input';
import ItemRepo from '../components/ItemRepo';
import { api } from '../services/api';
import { Container } from './styles';


const App = () => {

  const [currentRepo, setCurrentRepo] = useState('')
  const [repos, setRepos] = useState([])

  const handleSearchRepo = async () => {
    const { data } = await api.get(`repos/${currentRepo}`)

    if (data.id) {

      const isExist = repos.find(repo => repo.id === data.id);

      if (!isExist) {
        setRepos(prev => [...prev, data]);
        setCurrentRepo('');    
        return 
      }

    }

    alert("Repositorio nao encontrado.");

  }

  const handleRemoveRepo = (id) => {
    const newList = repos.filter(repo => repo.id !== id)
    setRepos([...newList]);
  }

  return (
    <div className="App">
        <Container>
          <img src={gitLogo} width={72} height={72} alt="GitHub Logo"/>
          <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>
          <Button onClick={handleSearchRepo}/>
          {repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo}/>)}
        </Container>
    </div>
  );                                    
}

export default App;
