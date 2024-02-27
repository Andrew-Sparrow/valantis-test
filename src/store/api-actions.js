import {
  loadAllProductIDs, loadCurrentItemsOnPage,
} from './actions';


const requestDataAllIDs = {
	"action": "get_ids",
	"params":  {}
};

// request api example
// {
// 	"action": "get_ids",
// 	"params": {"offset": 0, "limit": 3}
// }

const requestCurrentItems = {
  "action": "get_items",
  "params": {"ids": ["1789ecf3-f81c-4f49-ada2-83804dcc74b0"]}
};

export const fetchAllProductIDs = () => (dispatch, _getState, api) => (
  api.post('/', requestDataAllIDs)
    .then(({data}) => {
      dispatch(loadAllProductIDs(Array.from(new Set(data.result)))); // save only unique values
    })
    .catch((err) => {
      console.log(err.message);
      api.post('/', requestDataAllIDs)
        .then(({data}) => {
          dispatch(loadAllProductIDs(Array.from(new Set(data.result))));
        })
    })
);

export const fetchCurrentProducts = (requestCurrentIDs) => (dispatch, _getState, api) => (
  api.post('/', requestCurrentIDs)
    .then(({data}) => {
      return api.post('/', {
        "action": "get_items",
        "params": {"ids": Array.from(new Set(data.result))}
      })
    })
    .then(({data}) => {
      dispatch(loadCurrentItemsOnPage(Array.from(new Set(data.result))));
    })
    .catch((err) => {
      console.log(err.message);
    })
);
