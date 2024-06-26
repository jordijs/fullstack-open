import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject);
  return request.then((response) => response.data);
};

const edit = (personId, editedObject) => {
  const request = axios.put(`${baseUrl}/${personId}`, editedObject);
  return request.then((response) => response.data);
};

const deletePerson = (personId) => {
  const request = axios.delete(`${baseUrl}/${personId}`);
  return request.then((response) => response.status);
};

export default { getAll, create, edit, deletePerson };
