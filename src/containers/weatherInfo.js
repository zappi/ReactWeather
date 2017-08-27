import React from 'react';
import { connect } from 'react-redux';

import Header from '../components/header';

class WeatherInfo extends React.Component {


  showWeather(data) {
    //Remove this console.log at some point
    console.log(data);

    const temp = data.list.map(weather => weather.main.temp-273);

    return (

      <div key={data.city.name}>
      <Header cityName={data.city.name} temperature={temp[0]}/>
      </div>
      //<h3 key={data.city.name}> {data.city.name} and temperature {data.list[0].main.temp} Kelvins</h3>
    );
  }

  render() {
    return (
      <div>
        {this.props.weatherFetcher.map(this.showWeather)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    weatherFetcher: state.weatherFetcher
  };
}

export default connect(mapStateToProps)(WeatherInfo);
