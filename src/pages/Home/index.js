import { Link } from "react-router-dom";

export default function Index() {
    return (
        <main>
            <h1>Home</h1>
            <ul>
                <li> <Link to='/corPrimaria'> Cor Primária </Link> </li>
                <li> <Link to='/Dobro'> Dobro </Link> </li>
                <li> <Link to='/Febre'> Febre </Link> </li>
                <li> <Link to='/Media'> Média </Link> </li>

            </ul>
        </main>
    )
}