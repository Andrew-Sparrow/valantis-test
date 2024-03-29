import {
  loadAllProductIDs, loadCurrentItemsOnPage, setIsCurrentItemsLoading, setIsFilterItemsLoading, setIsInitialItemsLoading,
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
    .then((response) => {
      if(response) {
        dispatch(loadAllProductIDs(Array.from(new Set(response.data.result)))); // save only unique values
      }
    })
    .catch((err) => {
      console.log(err.message);
      api.post('/', requestDataAllIDs)
        .then((response) => {
          if(response) {
            dispatch(loadAllProductIDs(Array.from(new Set(response.data.result))));
          }
        }).catch((err) => {
          dispatch(loadAllProductIDs([]));
          dispatch(setIsCurrentItemsLoading(false));
          dispatch(setIsFilterItemsLoading(false));
          dispatch(setIsInitialItemsLoading(false));
        })
    })
);

export const fetchCurrentProducts = (requestCurrentIDs) => (dispatch, _getState, api) => (
  api.post('/', requestCurrentIDs)
    .then((response) => {
      let uniqueIDs = [];
      if (response) {
        uniqueIDs = Array.from(new Set(response.data.result));
      }

      return api.post('/', {
        "action": "get_items",
        "params": {"ids": uniqueIDs}
      })
    })
    .then((response) => {
      if(response) {
        const listUniqueObj = getUniqueObjectsByID(response.data.result);
        dispatch(loadCurrentItemsOnPage(listUniqueObj));
      }
    })
    .catch((err) => {
      console.log(err.message);

      api.post('/', requestCurrentIDs)
      .then((response) => {
        let uniqueIDs = [];
        if (response) {
          uniqueIDs = Array.from(new Set(response.data.result));
        }

        return api.post('/', {
          "action": "get_items",
          "params": {"ids": uniqueIDs}
        })
      })
      .then((response) => {
        if(response) {
          const listUniqueObj = getUniqueObjectsByID(response.data.result);
          dispatch(loadCurrentItemsOnPage(listUniqueObj));
          dispatch(setIsCurrentItemsLoading(false));
          dispatch(setIsFilterItemsLoading(false));
          dispatch(setIsInitialItemsLoading(false));
        }
      }).catch((err) => {
        dispatch(loadAllProductIDs([]));
        dispatch(setIsFilterItemsLoading(false));
        dispatch(setIsCurrentItemsLoading(false));
      })
    })
);
