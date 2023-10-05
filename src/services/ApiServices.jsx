import axios from "axios";


//export const URL = "https://vibes.cyclic.app/";
export const URL = "http://localhost:3005/";
export const TOKEN_KEY = "posts_token";


export const doApiGet = async (_url) => {

    const resp = await axios({
        url: _url,
        headers: {
            "x-api-key": localStorage[TOKEN_KEY]
        }
    })
    return resp.data;


}

export const doApiMethod = async (_url, _method, _body) => {
        const resp = await axios({
            url: _url,
            method: _method,
            data: _body,
            headers: {
                "x-api-key": localStorage[TOKEN_KEY]
            }
        })
        return resp.data;
}






