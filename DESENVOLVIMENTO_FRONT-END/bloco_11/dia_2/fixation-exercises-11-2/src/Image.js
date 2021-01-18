import React from 'react';

class Image extends React.Component {
  render() {
    return <img src={this.props.source} alt={this.props.alternativeText} />; /* Props são objetos que contém todos os dados passados como parâmetro na hora de chamar um componente. */
  }                                                                          /* Por exemplo aa props source e alternativeText foram passadas pra esse arquivo(Image) no arquivo APP */
}                                                                            /* Para recuperarmos sempre usaremos essa sintaxe "this.props.nomeDaProps" */

export default Image;