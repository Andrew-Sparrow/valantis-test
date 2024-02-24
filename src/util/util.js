import { md5 } from 'md5';

const getMD5 = (data) => {
  return md5(data);
};

export const getPassword = () => {
  console.log(new Date().getFullYear().toString()  + (new Date().getMonth() + 1).toString() + new Date().getDate().toString());
  // console.log(new Date().getMonth() + 1);
  return process.env.REACT_APP_PASSWORD;
}

const Util = {

}

// export default Util;
