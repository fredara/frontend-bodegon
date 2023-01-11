
function Catalago() {
    return (
        <div className="flex flex-col py-24">
            <div className="w-full h-auto justify-center  items-center flex p-4">
                <p className="font-bold text-4xl font-Roboto text-grayPerson underline underline-offset-[20px] decoration-barrita decoration-[4px] titBest">LICORES</p>    
                
            </div>
            <div className="w-full h-auto pt-6 items-center justify-center">
                <div class="w-auto grid lg:grid-cols-4 lg:gap-4  place-items-center">
                    <div class="Card p-6">
                        <div class="w-full h-64 rounded-t-lg bg-cacique bg-cover"></div>
                        <div class="w-full bg-secondary rounded-b-lg dark:bg-gray-700">
                            <p class="text-white px-4 text-bold text-md py-2">Licor 1</p>
                            <p class="text-white px-4 text-sm text-grayPerson">$ 99,99</p>
                        </div>
                    </div>
                    <div class="Card p-6">
                        <div class="w-full h-64 rounded-t-lg bg-vino2 bg-cover"></div>
                        <div class="w-full bg-secondary rounded-b-lg dark:bg-gray-700">
                            <p class="text-white px-4 text-bold text-md py-2">Licor 1</p>
                            <p class="text-white px-4 text-sm text-grayPerson">$ 99,99</p>
                        </div>
                    </div>
                    <div class="Card p-6">
                        <div class="w-full h-64 rounded-t-lg bg-vocka bg-cover"></div>
                        <div class="w-full bg-secondary rounded-b-lg dark:bg-gray-700">
                            <p class="text-white px-4 text-bold text-md py-2">Licor 1</p>
                            <p class="text-white px-4 text-sm text-grayPerson">$ 99,99</p>
                        </div>
                    </div>
                    <div class="Card p-6">
                        <div class="w-full h-64 rounded-t-lg bg-black bg-cover"></div>
                        <div class="w-full bg-secondary rounded-b-lg dark:bg-gray-700">
                            <p class="text-white px-4 text-bold text-md py-2">Licor 1</p>
                            <p class="text-white px-4 text-sm text-grayPerson">$ 99,99</p>
                        </div>
                    </div>




                    <div class="Card p-6 hidden lg:block">
                        <div class="w-full h-64 rounded-t-lg bg-cacique bg-cover"></div>
                        <div class="w-full bg-secondary rounded-b-lg dark:bg-gray-700">
                            <p class="text-white px-4 text-bold text-md py-2">Licor 1</p>
                            <p class="text-white px-4 text-sm text-grayPerson">$ 99,99</p>
                        </div>
                    </div>
                    <div class="Card p-6 hidden lg:block">
                        <div class="w-full h-64 rounded-t-lg bg-vino2 bg-cover"></div>
                        <div class="w-full bg-secondary rounded-b-lg dark:bg-gray-700">
                            <p class="text-white px-4 text-bold text-md py-2">Licor 1</p>
                            <p class="text-white px-4 text-sm text-grayPerson">$ 99,99</p>
                        </div>
                    </div>
                    <div class="Card p-6 hidden lg:block">
                        <div class="w-full h-64 rounded-t-lg bg-vocka bg-cover"></div>
                        <div class="w-full bg-secondary rounded-b-lg dark:bg-gray-700">
                            <p class="text-white px-4 text-bold text-md py-2">Licor 1</p>
                            <p class="text-white px-4 text-sm text-grayPerson">$ 99,99</p>
                        </div>
                    </div>
                    <div class="Card p-6 hidden lg:block">
                        <div class="w-full h-64 rounded-t-lg bg-black bg-cover"></div>
                        <div class="w-full bg-secondary rounded-b-lg dark:bg-gray-700">
                            <p class="text-white px-4 text-bold text-md py-2">Licor 1</p>
                            <p class="text-white px-4 text-sm text-grayPerson">$ 99,99</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
export default Catalago;