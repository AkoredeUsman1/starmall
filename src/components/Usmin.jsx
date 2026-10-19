import { BoxIcon, HomeIcon, HotelIcon, MapIcon, ShieldAlertIcon, StoreIcon } from "lucide-react";

 
 function Usmin() {
  return (
    <div>

      {/* STATS SECTION */}
      <div className="w-full bg-gray-50 dark:bg-slate-800 py-10">
        <div className="grid grid-cols-2 gap-y-10 gap-x-6 justify-items-center text-center max-w-md mx-auto px-5 md:max-w-none md:flex md:flex-row md:justify-around md:items-center md:gap-0 md:px-5">

          <div>
            <h2 className="text-4xl font-bold text-blue-600 dark:text-blue-400">10000+</h2>
            <p className="text-sm text-gray-600 dark:text-slate-400 mt-1">Successful Moves</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-blue-600 dark:text-blue-400">99%</h2>
            <p className="text-sm text-gray-600 dark:text-slate-400 mt-1">On-Time Rate</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-blue-600 dark:text-blue-400">50+</h2>
            <p className="text-sm text-gray-600 dark:text-slate-400 mt-1">Trucks & Vehicles</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-blue-600 dark:text-blue-400">15+</h2>
            <p className="text-sm text-gray-600 dark:text-slate-400 mt-1">Years Experience</p>
          </div>

        </div>
      </div>


      {/* SERVICES SECTION */}
      <section className="w-full bg-gray-50 dark:bg-slate-800 py-16">

        <div className="text-center mb-10 px-5">

          <div className="text-blue-600 dark:text-blue-400" >
            Services
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-4">
            Moving Solutions for Every Need
          </h2>

          <p className="text-sm text-gray-600 dark:text-slate-400 mt-3 max-w-xl mx-auto">
            Whether you are moving across town or across the country, we have
            the expertise and equipment to get you there safely.
          </p>

        </div>


        {/* SERVICE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto px-5">


          {/* CARD 1 */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm">

            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
              <HomeIcon />
            </div>

            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              Local Moving
            </h3>

            <p className="text-sm text-gray-600 dark:text-slate-400 leading-6">
              Same-city moves with careful handling of all your belongings.
              Our trained crews ensure everything arrives safely at your new home.
            </p>

          </div>


          {/* CARD 2 */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm">
              
            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
              <MapIcon/>
            </div>

            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              Long Distance
            </h3>

            <p className="text-sm text-gray-600 dark:text-slate-400 leading-6">
              Cross-country relocations with real-time GPS tracking,
              guaranteed delivery dates, and dedicated move coordinators.
            </p>

          </div>


          {/* CARD 3 */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm">

            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
               <HotelIcon/>
            </div>

            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              Commercial Moving
            </h3>

            <p className="text-sm text-gray-600 dark:text-slate-400 leading-6">
              Office and business relocations with minimal downtime.
              We handle IT equipment, furniture, and sensitive documents.
            </p>

          </div>


          {/* CARD 4 */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm">

            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
             <BoxIcon/>
            </div>

            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              Packing Services
            </h3>

            <p className="text-sm text-gray-600 dark:text-slate-400 leading-6">
              Professional packing and unpacking using premium materials.
              We protect everything from fragile china to heavy furniture.
            </p>

          </div>


          {/* CARD 5 */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm">

            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
               <StoreIcon/>
            </div>

            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              Storage Solutions
            </h3>

            <p className="text-sm text-gray-600 dark:text-slate-400 leading-6">
              Short and long-term secure, climate-controlled storage
              facilities. Perfect for staged moves or temporary storage needs.
            </p>

          </div>


          {/* CARD 6 */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm">
                
            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
               <ShieldAlertIcon/>
            </div>

            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              Specialty Items
            </h3>

            <p className="text-sm text-gray-600 dark:text-slate-400 leading-6">
              Expert handling of pianos, antiques, fine art and other
              fragile or valuable items with custom crating and white-glove service.
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Usmin;
