import React, { useEffect, useState } from "react";
import axios from "axios";

function App () {
  const [data, setData] = useState('');

  const getData = async() => {
    const response = await axios.get('http://localhost:3001/');
    console.log(response.data)
    setData(response.data);
  }
  
  useEffect(()=>{
    getData()
  }, []);
  
  return (
    <div>
      hello!!
      {data}
    </div>
  )
}

export default App;