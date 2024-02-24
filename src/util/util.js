import { md5 } from 'md5';
import 'dotenv/config';


const getMD5 = (data) => {
  return md5(data);
};

const getPassword = () => {
  console.log(process.env.PASSWORD)
  return process.env.PASSWORD;
}

getPassword();

const Util = {

}

export default Util;
