console.log("chrome")
let title = 'Book';

const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        url: window.location.href,
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


