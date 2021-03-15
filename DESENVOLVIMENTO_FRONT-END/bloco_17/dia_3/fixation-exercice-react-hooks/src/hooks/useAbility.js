import { useState, useEffect } from 'react';

const useAbility = () => { // Para criar um hook setamos uma função e fazemos dentro dela a lógica que precisamos.
  const [URL, setURL] = useState('') // Usamos o useState para guardarmos os valores que precisamos.
  const [pokemonAbilities, setPokemonAbilities] = useState([])

  useEffect(async () => { // Chamamos o useEffect para criar um novo hook.
    if (URL !== '') {
      const results = await fetch(URL)
        .then(response => response.json())
        .then(data => data.abilities);

      const abilities = results.map(({ ability }) => ability.name)
      setPokemonAbilities(abilities) 
    }
  }, [URL]) // Passamos um segundo parametro para atualizar a função sempre que esse parametro for atualizado // componentShouldUpdated.

  return [pokemonAbilities, setURL] //E retornamos os valores que precisamos receber de input.
}

export default useAbility;