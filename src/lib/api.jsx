const FIREBASE_DOMAIN = "https://basic-react-quote-default-rtdb.asia-southeast1.firebasedatabase.app"

export async function addQuote(quoteData) {
    // api fucntion to send and add quote data to firebase

    const response = await fetch(`${FIREBASE_DOMAIN}/quote.json`, {
        method: 'post',
        body: JSON.stringify(quoteData),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const data = response.json()

    // throw an error if request is unsuccessful
    if (!data.ok) {
        throw new Error(data.message || "Could not create quote, please try again")
    }

    // return is must as we expect return inside our custom useHttp hook
    return null
}