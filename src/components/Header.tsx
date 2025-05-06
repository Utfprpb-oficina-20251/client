// components/Header.tsx
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export function Header() {
  return (
    <header className="bg-background border-b border-border text-foreground ">
      <div className="max-w-7xl mx-auto px-4 gap-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold">Header</h1>
        <nav className="flex items-center gap-4">
          <Link to="/">
            <Button variant="ghost">Home</Button>
          </Link>
          <Link to="/TestPage">
            <Button variant="ghost">Test Page</Button>
          </Link>
        </nav>
      </div>
    </header>
  )
}
