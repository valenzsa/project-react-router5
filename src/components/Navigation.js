import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <ul>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </ul>
    )
}

export default Navigation;