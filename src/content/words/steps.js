const fs = require('../fs');

module.exports = async (path, publicPath) => {
  const words = await fs.parseAllInDir(path);
  await fs.saveAsJson(publicPath, 'index', { words });
};