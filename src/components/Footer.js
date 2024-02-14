import logo from '../assets/Logo.svg'
const Footer = () => {
    return (
        <footer>
            <section>
                <img src={logo} alt='Little Lemon Logo Footer'/>
            </section>
            <section>
                <div>
                    <h3>Navegation</h3>
                    <nav>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Menu</li>
                            <li>Reservations</li>
                            <li>Order Online</li>
                            <li>Login</li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <h3>Contact</h3>
                    <nav>
                        <ul>
                            <li>Addres</li>
                            <li>Phone Number</li>
                            <li>eMail</li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <h3>Social Media</h3>
                    <nav>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Menu</li>
                        </ul>
                    </nav>
                </div>
            </section>
        </footer>
    );
};

export default Footer;