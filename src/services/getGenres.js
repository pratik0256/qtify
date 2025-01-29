import axios from "axios";
import BASE_URL from "../../env";

const getGenres = async () => {
    try {
        const result = await axios.get(`${BASE_URL}/genres`)
        return result.data
    } catch (error) {
        console.log(error);
    }
}
export default getGenres