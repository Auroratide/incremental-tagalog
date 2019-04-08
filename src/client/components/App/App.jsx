import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Wordbase from 'Client/components/core/Wordbase';

import Page from 'Client/components/layout/Page';
import WordsRouter from 'Client/components/pages/WordsRouter';

const App = () =>
  <Wordbase.Provider>
    <Page>
      <Switch>
        <Route path="/words" component={WordsRouter} />
        <Route path="*" render={() => <div>Not found</div>} />
      </Switch>
    </Page>
  </Wordbase.Provider>;

export default App;