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

export const getMyInfo = () =>
  axios.get(`${API_BASE}/users/me/info`).then((response) => response.data);

export const getUserCourses = () =>
  axios.get(`${API_BASE}/users/me/courses/`).then((response) => response.data);

export const regenerateToken = (currentToken) =>
  axios
    .post(`${API_BASE}/users/me/regenerate-token`, currentToken)
    .then((response) => response.data);
