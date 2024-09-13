import React from "react";
import "./Gallery.css"

const Gallery = ({ gallery }) => {
    const pictures = gallery?.pictures || [];

    return (
        <div className="Gallery">
            {pictures.length > 0 ? (
                pictures.map((picture) => (
                    <img key={picture.id} src={picture.url} alt={`Imagem ${picture.id}`} />
                ))
            ) : (
                <p>Não há imagens na galeria.</p>
            )}
        </div>
    );
};

export default Gallery;
