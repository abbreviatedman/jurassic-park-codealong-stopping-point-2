import DinoCard from "./DinoCard";
import species from '../data/species'

const Park = (props) => {
  // const dinosToDisplay = [];
  // props.dinos.forEach((dino) => dinosToDisplay.push(<DinoCard dino={dino} />))
  const dinosToDisplay = props.dinos.map((dino) => {
    return <DinoCard dino={dino} />
  })
    

  return (
    <div className="dino-grid">
      {dinosToDisplay}
    </div>
  )
}

export default Park;