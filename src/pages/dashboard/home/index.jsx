import { useContador } from '../../../contexts/contador'

export function HomePage() {
    
    const {contador, incrementar, decrementar} = useContador()

    return (
        <div>
            <h1>Dashboard home page</h1>

            <span className="badge text-bg-secondary">{contador}</span> <br />

            <button className="btn btn-danger" onClick={decrementar}>Decrementar</button>
            <button className="btn btn-success" onClick={incrementar}>Incrementar</button>
        </div>
    )
}