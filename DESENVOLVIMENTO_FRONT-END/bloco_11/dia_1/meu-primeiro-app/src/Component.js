import React, { Component } from 'react'; /* Sempre começar importando o react se for um componente de classe, se for funcional não precisa */

class PersonalInfo extends Component {  /* Assim se declara uma classe no React */ /* O nome das classes e funções devem começar com letra maiuscula */
    render() {
        return <div>
            <h1>Raul Afonso</h1>
            <p>Um jovem buscando conhecimento sobre programação pra finalmente entrar no mercado de trabalho.</p>
        </div>
    };
}

export default PersonalInfo; /* Sintaxe para exportar os componentes e usar e outros componentes */
