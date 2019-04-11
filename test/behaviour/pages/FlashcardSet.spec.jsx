import React from 'react';
import { withAppContext } from 'Test/enzyme';
import { allActionsToComplete } from 'Test/behaviour/await';
import http from 'Test/behaviour/mock-http';
import WordBase from 'Client/components/core/Wordbase';
import WordBuilder from 'Test/builders/WordBuilder';

import FlashcardSet from 'Client/components/pages/FlashcardSetsRouter/FlashcardSetPage/FlashcardSet';

describe('FlashcardSet Behaviour', () => {
  let wrapper;
  const currentWord = () => wrapper.find('.word').text();
  const clickNext = () => wrapper.find('button').at(1).simulate('click');
  
  beforeEach(async () => {
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

    wrapper = withAppContext()
      .withProvider(WordBase.Provider)
      .mount(<FlashcardSet words={['salamat', 'kumasta']} />);
    
    await allActionsToComplete();
    wrapper.update();
  });

  afterEach(() => http.reset());

  it('should navigate to the next word', () => {
    const firstWord = currentWord();

    clickNext();

    expect(currentWord()).not.toEqual(firstWord);
  });
});