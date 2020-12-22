import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import axios from "axios";

function GoogleChart() {
  
  const [data, setData] = useState([]);
  
  //Component did mount
  useEffect(()=>{
    axios.get("/api/dailystat/student/"+parseInt(JSON.parse(localStorage.getItem("user")).id,10))
    .then((result)=>{
       const formattedData = result.data.map((item) => {
         return [ new Date(item.dateofSurvey) , item.mood ];
       });
       setData([["Date", "Mood"], ...formattedData]);
    })
    .catch((err)=>{
      console.log(err);
    });
  },[]);
 
  console.log(data);

    return (
      <Chart
        width={'600px'}
        height={'400px'}
        chartType="LineChart"
        loader={<div>Loading Chart</div>}
        data={data}
        options={{
          hAxis: {
            title: 'Date and Time axis',
          },
          vAxis: {
            title: 'Mood scales 1 = Hopeless - 5 = Fantastic',
          },
          series: {
            1: { curveType: 'function' },
          },
        }}
        rootProps={{ 'data-testid': '2' }}
    />
    );
}

export default GoogleChart;