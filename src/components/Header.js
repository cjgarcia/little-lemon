import Nav from './Nav'
import logo from '../assets/Logo.svg'


function Header(){
    return (
        <header>
            <section>
                <img src={logo} alt='Little Lemon Logo'/>
            </section>
            <section>
                <Nav/>
            </section>
        </header>
    );
}

export default Header;