import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import axios from 'axios';

function SearchCity() {

  const API_URL = "https://api.openweathermap.org/data/3.0/onecall";
  const API_KEY = "a2bd4bb81e517d2301aa82140a015d5f";

  let getWhetherInfo = async () => {
    const response = await axios.get(`${API_URL}`)
  }
    const [city, setCity] = useState("");
    const handleChange = (e) => {
        setCity(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(city);
    }
  return (
    <div className="flex my-3 justify-center items-center h-80 w-80 border border-teal-400  bg-zinc-800">
          <form onSubmit={handleSubmit}>
        <div className='my-5 text-white'>
            <TextField id="filled-basic" className='text-white' label="Search city" variant="filled" onChange={handleChange} /><br />
              </div>
              <div className='my-5 flex items-center justify-center'>
                  <Button variant="contained" type='submit'>Search</Button>
              </div>
      </form>
    </div>
  )
}

export default SearchCity
