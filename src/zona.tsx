

interface Propiedades{
    num_zona: number;  
    descrip: string;
    estado: boolean;
    lastOn: number;
}


function Zona({num_zona, descrip, estado, lastOn}: Propiedades) {
    return (

        <div className="card h-90" >
            <div className={ estado === true ? "card-body text-bg-primary" :  "card-body "} >
                <h5 className="card-title">Zona {num_zona}</h5>
                <p className="card-text">{descrip}</p>
                <label htmlFor="customRange1" className="form-label">Seleccione tiempo de riego</label>
                <input type="range" className="form-range" id="customRange1" min="0" max="30" step="5"/>
                { estado === true ? <a href="#" className="btn btn-secondary">Detener</a> : <a href="#" className="btn btn-primary">Iniciar</a>}
            </div>
            <div className="card-footer">
                <small className="text-body-secondary">Ultima actualizacion: hace {lastOn}</small>
            </div>
        </div>
        
    );
}


export default Zona;