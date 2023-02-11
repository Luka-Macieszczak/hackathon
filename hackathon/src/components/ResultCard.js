import '../App.css';

const ResultCard = (props) => {
    return(
        <div className="result">
            <img src={props.url} />
            <div className='result-info'>
                <h4>{props.name}</h4>
                <h6>{props.price}</h6>
            </div>
        </div>
    )
}

export default ResultCard;