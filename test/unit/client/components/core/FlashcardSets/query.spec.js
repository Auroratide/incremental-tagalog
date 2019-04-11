import Query from 'Client/components/core/FlashcardSets/query';

describe('FlashcardSets Query', () => {
  const createSet = id => ({ id });

  describe('set', () => {
    it('should retrieve the set of the given id', () => {
      const set = createSet('set-1');
      const query = new Query([set]);

      expect(query.set('set-1').id).toEqual('set-1');
    });

    it('should return undefined if the set of the given id cannot be found', () => {
      const set = createSet('set-1');
      const query = new Query([set]);

      expect(query.set('set-2')).toBe(undefined);
    });
  });
});