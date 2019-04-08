import React from 'react';
import { mount, configure } from 'enzyme';
import { MemoryRouter, Route, Switch } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export * from 'enzyme';

export const withAppContext = () => new MountContext();

class MountContext {
  constructor() {
    this.route = '/';
    this.providers = [];
  }

  withRoute(route) {
    this.route = route;
    return this;
  }

  withProvider(Provider) {
    this.providers.push(Provider);
    return this;
  }

  mount(component) {
    return mount(this.providers.reduce((all, provider) => {
      return React.createElement(provider, {}, all);
    }, <MemoryRouter initialEntries={[this.route]} initialIndex={0}>
      <Switch>
        <Route path='/words' render={() => component} />
        <Route path='' render={() => component} />
      </Switch>
    </MemoryRouter>));
  }
}