import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-mizuno-cometa/26/2FU-5849-026/2FU-5849-026_zoom1.jpg" alt="Tenis" />
        <strong>Nome do tenis</strong>
        <span>R$ 129,90</span>

        <button type='button'>
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-mizuno-cometa/26/2FU-5849-026/2FU-5849-026_zoom1.jpg" alt="Tenis" />
        <strong>Nome do tenis</strong>
        <span>R$ 129,90</span>

        <button type='button'>
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-mizuno-cometa/26/2FU-5849-026/2FU-5849-026_zoom1.jpg" alt="Tenis" />
        <strong>Nome do tenis</strong>
        <span>R$ 129,90</span>

        <button type='button'>
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-mizuno-cometa/26/2FU-5849-026/2FU-5849-026_zoom1.jpg" alt="Tenis" />
        <strong>Nome do tenis</strong>
        <span>R$ 129,90</span>

        <button type='button'>
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>

    
  );
}
