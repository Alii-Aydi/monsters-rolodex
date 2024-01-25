import './card-list.styles.css'
import Card from "../Card/Card.component";

const CardList = (props) => (
    <div className="card-list">
        {props.filterMonsters.map((u) => (
            <Card key={u.id} id={u.id} src={`https://robohash.org/${u.id}?set=set2&size=180x180`} alt="monster" h2={u.name} p={u.email}></Card>
        )
        )}
    </div>
)

export default CardList