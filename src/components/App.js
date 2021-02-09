/*eslint-disable*/
import '../stylesheets/App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CatList from '../containers/CatList';
import Cat from '../containers/Cat';
import AboutUs from './AboutUs';

const App = () => (
  <div>
    {/* <CatList /> */}
    <BrowserRouter>
        {/* <ScrollToTop /> */}
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
          {/* <Route path="/404">
            <FourOFour />
          </Route> */}
        </Switch>
      </BrowserRouter>
  </div>
);
export default App;
