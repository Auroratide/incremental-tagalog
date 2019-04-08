import { withAppContext } from 'Test/enzyme';
import { allActionsToComplete } from 'Test/behaviour/await';
import http from 'Test/behaviour/mock-http';
import WordsRouter from 'Client/components/pages/WordsRouter';
import WordBase from 'Client/components/core/Wordbase';
import WordBulder from 'Test/builders/WordBuilder';

describe('WordsRouter Behaviour', () => {
  const page = word => withAppContext()
    .withProvider(WordBase.Provider)
    .withRoute(`/words/${word}`)
    .mount(WordsRouter);
  
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
  
  describe('Single Word', () => {
    it('should render the word', async () => {
      const wrapper = page('salamat');
      
      await allActionsToComplete();
      wrapper.update();
      
      expect(wrapper.text()).toContain('salamat');
      expect(wrapper.text()).toContain('thank you');
    });
  });
});