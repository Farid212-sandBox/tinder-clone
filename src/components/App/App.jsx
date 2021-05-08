import {BrowserRouter as Router, Switch, Route, } from 'react-router-dom'
import indexRoutes from '../../constants/indexRoutes'
import './App.css'


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {indexRoutes.map((el, key)=>(
            <Route key={key} path={el.path} component={el.component} exact />
          ))}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
