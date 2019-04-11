import React from 'react';
import { withAppContext } from 'Test/enzyme';
import { allActionsToComplete } from 'Test/behaviour/await';
import http from 'Test/behaviour/mock-http';
import WordBase from 'Client/components/core/Wordbase';
import WordBuilder from 'Test/builders/WordBuilder';

import FlashcardSet from 'Client/components/pages/FlashcardSetsRouter/FlashcardSetPage/FlashcardSet';
import Flashcard from 'Client/components/pages/FlashcardSetsRouter/FlashcardSetPage/FlashcardSet/Flashcard';

describe('FlashcardSet Behaviour', () => {
  let wrapper;
  const currentWord = () => wrapper.find(Flashcard).text();
  const clickNext = () => wrapper.find('.buttons button').at(1).simulate('click');
  const flipCard = () => wrapper.find('.flip-button').at(0).simulate('click');
  const definitionShowing = () => wrapper.find('.showing-definition').exists();
  
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

  it('should flip the card over', () => {
    expect(definitionShowing()).toBe(false);

    flipCard();

    expect(definitionShowing()).toBe(true);
  });
});