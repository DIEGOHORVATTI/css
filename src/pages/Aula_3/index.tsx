import React from 'react'
import styled from 'styled-components'
import { colors } from '@G.styles/default-styles'

export const BoxPai = styled.div`
  .nowrap {
    flex-wrap: nowrap;
  }
  .wrap {
    flex-wrap: wrap;
  }
  .wrap-reverse {
    flex-wrap: wrap-reverse;
  }

  /* Flex Container */
  .container {
    max-width: 360px;
    margin: 0 auto;
    display: flex;
    border: 1px solid ${colors.white};
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
`

const Aula_3 = () => {
  return (
    <BoxPai>
      <h2>3 • flex-wrap</h2>
      <p>
        Define se os itens devem quebrar ou não a linha. Por padrão eles não
        quebram linha, isso faz com que os flex itens sejam compactados além do
        limite do conteúdo.
      </p>
      <p>
        Essa é geralmente uma propriedade que é quase sempre definida como
        flex-wrap: wrap; Pois assim quando um dos flex itens atinge o limite do
        conteúdo, o último item passa para a coluna debaixo e assim por diante.
      </p>
      <br />
      <p>
        flex-wrap: nowrap;
        <br />
        Valor padrão, não permite a quebra de linha.
        <br />
        <br />
        flex-wrap: wrap;
        <br />
        Quebra a linha assim que um dos flex itens não puder mais ser
        compactado.
        <br />
        <br />
        flex-wrap: wrap-reverse;
        <br /> Quebra a linha assim que um dos flex itens não puder mais ser
        compactado. A quebra é na direção contrária, ou seja para a linha acima.
      </p>

      <h1>flex-wrap: nowrap;</h1>
      <section className="container nowrap">
        {/* O nome grudado foi necessário pois eu preciso definir 
        um conteúdo que não possa ser quebrado. 
        Como uma palavra ou uma imagem. 
        Se fosse uma frase, ele quebraria as linhas da frase antes 
        de ultrapassar o container. */}
        <div className="item">TesteDoItem1</div>
        <div className="item">TesteDoItem2</div>
        <div className="item">TesteDoItem3</div>
      </section>

      <h1>flex-wrap: wrap;</h1>
      <section className="container wrap">
        <div className="item">TesteDoItem1</div>
        <div className="item">TesteDoItem2</div>
        <div className="item">TesteDoItem3</div>
      </section>

      <h1>flex-wrap: wrap-reverse;</h1>
      <section className="container wrap-reverse">
        <div className="item">TesteDoItem1</div>
        <div className="item">TesteDoItem2</div>
        <div className="item">TesteDoItem3</div>
      </section>
      <br />
    </BoxPai>
  )
}

export default Aula_3
