import Query from 'Client/components/core/Wordbase/query';

describe('Wordbase Query', () => {
  const createWord = (id) => ( {
    id
  } );

  describe('word', () => {
    let query;

    beforeEach(() => {
      query = new Query([createWord('apple')]);
    });

    it('should return the word with the given id', () => {
      const word = query.word('apple');

      expect(word.id).toEqual('apple');
    });

    it('should return undefined if word is not in the wordbase', () => {
      expect(query.word('?')).toBe(undefined);
    });
  });
});