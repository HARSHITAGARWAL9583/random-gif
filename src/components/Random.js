
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
//api key ko mangana ka liy .even wla mai se ye lihkhan padhega

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;


function Random() {

  // console.log("API KEY:", API_KEY);
const[loading,setLoading]=useState(false);
  const [gif, setGif] = useState('');


 
 //api call karna ka liya sabse phele asunc function ban lenga
  async function fetchData() {
    setLoading(true);
    //ab humne api key ka use karega
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const output = await axios.get(url);
    const imageSource = output.data.data.images.downsized_large.url;
    setGif(imageSource);
    setLoading(false);
  }
  useEffect(() => {
    fetchData()
  }, [])

   function clickhandler() {
 fetchData();
  }
  return (


    <div className='w-1/2  bg-green-500  rounded-lg border
     border-black flex flex-col items-center gap-y-5 mt-[15px]'>
      <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>A Random GIF</h1>
{
  loading ? (<Spinner></Spinner>): (<img src={gif} width="450"></img>)
}
      
      <button className='w-10/12 bg-white text-lg py-2 rounded-lg mb-[20px]' onClick={clickhandler}>GENTRATE</button>
    </div>
  )
}

export default Random;