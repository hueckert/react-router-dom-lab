import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    return (
        <div className="navbar">
            <div className="navbar-menu">
                <NavLink exact to="/" activeClassName="active">Home</NavLink>
                <NavLink to="/new-mailbox" activeClassName="active">New Mailbox</NavLink>
                <NavLink to="/mailboxes" activeClassName="active">Mailboxes</NavLink>
            </div>
        </div>
    );
};

export default NavBar;