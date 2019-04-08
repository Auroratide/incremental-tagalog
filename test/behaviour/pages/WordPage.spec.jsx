import { withAppContext } from 'Test/enzyme';
import { allActionsToComplete } from 'Test/behaviour/await';
import http from 'Test/behaviour/mock-http';
import WordPage from 'Client/components/pages/WordPage';
import WordBase from 'Client/components/core/Wordbase';
import WordBulder from 'Test/builders/WordBuilder';

describe('WordPage Behaviour', () => {
  const page = word => withAppContext()
    .withProvider(WordBase.Provider)
    .withRoute(`/words/${word}`)
    .mount(WordPage);
  
  beforeEach(() => {
    http
      .when.get('/api/words/index.json')
      .then.reply(200, {
        words: [new WordBulder()
          .withId('salamat')
          .withTagalog('salamat')
          .withDefinition('thank you')
          .build()]
      });
  });

  afterEach(() => http.reset());
  
  it('should render the word', async () => {
    const wrapper = page('salamat');

    await allActionsToComplete();
    wrapper.update();

    expect(wrapper.text()).toContain('salamat');
    expect(wrapper.text()).toContain('thank you');
  });
});