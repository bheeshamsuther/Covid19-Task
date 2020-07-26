import React from 'react'
import {View,Text} from 'react-native'
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
  import { Dimensions } from "react-native";
  class Chart extends React.Component{
      
      render(){
        const screenWidth = Dimensions.get("window").width;
        const data = [
            {
              name: "Confiremed",
              population: this.props.confirmed ? this.props.confirmed :0,
              color: "#eb7434",
              legendFontColor: "#7F7F7F",
              legendFontSize: 15
            },
            {
              name: "Deaths",
              population: this.props.deaths ? this.props.deaths :0,
              color: "#eb3434",
              legendFontColor: "#7F7F7F",
              legendFontSize: 15
            },
            {
              name: "Recovered",
              population: this.props.recovered ? this.props.recovered :0,
              color: "#8ceb34",
              legendFontColor: "#7F7F7F",
              legendFontSize: 15
            },
           
          ];
          const chartConfig = {
            backgroundGradientFrom: "#1E2923",
            backgroundGradientFromOpacity: 0,
            backgroundGradientTo: "#08130D",
            backgroundGradientToOpacity: 0.5,
            color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
            strokeWidth: 2, // optional, default 3
            barPercentage: 0.5,
            useShadowColorFromDataset: false // optional
          };
        return(
            
<PieChart
  data={data}
  width={screenWidth}
  height={220}
  chartConfig={chartConfig}
  accessor="population"
  backgroundColor="transparent"
  paddingLeft="15"
  absolute
/>  
        )
    }
}

export default Chart