import { ItemContainer } from "./styles"


const ItemRepo = ({ repo, handleRemoveRepo }) => {

const handleRemove = () => {
    handleRemoveRepo(repo.id)
}

  return (
    <ItemContainer onClick={handleRemove}>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <a href={repo.html_url} target="blank">Ver repositorio</a> <br/>
      <a href="#" className="remove">Remover</a>
      <hr/>
    </ItemContainer>
  )
}

export default ItemRepo