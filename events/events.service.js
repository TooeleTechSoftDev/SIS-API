const fetch = require('node-fetch') 
module.exports = { getListByUserIdCb }

async function fetchBacon(bacon) {
    try {
        const response = await fetch("https://baconipsum.com/api/?type=meat-and-filler?sentences=" + bacon + "&start-with-lorem=1")
        const json = await response.json()

        return json
    }
    catch(error) {
        console.log("Error ", error)
    }
};



async function getListByUserIdCb(userId) {
    let randIds = [
        '1',
        '2',
        '3',
        '4',
        '5'
    ]


    let results = randIds.map(async (item) => {
        let subject = await fetchBacon(1)
        let body = await fetchBacon(5)


        return {
            id: item,
            from: {
                name:"Name Here", 

                userid:"Id Here"

            } , 
            to: {
                name:"Name Here",

                userid: userId,
            
            },
            content: {
                subject: subject,

                body: body,

                timestamp: Date.now()
            },
            time: {
                sent:"",

                delivered:"",
                
                read:"",
            },
            action: {
                subject: "Whatever is needed here"
            }
        }
    }) 
    return await Promise.all(results)
}
