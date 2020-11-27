import logo from './logo.svg';
import './App.css';
import Buttom from './components/buttoms/Buttom';
import FormUser from './components/forms/FormUser';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>
                    Olá Mundo!!!
            </h1>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >
                    <Buttom title="Enviar" type="teste" style="teste" />
                </a>
            </header>
            <FormUser />
        </div>
    );
}

export default App;