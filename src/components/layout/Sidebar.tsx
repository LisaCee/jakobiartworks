import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '@/hooks/useTheme'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
//   { to: '/contact', label: 'Contact' },
]

export default function Sidebar() {
  const [open, setOpen] = useState(false)
    const { dark, updateTheme } = useTheme();
    
  return (
    <>
      {/* Mobile hamburger button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-surface rounded-md"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <aside className={`
        fixed md:static inset-y-0 left-0 z-40
        w-56 p-6 flex flex-col gap-8
        bg-surface
        border-r border-border
        transform transition-transform duration-200
        ${open ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0
      `}>
        {/* Logo/name placeholder */}
        <div className="text-sm font-medium tracking-widest uppercase text-foreground">
          Jakobi Art Works
        </div>

        {/* Nav links */}
        <nav className="flex flex-col gap-2">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-sm transition-colors ${
                  isActive
                    ? 'text-foreground font-medium'
                    : 'text-muted hover:text-foreground'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Social links placeholder */}
        <div className="mt-auto flex gap-4 text-xs text-muted">
          <a href="#">IG</a>
                  <a href="#">TW</a>
                  <button onClick={updateTheme} className="text-muted hover:text-foreground transition-colors">
  {dark ? <Sun size={16} /> : <Moon size={16} />}
</button>
        </div>
      </aside>

      {/* Mobile overlay */}
      {open && (
        <div
          className="md:hidden fixed inset-0 z-30 bg-black/40"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  )
}