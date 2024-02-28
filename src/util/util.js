import md5 from 'md5';
import moment from 'moment';


const getMD5 = (data) => {
  return md5(data);
};

const getPassword = () => {
  return process.env.REACT_APP_PASSWORD + '_' + moment().format('YYYYMMDD');
}

export const getHashMD5 = () => {
  return getMD5(getPassword());
};

export const getUniqueObjectsByID = (objList) => {
  const listUniqueIds = [];
  const listUniqueObjects = [];

  for (let i = 0; i < objList.length; i++) {
    const currentObj = objList[i];

    if(listUniqueIds.includes(currentObj.id)) {
      continue;
    } else {
      listUniqueIds.push(currentObj.id);
      listUniqueObjects.push(currentObj);
    }
  }

  return listUniqueObjects;
};
