import React, { Component } from 'react';
import Marker from 'pigeon-marker';
import Map from 'pigeon-maps';

import ISSContext from '../context/ISSContext'; // chamamos o context para podermos usar o consumer.

import latitudeImg from '../assets/latitude.svg';
import longitudeImg from '../assets/longitude.svg';
import loadingImg from '../assets/loading.svg';

const TWO_SECONDS = 2000;

class ISSLocation extends Component {
  componentDidMount() {
    const { fetchISSLocation } = this.context;
    this.timer = setInterval(() => {
      fetchISSLocation();
    }, TWO_SECONDS);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <ISSContext.Consumer> {/* O consumer recebe como children uma function, que recebe como parametros as info que vc quer do state global */}
        {({ latitude, longitude, isFetching }) => (
          <main>
            <div className="map">
              <Map
                center={ [0, 0] }
                defaultWidth={ 450 }
                height={ 450 }
                minZoom={ 1.5 }
                maxZoom={ 8 }
                zoom={ 1.5 }
              >
                <Marker anchor={ [latitude, longitude] } />
              </Map>
            </div>
            {isFetching
              ? (
                <img
                  src={ loadingImg }
                  alt="loading animation"
                  width={ 32 }
                  height={ 32 }
                />
              )
              : (
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
              )}
          </main>
        )}
      </ISSContext.Consumer>
    );
  }
}

ISSLocation.contextType = ISSContext;

export default ISSLocation;