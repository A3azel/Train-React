import axios from "axios";

const DEFAULT_TAG_API_URL = 'http://localhost:8080/api/v1/queue/all';
class TagService{

    getTag(){
        return axios.get(DEFAULT_TAG_API_URL);
    }

}

export default new TagService();