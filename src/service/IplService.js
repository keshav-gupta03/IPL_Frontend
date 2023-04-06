import axios from "axios";
const BASE_URL="http://localhost:8080/ipl/";
class IplService{
     getAllTeams() {
        return axios.get(BASE_URL+"teams");
    }
     getTeamDetails(teamName){

        return  axios.get(BASE_URL+"teams/"+teamName);
    }
    getAllMatchesForTeamBetweenDate(teamName, year){
        return axios.get(BASE_URL+"teams/"+teamName+"/matches?year="+year);
    }
}
export default new IplService();