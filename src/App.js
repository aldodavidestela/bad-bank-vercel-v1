import './App.css';
import { Link, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './components/Home';
import CreateAccount from './components/CreateAccount';
import Deposit from './components/Deposit';
import Withdraw from './components/Withdraw';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Aldo's Bad Bank v1.0</h1>
      </header>
      <nav>
        <ul className="nav justify-content-center nav-pills">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/createAccount">Create Account</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link "  to="/deposit">Deposit</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link "  to="/withdraw">Withdraw</Link>
          </li>
        </ul>
      </nav>

      <hr />
      <div className="page-div-load">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/createAccount" component={CreateAccount} />
          <Route exact path="/deposit" component={Deposit} />
          <Route exact path="/withdraw" component={Withdraw} />
        </Switch>
      </div>
      
    </div>
  );
}

export default App;
