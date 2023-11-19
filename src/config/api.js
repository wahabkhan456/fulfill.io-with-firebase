import axios from "axios";

// base axios instance
export default axios.create({
  baseURL: process.env.REACT_APP_API,
});
