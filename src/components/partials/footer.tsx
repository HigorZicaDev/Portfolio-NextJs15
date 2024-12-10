import { Facebook, Instagram } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="w-full bg-slate-900 border-t border-zinc-800 mt-4 px-4 py-3">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-green-500" />
          <span className="text-sm text-zinc-400">Higor Zica, 2024.</span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-400 hover:text-white">
            <Facebook className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-400 hover:text-white">
            <Instagram className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </footer>
  )
}
