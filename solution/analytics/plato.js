const plato = require('plato');
const recursiveReadSync = require('recursive-readdir-sync');
const path = require('path');

const client = recursiveReadSync(path.resolve(__dirname, '../client'));
const server = recursiveReadSync(path.resolve(__dirname, '../server'));
const files = client.concat(server)
  .filter((item) => {
    return item.indexOf('bundle') === -1;
  })
  .filter((item) => {
    return item.indexOf('css') === -1;
  });
console.log(files);

const outputDir = path.resolve(__dirname, './plato-report');

// null options for this example
const options = {
  jshint: {
    options: {
      esversion: 6
    }
  }
};

const callback = (report) => {
  console.log('Analysis complete, see: ', outputDir);
  // console.log(report)
};

plato.inspect(files, outputDir, options, callback);
