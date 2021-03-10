import { createContext } from 'react'; // Chamamos a função que cria o context

const ISSContext = createContext(); // Criamos o context separado pra quanndo precisar chamar o provider e o consumer importarmos do msm lugar.

export default ISSContext;