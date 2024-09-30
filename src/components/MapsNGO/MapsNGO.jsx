import './MapsNGO.css'

const MapsNGO = (props) => {

    return (
        <div className='MapsNGO'>
            <figure>
                <img src={props.picture} alt={props.name} />
                <h1>{props.name}</h1>
            </figure>
            <p>{props.description}</p>
            <button onClick={() => props.func()}>
                Ir para o local
            </button>
        </div>
    );
};

export default MapsNGO