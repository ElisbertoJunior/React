import { Header } from "../../components/Header";
import background from "../../assets/background.png";
import ItemList from "../../components/ItemList";
import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <Header/>
      <div className="content">
        <img className="background_img" src={background} alt="background app"/>
        <div className="info">
          <div>
            <input name="user" placeholder="@username"/>
            <button>Burcar</button>
          </div>
          <div className="perfil">
            <img 
              src="https://avatars.githubusercontent.com/u/94086819?s=400&u=242e5321baaae649d2e0cbd4b481afacdd8e488b&v=4" 
              className="profile"
              alt="Imagem de Perfil"
            />
            <div>
              <h3>Elisberto Junior</h3>
              <span>@ElisbertoJunior</span>
              <p>descricao</p>
           </div>
          </div>
          <hr />
          <div>
            <h4 className="repositories">Repositorios</h4>
            <ItemList title="teste1" description="teste description"/>
          </div>
        </div>
      </div>
    </div> 
  );
}

export default App;
