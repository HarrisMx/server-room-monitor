import React from 'react'
import Header from '../Header';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {useSelector} from 'react-redux';

const Home = () => {

  const data = useSelector((state) => state.data.data);

  return (
    <div>
        <Header/>
        <Box component="main" sx={{ flexGrow: 1, p: 3, padding: 12 }}>
            {
              Object.keys(data.time_stamp).map((key, index) => {
                return (
                  <div key={index}>
                    <h6>
                      {data.time_stamp[key]}
                    </h6>
  
                    <hr />
                  </div>
                );
              })
            }
      </Box>
    </div>
  )
}

export default Home;
