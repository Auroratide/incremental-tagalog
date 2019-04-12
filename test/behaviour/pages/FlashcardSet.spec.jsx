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
  const getWord = () => wrapper.find('.front').at(0).text();
  const getDefinition = () => wrapper.find('.back').at(0).text();
  const dotPosition = () => wrapper.find('.dot').reduce((position, node, index) => {
    return node.hasClass('selected') ? index : position;
  }, 0);
  
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
          .withId('kumusta')
          .withTagalog('kumusta')
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

  it('should show word with corresponding definition', () => {
    const showsSalamat = getWord().includes('salamat') && getDefinition().includes('thank you');
    const showsKumusta = getWord().includes('kumusta') && getDefinition().includes('hello');

    expect(showsSalamat || showsKumusta).toBe(true);
  });

  it('should highlight next dot when next word is clicked', () => {
    expect(dotPosition()).toBe(0);
    
    clickNext();

    expect(dotPosition()).toBe(1);
  });
});