import './MapsNGO.css'

const MapsNGO = (props) => {

    return (
        <div className="MapsNGO">
            <img src={props.img} alt="ong" />
            <div>
                <h2>{props.nome}</h2>
                <p>{props.descricao}</p>
            </div>
        </div>
    );
};

export default MapsNGO