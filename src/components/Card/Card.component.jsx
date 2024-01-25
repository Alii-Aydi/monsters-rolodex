import './card.styles.css'

const Card = (props) => (
    <div className="card-container">
        <img src={props.src} alt={props.alt} />
        <h2>{props.h2}</h2>
        <p>{props.p}</p>
    </div>
)

export default Card