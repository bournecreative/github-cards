import Card from "./Card";

function CardList(props) {
    return (
        <div>
            {props.profiles.map((profile) => {
                return <Card key={profile.id} {...profile} />
            })}
        </div>
    )
}

export default CardList;