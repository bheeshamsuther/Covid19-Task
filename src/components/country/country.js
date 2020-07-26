import React from 'react';
import {View, Text, StyleSheet,ScrollView} from 'react-native';
import CountryPicker from './../countryPicker/countryPicker';
import Card from './../card/card';
import Chart from './../chart/chart'
const axios = require('axios');

class Country extends React.Component {
  constructor() {
    super();
    this.state = {

        data: [
          {
            title: 'Confirmed Cases',
            backgroundColor: '#eb7434',
          },
          {
            title: 'Recovered Cases',
            backgroundColor: '#8ceb34',
          },
  
          {
            title: 'Deaths',
            backgroundColor: '#eb3434',
            
          },
        
        ],
 

      country: 'Pakistan',

  }
  
}
  async componentDidMount() {
    try {
      let {data} = this.state;
      const getData = await axios.get(`https://covid19.mathdro.id/api//countries/Pakistan`);
      data[0].number = getData.data.confirmed.value;
      data[1].number = getData.data.deaths.value;
      data[2].number = getData.data.recovered.value;

      this.setState({
        data,
      });
    } catch (err) {
      alert(err);
    }
  }
  ChangeCounrty = async (country) => {
    try {
      let {data} = this.state;
      const getData = await axios.get(`https://covid19.mathdro.id/api//countries/${country}`);
      data[0].number = getData.data.confirmed.value;
      data[1].number = getData.data.deaths.value;
      data[2].number = getData.data.recovered.value;

      this.setState({
        data,
      });
    } catch (err) {
      alert(err);
    }
  };
  render() {
    let {data} = this.state;

    return (
      <ScrollView>
      <View>
        <CountryPicker ChangeCounrty={this.ChangeCounrty} />
        <View style={styles.card}>
          <Text style={styles.total}>
            Total Detail 
          </Text>
          {data &&
            data.map((val, i) => {
              return (
                <Card data={val} key={i} dataObj={this.state.dataObj} />
              );
            })}
          <View style={styles.chart_View}>
            <Chart
            confirmed = {this.state.data[0].number}
            deaths = {this.state.data[1].number}
            recovered = {this.state.data[2].number}
            />
          </View>
        </View>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'column',
    padding: 20,
    marginBottom: 50,
  },
  total: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#B80E17',
    marginTop: 10,
    marginBottom: 20,
  },
  chart_View : {
    borderWidth : 2,
    alignSelf : 'center',
    borderRadius : 10,
  }
});

export default Country;