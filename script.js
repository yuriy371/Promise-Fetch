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
    let xhr = new XMLHttpRequest()

    let json = JSON.stringify(data);

    xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts', true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send(json)
    xhr.onreadystatechange = () => {
        if (xhr.readyState != 4) {
            return
        }
        if (xhr.status === 200 || xhr.status === 201) {
            console.log('result', JSON.parse(xhr.responseText))
        } else {
            console.log('err', JSON.parse(xhr.responseText))
        }
    }
}
getData()