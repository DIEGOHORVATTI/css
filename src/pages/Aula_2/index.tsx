import React from 'react'
import styled from 'styled-components'
import { colors } from '@G.styles/default-styles'

export const BoxPai = styled.div`
  .row {
    flex-direction: row;
  }
  .row-reverse {
    flex-direction: row-reverse;
  }
  .column {
    flex-direction: column;
  }
  .column-reverse {
    flex-direction: column-reverse;
  }

  /* Flex Container */
  .container {
    max-width: 400px;
    margin: 0 auto;
    display: flex;
    border: 1px solid ${colors.danger};
  }
  /* Flex Item */
  .item {
    /* O flex: 1; é necessário para que cada item se expanda ocupando o tamanho máximo do container. */
    flex: 1;
    margin: 5px;
    background: ${colors.danger};
    text-align: center;
    font-size: 1.5em;
  }

  h1 {
    text-align: center;
    margin: 20px 0 0 0;
    font-size: 1.25em;
    font-weight: normal;
  }

  body {
    font-family: monospace;
    color: #333;
  }
`

const Aula_2 = () => {
  return (
    <BoxPai>
      <p>
        Define a direção dos flex itens. Por padrão ele é row (linha), por isso
        quando o display: flex; é adicionado, os elementos ficam em linha, um do
        lado do outro.
      </p>
      <p>
        A mudança de row para column geralmente acontece quando estamos
        definindo os estilos em media queries para o mobile. Assim você garante
        que o conteúdo seja apresentado em coluna única.
      </p>
      <br />
      <p>
        flex-direction: row;
        <br />
        Os itens ficam em linha
        <br />
        <br />
        flex-direction: row-reverse;
        <br />
        Os itens ficam em linha reversa, ou seja 3, 2, 1.
        <br />
        <br />
        flex-direction: column;
        <br /> Os itens ficam em uma única coluna, um embaixo do outro.
        <br />
        <br />
        flex-direction: column-reverse;
        <br /> Os itens ficam em uma única coluna, um embaixo do outro, porém em
        ordem reversa: 3, 2 e 1.
      </p>
      <h1>flex-direction: row;</h1>
      <section className="container row">
        <div className="item">1</div>
        <div className="item">2</div>
        <div className="item">3</div>
        <div className="item">4</div>
      </section>

      <h1>flex-direction: row-reverse;</h1>
      <section className="container row-reverse">
        <div className="item">1</div>
        <div className="item">2</div>
        <div className="item">3</div>
      </section>

      <h1>flex-direction: column;</h1>
      <section className="container column">
        <div className="item">1</div>
        <div className="item">2</div>
        <div className="item">3</div>
      </section>

      <h1>flex-direction: column-reverse;</h1>
      <section className="container column-reverse">
        <div className="item">1</div>
        <div className="item">2</div>
        <div className="item">3</div>
      </section>
    </BoxPai>
  )
}

export default Aula_2
