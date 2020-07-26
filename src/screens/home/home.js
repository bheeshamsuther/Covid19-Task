import React, {Component} from 'react';
import {View,Text,StyleSheet, ScrollView,Image} from 'react-native';
import Card from './../../components/card/card';
import Country from './../../components/country/country';
import Chart from './../../components/chart/chart'
const axios = require('axios');


export default class Home extends Component {
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
    };
  }


  async componentDidMount() {
    try {
      let {data} = this.state;
      const getData = await axios.get('https://covid19.mathdro.id/api');
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

  render() {
    let {data} = this.state;
    return (
     
      <View style={styles.container}>
          <ScrollView>
        <Image
        style={styles.tinyLogo}
        source={require('./../../images/covid-19-696x321.png')}
      />
          <View style={styles.headingContainer}>
            <Text style={styles.headerText}>Covid-19</Text>
            <Text style={styles.para}>Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.
            Protect yourself and others around you by knowing the facts and taking appropriate precautions</Text>
          </View>
          <Text style={styles.detail}>All Detail</Text>
          {data &&
            data.map((val, i) => {
              return (
                <Card data={val} key={i} dataObj={this.state.dataObj} />
              );
            })}
            <View style={styles.Chart_View}>
           <Chart 
           confirmed = {this.state.data[0].number}
            deaths = {this.state.data[1].number}
              recovered = {this.state.data[2].number}
          
          
           />
           </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding : 10,
  },
  headingContainer: {
    marginVertical: 20,
  },
  heading: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3465d9',
  },

  tinyLogo: {
    width : '100%',
    height : 150,
    borderRadius : 10,
  },
  detail : {
    fontSize : 24,
    fontWeight : 'bold',
    textAlign : 'center'
  },
  headerText : {
    fontSize : 24,
    fontWeight : 'bold',
    alignSelf : 'center',

  },
  para : {
    textAlign : "center",
    fontWeight : 'bold',
  },
  Chart_View : {
    borderWidth  :2,
    borderRadius : 10,

  }
});