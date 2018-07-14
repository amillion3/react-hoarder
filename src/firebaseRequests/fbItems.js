import constants from '../constants';
import axios from 'axios';

const getAllItems = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${constants.firebaseConfig.databaseURL}/items.json`)
      .then(response => {
        const stuffs = [];
        if (response.data !== null) {
          Object.keys(response.data).forEach(firebaseKey => {
            response.data[firebaseKey].id = firebaseKey;
            stuffs.push(response.data[firebaseKey]);
          });
        }
        resolve(stuffs);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export default {
  getAllItems,

};
