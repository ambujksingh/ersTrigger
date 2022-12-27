const axios = require('axios');
exports.initiateTrigger = async (url) => {
    try {
        let response;
        response = await axios.post(url, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return response
    } catch (error) {
        console.log(error);
        throw error

    }

}