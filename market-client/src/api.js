
const host_url = 'http://127.0.0.1:8080';

const getHello = (onSuccess, onFailure) => {

    const url = host_url + '/hello';

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

export { getHello, host_url }