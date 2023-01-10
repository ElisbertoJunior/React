import { Header } from "../../components/Header";
import background from "../../assets/background.png"
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
        </div>
      </div>
    </div>
  );
}

export default App;
