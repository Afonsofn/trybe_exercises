import { useEffect } from 'react'; // hook customizado para executar uma função específica em um tempo específico.

function useTimer(callback, interval) {
  useEffect(() => {
    const timer = setInterval(() => {
      callback();
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, []);
}

export default useTimer;
