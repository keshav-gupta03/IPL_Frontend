import axios from "axios";
const BASE_URL="http://localhost:8080/ipl/";
class IplService{
     getAllTeams() {
        return axios.get(BASE_URL+"teams");
    }
     getTeamDetails(teamName){

        return  axios.get(BASE_URL+"teams/"+teamName);
    }
    getAllMatches(){
        return axios.get(BASE_URL+"matches");
    }
}
export default new IplService();