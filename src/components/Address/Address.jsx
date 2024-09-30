import './Address.css'

const Address = (props) => {

    return (
        <div className="Address">
            <div>
                <img src={props.img} alt="" />
                <h1>{props.name}</h1>
            </div>
            <h2>{props.city}, {props.state}</h2>
            <p>{props.street}, {props.num}</p>
            <p>{props.neighborhood}</p>
            <div>
                <button onClick={() => props.func()}>
                    Ir para o local
                </button>
            </div>
        </div>
    );
};

export default Address