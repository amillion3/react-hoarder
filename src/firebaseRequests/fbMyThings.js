import constants from '../constants';
import axios from 'axios';

const getAllMyThings = uid => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${constants.firebaseConfig.databaseURL}/myHoard.json?orderBy="uid"&equalTo="${uid}"`)
      .then(res => {
        const hoard = [];
        if (res.data !== null) {
          Object.keys(res.data).forEach(fbKey => {
            res.data[fbKey].id = fbKey;
            hoard.push(res.data[fbKey]);
          });
        }
        resolve(hoard);
      })
      .catch(err => {
        reject(err);
      });
  });
};

const addToMyThings = newThing => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${constants.firebaseConfig.databaseURL}/myHoard.json`, newThing)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export default {getAllMyThings, addToMyThings};
