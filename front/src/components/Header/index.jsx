import { Link } from 'react-router-dom'
import './style.css'
function Header() {
    return (
        <>
            <ul>
                <li><Link to="/">
                    <button>Home</button>
                </Link></li>
                <li><Link to="/">
                    <button>Jogo</button>
                </Link></li>
            </ul>
        </>
    )
}

export default Header