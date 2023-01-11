import botellas from './botellas.png';
import botellasMobile from './botellaMobile.png';
import fondo2 from './fondo2.jpg';
import fondo3 from './fondo3.jpg';

import fondo2Mobile from './fondo2Mobile.jpg';
import fondo3Mobile from './fondo3Mobile.jpg';
import 'tw-elements';

function Principal() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner relative w-full overflow-hidden">
        <div className="carousel-item active relative float-left w-full">
          <img
            src={botellas}
            className="hidden lg:block w-full lg:bg-cover lg:bg-center"
            alt="..."
          />
          <img
            src={botellasMobile}
            className="block lg:hidden w-full bg-cover bg-center"
            alt="..."
          />
        </div>
        <div className="carousel-item relative float-left w-full">
          <img
            src={fondo2}
            className="hidden w-full lg:bg-cover lg:bg-center lg:block"
            alt="..."
          />
          <img
            src={fondo2Mobile}
            className="block w-full bg-cover bg-center lg:hidden"
            alt="..."
          />
        </div>
        <div className="carousel-item relative float-left w-full">
          <img
            src={fondo3}
            className="hidden w-full lg:bg-cover lg:bg-center lg:block"
            alt="..."
          />
          <img
            src={fondo3Mobile}
            className="block w-full bg-cover bg-center lg:hidden"
            alt="..."
          />
        </div>
      </div>
    </div>
  );
}

export default Principal;