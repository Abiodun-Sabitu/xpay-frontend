import LoginUI from "./components/LoginForm";

function App() {
  return (
    <>
      <section className="flex overflow-hidden">
        <div className="lg:w-6/12 lg:relative absolute z-10 bottom-0 right-0 top-0 flex flex-col justify-center px-12">
          <div className=" md:bg-none bg-white sm:px-5 px-8 lg:pt-0 py-4 rounded-xl shadow-xl">
            <h2
              className="font-bold text-center py-5 text-2xl text-blue-800"
              style={{ fontFamily: "Kanit" }}
            >
              <span className="text-red-700 font-extrabold">X</span>Pay
            </h2>

            <LoginUI />
          </div>
        </div>
        <div className="bg-[url(/main_bg.png)] h-screen bg-no-repeat bg-cover  bg-center lg:w-12/12 w-full"></div>
      </section>
    </>
  );
}

export default App;
