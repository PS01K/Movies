import { axios } from "axios";

export async function fetchDataFromApi(url, params) {
  try {
    const response = await axios.get("https://api.themoviedb.org/3" + url, {
      params,
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNWIxY2NlMDhjMmExYWNlNTZmYzYxOTFlZGI4ODNhYSIsIm5iZiI6MTczODg2NDA4NS4yMjgsInN1YiI6IjY3YTRmNWQ1YWNhOTFkYTRiYTg1Yzk2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.45TkegJlvdy8Btg3L7ZyRncbl4ACRXrn00eBm-IFv1k"
      }
    });
    return response.data;
  } catch (err) {
    console.log(err);
    return err;
  }
}