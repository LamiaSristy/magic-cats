import '../stylesheets/App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CatList from '../containers/CatList';
import Cat from '../containers/Cat';
import AboutUs from './AboutUs';
import FourOFour from './404';

const App = () => (
  <div className="app">
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <CatList />
        </Route>
        <Route exact path="/cat/:id">
          <Cat />
        </Route>
        <Route exact path="/AboutUs">
          <AboutUs />
        </Route>
        <Route exact path="/404">
          <FourOFour />
        </Route>
        <Route component={FourOFour} />
      </Switch>
    </BrowserRouter>
  </div>
);
export default App;
