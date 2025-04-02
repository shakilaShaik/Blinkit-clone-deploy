
import Axios from "./Axios"
import SummaryApi from "../common/SummaryApi"
const fetchUserDetails = async () => {
    try {
        const response = await Axios({
            ...SummaryApi.user_details,
        })
        return response.data

    }
    catch (error) {
    }
}
export default fetchUserDetails