import { useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [count, setCount] = useState(0);
  axios.get("https://api.themoviedb.org/3/movie/11", {
    headers: {
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNWIxY2NlMDhjMmExYWNlNTZmYzYxOTFlZGI4ODNhYSIsIm5iZiI6MTczODg2NDA4NS4yMjgsInN1YiI6IjY3YTRmNWQ1YWNhOTFkYTRiYTg1Yzk2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.45TkegJlvdy8Btg3L7ZyRncbl4ACRXrn00eBm-IFv1k"
    }
  })

  return (
    <>
      
    </>
  )
}

export default App
