import axios from "axios";

const API_BASE = "https://django-smartedu.herokuapp.com/api";

export const getCourses = () =>
  axios.get(`${API_BASE}/courses/`).then((response) => response.data);
