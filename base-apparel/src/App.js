import {BiArrowFromLeft} from 'react-icons/bi'
function App() {
  return (
    <div className="h-screen w-full bg-yellow-50 flex md:flex-row flex-col items-center">
      <div className="md:w-[50%] w-[90%] flex flex-col items-start justify-around  p-5 md:pl-16 pl-0">
        <h1 className="text-2xl font-light tracking-widest">BASE <br/> APPAREL</h1>
        <h2 className="text-7xl font-extralight tracking-widest">
          <span className="text-pink-500"> WE'RE</span> 
          <span className="font-bold"><br/> COMING <br/> SOON</span>
        </h2>
        <p className="text-pink-400 leading-10 text-xl text-center">
          Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.
        </p>
         <div className="w-full py-2">
         <form className='flex items-center relative  lg:w-[70%] w-full'>
          <input className="bg-transparent pl-4 rounded-full shadow-md shadow-pink-400   border-pink-400 border-2  py-3 w-full" type="email" placeholder="Email Address" />
          <button type="submit" className='bg-gradient-to-r from-pink-400 to-transparent py-3 hover:bg-red-500 transition-all duration-300 lg:px-14 px-10 rounded-full absolute right-0'>
            <BiArrowFromLeft  className="text-3xl text-white" />
          </button>
        </form>
         </div>
      </div>
      <div className="md:w-[50%] w-[95%] h-full">
        <img src="./images/hero-desktop.jpg" alt="hero" className="w-full h-full object-fill" />
      </div>
    </div>
  );
}

export default App;
