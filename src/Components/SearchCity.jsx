import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import { useState } from 'react';
function SearchCity() {
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
                  <TextField label="Standard" onChange={handleChange} variant="standard" /><br/>
              </div>
              <div className='my-5 flex items-center justify-center'>
                  <Button variant="contained" type='submit'>Contained</Button>
              </div>
      </form>
    </div>
  )
}

export default SearchCity
