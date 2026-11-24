import { useEffect, useState } from "react";

function RelojEstacion() {
    const [hora, setHora] = useState(() => new Date());

    useEffect(() => {
        const id = setInterval(() => {
            setHora(new Date());
        }, 1000);

        return () => clearInterval(id);
    }, []);

    return (
        <p className="reloj">Hora de la estación: {hora.toLocaleTimeString()}</p>
    );
}

export default RelojEstacion;
