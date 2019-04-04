import axios from 'axios';
import config from "../../config";

const { base_url } = config;

export async function getImages(dispatch, json) {

  let { type, ...data} = json;

  axios.get( base_url + 'search/photos?query='+data.query+'&per_page='+data.count+'&client_id='+process.env.REACT_APP_CLIENT_ID )
    .then(function(response){
      if(response.status === 200){
        dispatch({type, payload: {[data.query]: response.data}});
      }
    }).catch(function(error){
      dispatch({type, payload: {}});
    });
};
