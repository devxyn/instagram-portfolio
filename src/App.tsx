import Navbar from "./components/Navbar";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <Navbar />
      <main className='md:ml-[10vw] lg:ml-[16vw] flex flex-col items-center'>
        <section className='w-full md:w-[75%] flex flex-col items-center mt-10 md:mt-16'>
          <Profile />
        </section>
      </main>
    </>
  );
}

export default App;
