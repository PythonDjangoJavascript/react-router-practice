const FIREBASE_DOMAIN = "https://basic-react-quote-default-rtdb.asia-southeast1.firebasedatabase.app"

export async function getAllQuotes() {
    // api function to get all available quote from firebase

    const response = await fetch(`${FIREBASE_DOMAIN}/quotes.json`)
    const data = await response.json()

    if (!response.ok) {
        // if request is unsuccessful
        throw new Error(data.message || "Could not fetch quotes!")
    }

    // transform quotes data to array
    const transformedQuotes = []
    for (const key in data) {
        const quote = {
            id: key,
            ...data[key],
        }
        transformedQuotes.push(quote)
    }

    return transformedQuotes
}

export async function getQuoteDetail(quoteId) {
    // api function to get the detail of a quote

    const response = await fetch(`${FIREBASE_DOMAIN}/quotes/${quoteId}.json`)
    const data = await response.json()

    if (!response.ok) {
        // when fetching failed
        throw new Error(data.message || "Could not fetch quote detail")
    }

    const loadedQuote = {
        id: quoteId,
        ...data
    }

    return loadedQuote
}

export async function addQuote(quoteData) {
    // api fucntion to send and add quote data to firebase

    const response = await fetch(`${FIREBASE_DOMAIN}/quotes.json`, {
        method: 'post',
        body: JSON.stringify(quoteData),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const data = await response.json()

    // throw an error if request is unsuccessful
    if (!response.ok) {
        throw new Error(data.message || "Could not create quote, please try again")
    }

    // return is must as we expect return inside our custom useHttp hook
    return null
}