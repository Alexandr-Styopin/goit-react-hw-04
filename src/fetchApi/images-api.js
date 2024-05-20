import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export default async function fetchImagesColection(queryValue) {
  console.log(queryValue);
  const response = await axios.get("/search/photos", {
    params: {
      client_id: "1dxvFNSpCXqeoMcwr9pG6-n2B55oRWQN6pcZ8ZL3iOs",
      query: queryValue,
      page: 2,
      per_page: 10,
    },
  });

  return response.data.results;
}
