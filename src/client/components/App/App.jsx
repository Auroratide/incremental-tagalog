import React from 'react';
import { Switch, Route } from 'react-router-dom';

import WordPage from 'Client/components/pages/WordPage';

const App = () =>
  <Switch>
    <Route path="/words/:id" component={WordPage} />
    <Route path="*" render={() => <div>Not found</div>} />
  </Switch>;

export default App;