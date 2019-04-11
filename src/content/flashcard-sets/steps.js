const fs = require('../fs');

module.exports = async (path, publicPath) => {
  const flashcard_sets = await fs.parseAllInDir(path);
  await fs.saveAsJson(publicPath, 'index', { flashcard_sets });
};