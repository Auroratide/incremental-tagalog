import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Wordbase from 'Client/components/core/Wordbase';

import Page from 'Client/components/layout/Page';
import WordPage from 'Client/components/pages/WordPage';

const App = () =>
  <Wordbase.Provider>
    <Page>
      <Switch>
        <Route path="/words/:id" component={WordPage} />
        <Route path="*" render={() => <div>Not found</div>} />
      </Switch>
    </Page>
  </Wordbase.Provider>;

export default App;