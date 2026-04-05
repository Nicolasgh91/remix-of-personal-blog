const Footer = () => {
  return (
    <footer className="border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-4">Explorar</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/creativity" className="hover:text-accent transition-colors">
                  Creativity
                </a>
              </li>
              <li>
                <a href="/growth" className="hover:text-accent transition-colors">
                  Growth
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Sobre Alex Jensen</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/about" className="hover:text-accent transition-colors">
                  Historia
                </a>
              </li>
              <li>
                <a href="/authors" className="hover:text-accent transition-colors">
                  Autores
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-accent transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/style-guide" className="hover:text-accent transition-colors">
                  Guía de estilo
                </a>
              </li>
              <li>
                <a href="/#newsletter" className="hover:text-accent transition-colors">
                  Newsletter
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/privacy" className="hover:text-accent transition-colors">
                  Privacidad
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-accent transition-colors">
                  Términos
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2026 Alex Jensen. Estrategias de crecimiento digital.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
