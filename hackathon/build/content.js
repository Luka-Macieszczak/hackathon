console.log(document.URL)
let title = 'Book';

const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        url: document.URL,
        country: 'Canada'
    })
}

fetch('http://localhost:4001/setebay', requestOptions)
    .then((res) => {
        res.text((text) => {
            if(text !== 'success') {
                console.log('unlucky')
            }
        })
    })


