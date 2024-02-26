import {
  loadAllProductIDs,
} from './actions';


const requestData = {
	"action": "get_ids",
	"params":  {}
};


export const fetchAllProductIDs = () => (dispatch, _getState, api) => (
  api.post('/', requestData)
    .then(({data}) => {
      dispatch(loadAllProductIDs(data.result));
    })
    .catch((err) => {
      console.log(err.message)
    })
);
