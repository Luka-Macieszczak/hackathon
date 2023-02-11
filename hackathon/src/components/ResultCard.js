import '../App.css';

const ResultCard = (props) => {
    const onClickHandler = () => {
        window.open(props.url, '_blank').focus();
    }

    return(
        <div className="result">
            <img src={props.image} />
            <div className='result-info'>
                <h4>{props.name}</h4>
                <h5>{props.price}</h5>
                <button onClick={() => onClickHandler()} className='btn'>See Listing</button>
            </div>
        </div>
    )
}

export default ResultCard;