import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from '@nextui-org/react'

const NavbarW = () => {
  return (
    <Navbar position='static'>
      <NavbarBrand>
        <p className='font-bold text-inherit'>WATHER STATION</p>
      </NavbarBrand>
      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        <NavbarItem>
          <Link color='foreground' href='/Database'>
            Database
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color='foreground' href='/'>
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color='foreground' href='/Creditos'>
            Funcionamiento
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem className='hidden lg:flex'>
          <Link href='/Mensajes'>Mensajes</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color='primary' href='/EnviarMensaje' variant='flat'>
            Envía un mensaje!
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}

export default NavbarW
