import React, { Component } from 'react';
import { connect } from 'react-redux';
import Marker from 'pigeon-marker'; // Biblioteca externa.
import Map from 'pigeon-maps'; // Biblioteca externa.
import latitudeImg from '../assets/latitude.svg';
import longitudeImg from '../assets/longitude.svg';
import { fetchISSLocation as fetchISSLocationThunk } from '../actions'; // Importamos a action Thunk.

const TWO_SECONDS = 2000;

class ISSLocation extends Component {
  componentDidMount() { // Assim que o componente for montado/ Lugar propício pra fazer o fetch.
    const { fetchISSLocation } = this.props; // Recuperamos o dispatch via props.
    this.timer = setInterval(() => { // Setamos um timer pra ficar disparando o dispatch de dois em dois segundos.
      fetchISSLocation(); // Disparamos o dispatch com o Thunk.
    }, TWO_SECONDS);
  }

  componentWillUnmount() { 
    clearInterval(this.timer); // Limpamos o timer quando o compnente for desfeito.
  }

  render() {
    const { latitude, longitude } = this.props; // Recuperamos a localização pelas props vindas do mapStateToProps.

    return (
      <main>
        <div className="map">
          <Map // Configurações do mapa.
            center={ [0, 0] }
            defaultWidth={ 450 }
            height={ 450 }
            minZoom={ 1.5 }
            maxZoom={ 8 }
            zoom={ 1.5 }
          >
            <Marker anchor={ [latitude, longitude] } /> {/*Configurações do marcador*/}
          </Map>
        </div>
        <section className="lat-long-section">
          <div className="lat-long">
            <img
              className="lat-long-img"
              src={ latitudeImg }
              width={ 24 }
              height={ 24 }
              alt="latitude"
            />
            <span>{latitude}</span>
          </div>
          <div className="lat-long">
            <img
              className="lat-long-img"
              src={ longitudeImg }
              width={ 24 }
              height={ 24 }
              alt="longitude"
            />
            <span>{longitude}</span>
          </div>
        </section>
      </main>
    );
  }
}

const mapStateToProps = ({ issLocation: { latitude, longitude } }) => ({ // Aqui passamos a localização para as props
  latitude,
  longitude,
});

const mapDispatchToProps = (dispatch) => ({ // Aqui passamos o dispatch para as props
  fetchISSLocation: () => dispatch(
    fetchISSLocationThunk(),
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(ISSLocation);