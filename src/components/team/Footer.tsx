import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <Logo />
        <p className="footer__text">© {new Date().getFullYear()} UDS89. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
