import React from 'react'
import styled from 'styled-components'
import { colors } from '@G.styles/default-styles'

export const BoxPai = styled.div`
  .container {
    max-width: 400px;
    margin: 0 auto;
    border: 1px solid ${colors.white};
  }

  /* Flex */
  .flex {
    display: flex;
  }

  .flex-wrap {
    flex-wrap: wrap;
  }

  .flex-item-1 {
    flex: 1;
  }

  /* Flex Item */
  .item {
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

const Aula_1 = () => {
  return (
    <BoxPai>
      <p>
        display: flex; Torna o elemento um flex container automaticamente
        transformando todos os seus filhos diretos em flex itens.{' '}
      </p>
      <h1>display: block</h1>
      <section className="container">
        <div className="item">1</div>
        <div className="item">2</div>
        <div className="item">3</div>
        <div className="item">4</div>
      </section>

      <h1>display: flex</h1>
      <section className="container flex">
        <div className="item">1</div>
        <div className="item">2</div>
        <div className="item">3</div>
        <div className="item">4</div>
      </section>

      <h1>display: flex</h1>
      <section className="container flex">
        <div className="item">Teste 1</div>
        <div className="item">Teste 2</div>
        <div className="item">Teste 3</div>
        <div className="item">Teste 4</div>
        <div className="item">Teste 5</div>
        <div className="item">Teste 6</div>
        <div className="item">Teste 7</div>
      </section>

      <h1>display: flex</h1>
      <section className="container flex flex-wrap">
        <div className="item">Teste 1</div>
        <div className="item">Teste 2</div>
        <div className="item">Teste 3</div>
        <div className="item">Teste 4</div>
        <div className="item">Teste 5</div>
        <div className="item">Teste 6</div>
        <div className="item">Teste 7</div>
      </section>

      <h1>display: flex // flex-item-1</h1>
      <section className="container flex">
        <div className="item flex-item-1">Teste 1</div>
        <div className="item flex-item-1">Teste 2</div>
        <div className="item flex-item-1">Teste 3</div>
      </section>
    </BoxPai>
  )
}

export default Aula_1
