import axios from "axios"
import BASE_URL from "../../env";

const getNewAlbum = async()=>{
    try {
        const result  = axios.get(`${BASE_URL}/albums/new`)
        return result
    } catch (error) {
        console.log(error);
        
    }
}
export default getNewAlbum