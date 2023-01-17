import React from 'react'
import { ItemContainer } from './styles';

 const ItemRepo = () => {
  return (
    <ItemContainer>
      <h3>Elisberto</h3>
      <p>Junior</p>
      <a href='#'>Ver repositorio</a> <br/>
      <a href='#' className='remove'>Remover</a>
      <hr />
    </ItemContainer>
  )
}

export default ItemRepo;