import logo from "../assets/images/logo.svg";

export default function Footer() {
    return(
        <footer>
            <section className="main-footer">
                <div className="container-footer-logo">
                    <img className="logo-footer" src={logo} alt="Logo-Medellin-Travel" />
                </div>
                <ul className="footer-links">
                    <li><a href="/#quienesSomos">Quienes Somos</a></li>
                    <li><a href="">Políticas de privacidad</a></li>
                    <li><a href="">Políticas de seguridad</a></li>
                    <li><a href="">Términos y condiciones</a></li>
                </ul>
                <ul className="footer-links">
                    <li><a href="/#contactanos">Contáctenos</a></li>
                    <li><a href="">¿Necesitas ayuda?</a></li>
                    <li><a href="/#servicios">Nuestros servicios</a></li>
                    <li><a href="">Envianos tu CV</a></li>
                </ul>
                <ul className="footer-links">
                    <li><a href="">Números y horarios de atención</a></li>
                    <li><a href="">Lunes a viernes 09hs a 18hs.</a></li>
                    <li><a href="">Sábados 09hs a 15hs</a></li>
                    <li><a href="">0800 222 5665</a></li>
                </ul>
            </section>
        </footer>
    )
}