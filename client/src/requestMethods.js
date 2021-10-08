import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNDJlNWZhZDNiNDUxZjJmMmNlMTgxYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMzY4OTMwOSwiZXhwIjoxNjMzOTQ4NTA5fQ.ccjAWaPdUGCS12u-oOppNOqaSBJGxTvoisekzyQzUCI"
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).currentUser
//     .accessToken || '';

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
