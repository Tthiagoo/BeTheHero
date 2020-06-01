/**
 * Conceitos:
 * * Propriedades: são como os atributos em html, eles vem como parametro na funcção;
 * * Imutabilidade: Os valores dos states nao podem ser alterados diretamente, deve ser criado um array para modificar seus valores
 * * Estados: São modificaçoes que um componente pode ter;
 *//*{useState}*/
//import Header from "./Header";
//Este arquivo é responsavel por renderizar os componentes
/**
 * Propriedades são com os atributos em html, eles vem como parametro na funcção;
 * Para encaixar expressões js puras é utilizado as chaves;
 * Children é utilizado para pegar todo o conteudo de dentro do componente, é decladrado: props.children;
 * É interessante dizer nos parametros atraves da chave todos as propriedades;
 */



 
import React  from "react";
import Routes from './routes';
import './global.css';


function App() {
  
  return (
    <Routes />
  );
}

export default App;







/*function App() {
  const [counter, setCounter] = useState(0); 
  function incriment(){
    setCounter(counter + 1);
  }
  return (
    <div>
    <Header>Contadooor: {counter}</Header>
    <button onClick={incriment}>Incrementar</button>

    </div>
  );
}*/