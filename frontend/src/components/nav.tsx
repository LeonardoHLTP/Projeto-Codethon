type list = { href: string, text: string }
import { Button, ButtonGroup } from "@chakra-ui/react"

interface NavProps {
  list: Array<list>,
  mainName: String
}

export function Nav({ list, mainName }: NavProps) {
  return (
    <nav className="w-full h-16 sticky top-0 bg-slate-100 flex justify-around items-center">
      <h2>{mainName}</h2>
      <div>
        <ul className="flex gap-3">
          <ButtonGroup>
          {list.map(link => {
            return <Button><a href={link.href}>{link.text}</a></Button>
          })}
          </ButtonGroup>
          
        </ul>

      </div>
    </nav>
  )
}