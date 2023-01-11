import logo from './logobode.png';
import carrito from './carrito.png';
import salir from './salir.png';

function Navbar() {
    return (
        <div>
            <nav className="w-full h-24 font-Roboto flex justify-between items-center px-2 lg:z-10 lg:px-10 lg:py-8  ">
                <div className="h-auto w-auto px-2 lg:px-6">  
                    <img src={logo} className="w-36" alt='Logo' />
                </div>
                <div className="h-auto w-auto hidden lg:flex">
                    <input className="outline-none pt-4 shadow-sm border-b-2 border-grayPerson w-96 icoInput1"  type="search" name="busqueda" id="busqueda" />
                </div>
                <div className="w-auto flex space-x-1 md:space-x-4 lg:pt-2">
                    <div className='text-grayPerson font-bold hidden lg:flex'>PRODUCTOS</div>
                    <div className='text-grayPerson font-bold hidden lg:flex'>MONEDA</div>

                    <div className='flex px-4'> 
                        <div className='px-4'><img src={carrito} alt='Carrito' className='iconosNavbar'/></div>
                        <div><img src={salir} alt='Salir' className='iconosNavbar'/></div>
                    </div>
                </div>
            </nav>

            <div className="w-full h-8 text-[9px] space-x-2 flex justify-center items-center
            
            bg-cinta text-blancoTitulo 

            md:text-[15px]
            md:space-x-6
            

            lg:text-lg 
            lg:space-x-20"
            >
                <p>WHISKY</p>
                <p>RON</p>
                <p>VINOS</p>
                <p>DESTILADOS</p>
                <p>LICORES</p>
                <p>OTROS</p>
                <p>OFERTAS</p>
            </div>
        </div>
    );
  }
  
export default Navbar;