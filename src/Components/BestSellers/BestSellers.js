import botella_buca from './buca.png';
import santateresa from './santateresa.png';
import vino from './vino.png';

function BestSellers() {
    return (
        <div className="flex flex-col py-24">
            <div className="w-full h-auto justify-center  items-center flex p-4">
                <p className="font-bold text-4xl font-Roboto text-grayPerson underline underline-offset-[20px] decoration-barrita decoration-[4px] titBest">Best Sellers</p>

            </div>
            <div className="w-full h-auto pt-6">
                <div class="w-auto items-center mt-6 justify-center flex lg:space-x-64">
                    <div class="Card hidden lg:flex">
                        <img src={santateresa} alt="botella Buca" />
                    </div>
                    <div class="Card items-center flex flex-col bg-cinta">
                        <img className='h-3/4' src={botella_buca} alt="botella Buca" />
                        <div className='bg-[#333333BF] p-1 mb-4 ml-4 mr-4'>
                            <p className='text-while p-1'>BUCHANAN’S DELUXE 12 ANOS</p>
                        </div>
                    </div>
                    <div class="Card hidden lg:flex">
                        <img src={vino} alt="botella Buca" />
                    </div>
                </div>
            </div>
        </div>


    );
}

export default BestSellers;