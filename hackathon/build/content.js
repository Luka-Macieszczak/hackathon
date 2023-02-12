console.log(document.URL)
let title = 'Book';

const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
<<<<<<< HEAD
        url: 'https://www.amazon.com/Apple-MU8F2AM-A-Pencil-Generation/dp/B07K1WWBJK/ref=sr_1_1?crid=G1BFKRJHU7QS&keywords=apple+pencil&qid=1676163925&sprefix=apple+penci%2Caps%2C145&sr=8-1',
=======
        url: document.URL,
>>>>>>> a510e88b98573e89c86e6f074bb73d9d11feb11e
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