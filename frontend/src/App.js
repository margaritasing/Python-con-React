import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { About } from './compoments/About';
import { Users } from './compoments/Users';
import { Navbar } from './compoments/Navbar'

function App() {
  return (
    <Router>
    <Navbar/>
      <div className="container p-2">
        <Switch>
         <Route path="/about" component={About} />
         <Route path="/" component={Users} />

        </Switch>
      </div>
    </Router>

  );
}

export default App;
