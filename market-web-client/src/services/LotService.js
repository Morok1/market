import {host_url} from '../api'

let LotService = {

    getLotList: (onSuccess, onFailure) => {

        const url = host_url + '/all-lots';

        fetch(url, {
            method: 'GET',
            mode: 'cors'
        })
        .then(response => {
    
            if(response.ok) {
                return response.json();
            } else {
                console.log('Error');
            }
        })
        .then(data => onSuccess(data))
        .catch(error => onFailure())
    }
    
}

export {LotService}