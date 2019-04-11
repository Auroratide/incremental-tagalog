import React from 'react';
import { withAppContext } from 'Test/enzyme';
import { allActionsToComplete } from 'Test/behaviour/await';
import http from 'Test/behaviour/mock-http';
import FlashcardSetsRouter from 'Client/components/pages/FlashcardSetsRouter';
import WordBase from 'Client/components/core/Wordbase';
import WordBuilder from 'Test/builders/WordBuilder';
import FlashcardSetBuilder from 'Test/builders/FlashcardSetBuilder';

describe('FlashcardSetsRouter Behaviour', () => {
  const page = id => withAppContext()
    .withProvider(WordBase.Provider)
    .withRoute(`/flashcard-sets/${id}`)
    .mount(<FlashcardSetsRouter />);
  
  beforeEach(() => {
    http
      .when.get('/api/words/index.json')
      .then.reply(200, {
        words: [new WordBuilder()
          .withId('salamat')
          .withTagalog('salamat')
          .withDefinition('thank you')
          .build(),
        new WordBuilder()
          .withId('kumasta')
          .withTagalog('kumasta')
          .withDefinition('hello')
          .build()]
      });

    http
      .when.get('/api/flashcard-sets/index.json')
      .then.reply(200, {
        flashcard_sets: [new FlashcardSetBuilder()
          .withId('set-1')
          .withName('Set 1')
          .withWords(['salamat'])
          .build()
        ]});
  });

  afterEach(() => http.reset());
  
  describe('Single Flashcard Set', () => {
    it('should render the flashcard set', async () => {
      const wrapper = page('set-1');
      
      await allActionsToComplete();
      wrapper.update();
      
      expect(wrapper.text()).toContain('Set 1');
    });
  });

});