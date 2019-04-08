import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Page from 'Client/components/layout/Page';
import WordPage from 'Client/components/pages/WordPage';

const App = () =>
  <Page>
    <Switch>
      <Route path="/words/:id" component={WordPage} />
      <Route path="*" render={() => <div>Not found</div>} />
    </Switch>
  </Page>;

export default App;