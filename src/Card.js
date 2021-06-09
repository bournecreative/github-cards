import "./card.css"

function Card(props) {
    return (
        <div className="card">
            <img className="card__img" src={props.avatar_url} alt='' />
            <div className="card__details">
                <h2 className="card__name">{props.name}</h2>
                <h3 className="card__company">{props.company}</h3>
            </div>
        </div>
    )
}

export default Card;