const DinoCard = (props) => {
  return (
    <div className="dino-card">
      <p>Dinosaur: {props.name}</p>
      <img src={props.image} alt={props.name} />
    </div>
  )
}

export default DinoCard;