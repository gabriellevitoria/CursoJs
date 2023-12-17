const elements = [

    {tag : 'p', texto: 'Frase 1'},
    {tag : 'div', texto: 'Frase 2'},
    {tag : 'footer', texto: 'Frase 3'},
    {tag : 'section', texto: 'Frase 4'}
];

const container = document.querySelector('.container'); /* queremos adicionar o elemento dentro 
do container.
O AppendChild adiciona sempre no final do elemento escolhido, se utilizarmos o body será nele.
Como queremos no final do container, criamos essa variável e selecionamos a classe desejada.
No caso de classes, o query selector vai utilizar a primeira que encontrar com aquele nome, e no caso
temos apenas uma classe com esse nome.
*/

const div = document.createElement('div'); 
//criamos a div para adionar os elementos dentro dela apenas ela no html

for ( let i = 0; i < elements.length; i++) {

    const {tag, texto} = elements[i];
    const elemento = document.createElement(tag);
    elemento.textContent = texto;
    div.appendChild(elemento);

}

container.appendChild(div);



    /*if ( i === 0) {
        const {tag , texto } = p
        

        const paragrafo = document.createElement (tag);
        paragrafo.textContent = texto;
        document.body.appendChild(paragrafo);



    } else if (i === 1) {

        const {tag , texto } = div
        const div = document.createElement (tag);
        div.textContent = texto;
        document.body.appendChild(div);

        

    } else if (i === 2) {

        const {tag , texto } = footer
        const footer = document.createElement (tag);
        footer.textContent = texto;
        document.body.appendChild(footer);

        

    } else {

        const {tag , texto } = section
        const section = document.createElement (tag);
        section.textContent = texto;
        document.body.appendChild(section);

        

    }*/

