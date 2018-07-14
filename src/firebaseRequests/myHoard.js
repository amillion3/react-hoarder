import constants from '../constants';
import axios from 'axios';

const getMyHoard = uid => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${constants.firebaseConfig.databaseURL}/myHoard.json?orderBy="uid"&equalTo="${uid}"`)
      .then(response => {
        const myHoard = [];
        if (response.data !== null) {
          Object.keys(response.data).forEach(key => {
            response.data[key].id = key;
            myHoard.push(response.data[key]);
          });
        }
        resolve(myHoard);
      })
      .catch(err => {
        reject(err);
      });
  });
};

const postToMyHoard = newStuff => {

};

export default {getMyHoard, postToMyHoard};
