import React from 'react';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th></th>
            <th>PRODUTO</th>
            <th>QTDE</th>
            <th>SUBTOTAL</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src="https://static.netshoes.com.br/produtos/tenis-mizuno-cometa/26/2FU-5849-026/2FU-5849-026_zoom1.jpg" alt="" />
            </td>
            <td>
              <strong>Nome do Tenis</strong>
              <span>R$ 129,90</span>
            </td>
            <td>
              <div>
                <button type='button'>
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
                </button>
                <input type="number" readOnly value={2} />
                <button type='button'>
                  <MdAddCircleOutline size={20} color="#7159c1" />
                </button>
              </div>
            </td>
            <td>
              <strong>R$ 258,80</strong>
            </td>
            <td>
              <button type='button'>
                <MdDelete size={20} color="#7159c1" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type='button'>Finalizar Pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>R$ 1.920,28</strong>
        </Total>
      </footer>
    </Container>
  )
}
