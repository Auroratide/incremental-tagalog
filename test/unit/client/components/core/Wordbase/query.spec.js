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

  describe('startingWith', () => {
    let query;

    beforeEach(() => {
      query = new Query([
        createWord('apple'),
        createWord('avacado'),
        createWord('banana')
      ]);
    });

    it('should return all the words starting with the given letter', () => {
      const list = query.startingWith('a').all();

      expect(list).toHaveLength(2);
      expect(list.every(word => word.id[0] === 'a')).toBe(true);
    });

    it('should return empty list if no words begin with the given letter', () => {
      const list = query.startingWith('z').all();

      expect(list).toHaveLength(0);
    });
  });
});