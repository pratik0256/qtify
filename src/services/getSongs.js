import axios from "axios";
import BASE_URL from "../../env";

const getSongs = async () => {
    const result = await axios.get(`${BASE_URL}/songs`);
    return result.data
}
export default getSongs