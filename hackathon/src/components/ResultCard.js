import '../App.css';

const ResultCard = (props) => {
    return(
        <div className="card-container">
            <img src={props.url} />
            <div>{props.name}</div>
        </div>
    )
}

export default ResultCard;