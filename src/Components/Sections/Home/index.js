import React from 'react'
import Header from '../Header';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {useSelector} from 'react-redux';
import {updateData, setCurrentData, setGraphValues} from '../../../redux/dataSlice';
import CanvasJSReact from '../../canvasjs/canvasjs.react';
import Grid from '@mui/material/Grid';

const Home = () => {
  
  const graphData = useSelector((state) => state.data.graphValues);
  //const data = useSelector((state) => state.data.data);
  const selectedSource = useSelector((state) => state.data.currenData);

  /**Initialize Graph components**/

  const CanvasJS = CanvasJSReact.CanvasJS;
  const CanvasJSChart = CanvasJSReact.CanvasJSChart;
  const limit = graphData.length/2;
  const data = [];
  const dataSeries = { type: "line" };
  const dataPoints = graphData;
  dataSeries.dataPoints = dataPoints;
  data.push(dataSeries);

  const spanStyle = {
    position:'absolute', 
    top: '10px',
    fontSize: '20px', 
    fontWeight: 'bold', 
    backgroundColor: '#d85757',
    padding: '0px 4px',
    color: '#ffffff'
  }

  const options = {
    zoomEnabled: true,
    animationEnabled: true,
    exportEnabled: true,
    title: {
      text: selectedSource
    },
    data: data  // random data
  }


  /**doughnut graph plot**/
    console.log('graphData.at(-1).y', graphData.at(-1).y);
    const doughnutOptions = {
      animationEnabled: true,
      title: {
        text: "Latest Value"
      },
      subtitles: [{
        text: graphData.at(-1).y,
        verticalAlign: "center",
        fontSize: 24,
        dockInsidePlotArea: true
      }],
      data: [{
        type: "doughnut",
        showInLegend: false,
        indexLabel: "{name}: {y}",
        yValueFormatString: "#,###'%'",
        dataPoints: [
          { name: "Value", y: 5 },
          /* { name: "Very Unsatisfied", y: 31 },
          { name: "Very Satisfied", y: 40 },
          { name: "Satisfied", y: 17 },
          { name: "Neutral", y: 7 } */
        ]
      }]
    }

  return (
    <div>
        <Header/>
        
        <Box component="main" sx={{ flexGrow: 1, p: 10, padding: 12 }} xs={{padding:0}}>
          <Typography paragraph>
            {'Click and Drag region to zoom-in'}
          </Typography>

          <Grid container spacing={2} sx={{p: 10}}>
            <Grid item xs={12} md={4}>
              <CanvasJSChart options = {doughnutOptions} /* onRef={ref => this.chart = ref} */ />
            </Grid>
            <Grid item xs={12} md={8}>
              <CanvasJSChart options = {options} />
            </Grid>
          </Grid>
      </Box>
    </div>
  )
}

export default Home;
