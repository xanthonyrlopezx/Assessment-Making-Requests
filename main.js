const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";
const url = "http://localhost:5000/constellations";


function index() {
  axios
  .get(url)
  .then((response) =>{
    result = response.data;
    console.log(result);
  })
}

function create(body) {
  axios
  .post(url, body)
  .then((response =>{
    console.log(response.data);
  }))
}

function show(id) {
  axios
  .get(`${BASE_URL}/constellations/${id}`)
  .then((response => {
    console.log(response.data)
  }))
}

function update(id, body) {
  axios
  .put(`${BASE_URL}/constellations/${id}`, body)
  .then((response => {
    console.log(response.data)
  }))
}

function destroy(id) {
  axios
  .delete(`${BASE_URL}/constellations/${id}`)
  .then((response => 
    console.log({})))
}

module.exports = {
  index,
  create,
  show,
  update,
  destroy,
};
