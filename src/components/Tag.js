

import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
//api key ko mangana ka liy .even wla mai se ye lihkhan padhega

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;



function Tag() {
const[tag,setTag]= useState("");
// console.log("API KEY:", API_KEY);
const[loading,setLoading]=useState(false);
  const [gif, setGif] = useState('');


 
 //api call karna ka liya sabse phele asunc function ban lenga
  async function fetchData() {
    setLoading(true);
    //ab humne api key ka use karega
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
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

  function changeHandler(event)
  {
setTag(event.target.value);
  }




    return (
        <div className='w-1/2  bg-blue-700  mx-auto rounded-lg border
     border-black flex flex-col items-center gap-y-5 mt-[15px]'>
            <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>Random Gif</h1>
{
  loading ? (<Spinner></Spinner>): (<img src={gif} width="450"></img>)
}
<input type="text" onChange={changeHandler} value={tag}
className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center'></input>
<button onClick={clickhandler} className='w-10/12 bg-white text-lg py-2 rounded-lg mb-[20px]'>GENRATE</button>
        </div>
    )
}

export default Tag