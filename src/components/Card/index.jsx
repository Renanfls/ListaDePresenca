import './styles.css';

export function Card(props) {
    return(
        <div className="card">
            <strong>{props.name}</strong> {/* Pega o nome contido na propriedade `name` */}
            <small>{props.time}</small> {/* Pega o tempo contido na propriedade `time` */}
        </div>
    )
}
