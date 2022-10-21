export const pollingAPI = async () => {
    let result = null;
    try {
        const response = await fetch(`https://hn.algolia.com/api/v1/search_by_date?tags=story&page=0`);
        // console.log("response", response);
        const JSONResponse = await response.json();
        // console.log("JSONResponse", JSONResponse);
        // console.log("JSONResponse.hits", JSONResponse.hits);
        if(JSONResponse) {
            result = JSONResponse.hits;
        } else {
            console.log('Error in getting JSONResponse');
        }        
    } catch (error) {
        console.log(error);        
    }
    return result;
}