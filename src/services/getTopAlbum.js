import axios from "axios"
import BASE_URL from "../../env";

const getTopAlbum = async()=>{
    try {
        const result  = axios.get(`${BASE_URL}/albums/top`)
        return result
    } catch (error) {
        console.log(error);
        
    }
}
export default getTopAlbum