import Zona from "./zona";



function Zonas() {

    const infoZonas = [
        {
            zona: 1,
            descrip: "Entrada",
            estado: false,
            lastOn: 30
        },
        {
            zona: 2,
            descrip: "Parte media",
            estado: true,
            lastOn: 15
        },
        {
            zona: 3,
            descrip: "Atras a la izquierda",
            estado: false,
            lastOn: 12
        },
        {
            zona: 4,
            descrip: "Atras a la derecha",
            estado: false,
            lastOn: 10
        }
    ];
    


    return (
        <>
            <h2>Zonas de Riego</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                    {infoZonas.map((info_zona) => (
                        <div className="col" key={info_zona.zona}>
                            <Zona 
                                num_zona={info_zona.zona}
                                descrip={info_zona.descrip}
                                estado={info_zona.estado}
                                lastOn={info_zona.lastOn} 
                            /> 
                        </div>
                    ))}
            </div>

        </>
        
    );
}

export default Zonas;
