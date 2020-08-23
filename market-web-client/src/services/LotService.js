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
        .then(
            (result) => {
                onSuccess(result)
            },
            (error) => {
                onFailure()
            } 
        )
        //.catch(error => onFailure())
    },

    addLot: (data, onSuccess, onFailure) => {

        const url = host_url + '/lot';

        // TODO: не смотри сюда, просто представь что этого нет
        data.id = Math.floor(100 + Math.random() * (1000 + 1 - 100));

        fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(data)
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