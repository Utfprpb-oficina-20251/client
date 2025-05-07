export function Footer() {
    return (
      <footer className="bg-muted text-muted-foreground border-t border-border mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-4 text-sm text-center">
          © {new Date().getFullYear()} Footer. Todos os direitos reservados.
        </div>
      </footer>
    )
  }