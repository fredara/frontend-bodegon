
function PiePagina() {
    return (
        <div className="w-full h-56 lg:48 not-italic flex flex-col justify-center items-center text-center bg-foot">
            <div className="w-full h-full mt-4 lg:mt-2 lg:space-x-36 not-italic justify-center  items-center text-sm  text-blancoTitulo lg:flex space-y-1 md:space-x-4">
                <p>INICIO</p>
                <p>PRODUCTOS</p>
                <p>NOSOTROS</p>
                <p>TERMINOS Y CONDICIONES</p>
                <p>PREGUNTAS FRECUENTES</p>
                <p>CUENTA</p>
            </div>
            <div className="w-full h-full pt-4">
                <p className="text-while text-sm ">Copyright © 2022. Todos los Derechos Reservados. </p>
            </div>
        </div>
    );
  }
  
export default PiePagina;