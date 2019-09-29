'use strict';
const moment = require('moment');
const solarData = require('./solar_data.json');

function processData(data) {
  console.log('Processing data.');
  
  return data.map(item => {
    const installationDate = moment(item['Installation Date'], 'MM/DD/YY')
    const installationDateFormated = installationDate.isValid ? installationDate.format('YYYY-MM-DD') : moment().format('YYYY-MM-DD');
    
    return {
      dataProvider: item['Data Provider'],
      installationDate: installationDateFormated,
      systemSize: +item['System Size'],
      zipCode: +item['Zip Code'],
      state: item['State'],
      cost: item['Cost'],
    }
  });
}

module.exports = {
  up: async (queryInterface) => {
    const arrayInstallations = processData(solarData);
    const total = arrayInstallations.length;
    
    while(arrayInstallations.length > 0) {      
      const sliceInstallations = arrayInstallations.splice(0, 1000);
      await queryInterface.bulkInsert('installations', sliceInstallations, {});

      const percent = (100 - arrayInstallations.length / total * 100).toFixed(0) + '%';
      console.log('inserting installations:', percent);
    }
  },

  down: (queryInterface) => queryInterface.bulkDelete('installations', null, {}),
};
