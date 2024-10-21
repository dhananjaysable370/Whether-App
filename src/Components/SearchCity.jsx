import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
function SearchCity() {
  return (
    <div className="flex my-3 justify-center items-center h-80 w-80 border border-teal-400 text-white">
          <form >
              <div className='my-5 text-white'>
                  <TextField id="standard-basic" label="Standard" variant="Search" className='' /><br/>
              </div>
              <div className='my-5 flex items-center justify-center'>
                  <Button variant="contained">Contained</Button>
              </div>
      </form>
    </div>
  )
}

export default SearchCity
