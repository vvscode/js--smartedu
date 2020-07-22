import axios from "axios";

const API_BASE = "https://django-smartedu.herokuapp.com/api";

export const getCourses = () =>
  axios.get(`${API_BASE}/courses/`).then((response) => response.data);

export const getCourse = (id) =>
  axios.get(`${API_BASE}/courses/${id}`).then((response) => response.data);

export const getGroup = (id) =>
  axios.get(`${API_BASE}/group/${id}`).then((response) => response.data);

export const sendApplication = (applicationDetails) =>
  axios
    .post(`${API_BASE}/application`, applicationDetails)
    .then((response) => response.data);
