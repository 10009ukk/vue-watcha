import axios from "axios";

const apiClient = axios.create({
    baseURL: `https://yts.mx/api/v2/`,
    withCredentials: false,
});
  
function getHighRating() {
  return apiClient.get("/list_movies.json?limit=10&minimum_rating=7&sort_by=year");
}

function getRomance() {
    return apiClient.get("/list_movies.json?limit=10&genre=romance&sort_by=year");
}

function getThriller() {
    return apiClient.get("/list_movies.json?limit=10&genre=thriller&sort_by=year");
}

function getAnimation() {
    return apiClient.get("/list_movies.json?limit=10&genre=animation&sort_by=year");
}
export default {
    getGenres() {
        return axios.all([getHighRating(), getRomance(), getThriller(), getAnimation()])
    }
};


//https://yts.mx/api/v2/list_movies.json?limit=10&${slide.path}&sort_by=year
//https://yts.mx/api/v2/movie_details.json?movie_id=${id}

const navList = [{
    title : "High Rating",
    path: "minimum_rating=7"
  }, {
    title : "Romance",
    path: "genre=romance"
  }, {
    title : "Thriller",
    path: "genre=thriller"
  }, {
    title : "Animation",
    path: "genre=animation"
}]