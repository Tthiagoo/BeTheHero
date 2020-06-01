import React from 'react';
/**
 * Propriedades são com os atributos em html, eles vem como parametro na funcção;
 * Para encaixar expressões js puras é utilizado as chaves;
 * Children é utilizado para pegar todo o conteudo de dentro do componente, é decladrado: props.children;
 * É interessante dizer nos parametros atraves da chave todos as propriedades;
 */
export default function Header({children}){ 
    return(
        <header>
            <h1>{children}</h1> 
        </header>
    );
}