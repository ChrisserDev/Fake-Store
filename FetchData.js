import { useEffect, useState } from "react";

function FetchData(){
  const [item, setItems] = useState([])

  useEffect (() => {
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then((data)=> setItems(data))
    .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <h3>{item.map(item => item.title)}</h3>
    </div>
  )
}

export default FetchData