let user = fetch("db.json")

let getData = () => {
    user
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            sendData(data)
        })
        .catch(error => {
            console.log(error);
        })
}

let sendData = (data) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json))
        .catch(error => console.log(error))
}
getData()