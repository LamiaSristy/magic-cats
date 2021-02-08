/*eslint-disable*/
import '../stylesheets/App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CatList from '../containers/CatList';
import Cat from '../containers/Cat';

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
          {/* <Route path="/404">
            <FourOFour />
          </Route> */}
        </Switch>
      </BrowserRouter>
  </div>
);
export default App;
