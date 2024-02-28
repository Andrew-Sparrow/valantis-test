import {
  loadAllProductIDs, loadCurrentItemsOnPage,
} from './actions';

import { getUniqueObjectsByID } from '../util/util';


const requestDataAllIDs = {
	"action": "get_ids",
	"params":  {}
};

// request api example
// {
// 	"action": "get_ids",
// 	"params": {"offset": 0, "limit": 3}
// }

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
      let uniqueIDs = [];
      if (data.result) {
        uniqueIDs = Array.from(new Set(data.result));
      }

      return api.post('/', {
        "action": "get_items",
        "params": {"ids": uniqueIDs}
      })
    })
    .then(({data}) => {
      const listUniqueObj = getUniqueObjectsByID(data.result);
      dispatch(loadCurrentItemsOnPage(listUniqueObj));
    })
    .catch((err) => {
      console.log(err.message);

      api.post('/', requestCurrentIDs)
      .then(({data}) => {
        let uniqueIDs = [];
        if (data.result) {
          uniqueIDs = Array.from(new Set(data.result));
        }

        return api.post('/', {
          "action": "get_items",
          "params": {"ids": uniqueIDs}
        })
      })
      .then(({data}) => {
        const listUniqueObj = getUniqueObjectsByID(data.result);
        dispatch(loadCurrentItemsOnPage(listUniqueObj));
      })
    })
);
