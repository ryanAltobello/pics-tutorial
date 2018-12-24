import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 7e6e0d466563e6251a97c32442c68a6069017ae00b214030f2d374685d835dbf"
  }
});
