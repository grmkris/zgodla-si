import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Zgodovina na kratko</title>
        <script src="https://kit.fontawesome.com/7ee5a6eba5.js" crossOrigin="anonymous"></script>
      </Head>
      <div className="font-body text-gray-600 pb-10 inline-block">
        <div className="bg-primary pb-7">
          <div className="presledki sm:flex sm:justify-between pt-20">
            <div className="sm:flex sm:items-center sm:justify-start text-center ">
              <img src="https://picsum.photos/50" className="sm:mr-5 rounded-full inline" />
              <h1 className="text-xl font-bold uppercase">Zgodovina na kratko</h1>
            </div>
            <div className="my-auto text-center">
              <div className="povezava">
                <a href="#"><i className="fa-brands fa-facebook fa-fw"></i></a>
              </div>
              <div className="povezava">
                <a href="#"><i className="fa-brands fa-instagram fa-fw"></i></a>
              </div>
              <div className="povezava">
                <a href="#"><i className="fa-brands fa-youtube fa-fw"></i></a>
              </div>
              
              
              
            </div>
          </div>
        </div>
        <div className="presledki">
          <main>
            <div className="px-auto">
              <h2 className="podnaslov">Izpostavljeno</h2>
              <div className="flex sm:justify-center">
                <div className="kategorija sm:h-72 h-36"></div>
              </div>
            </div>

            <div>
              <h2 className="podnaslov">Vsi videi</h2>
              <div className="float-left gap-5">
                <div className="kategorija h-36"></div>
                <div className="kategorija h-36"></div>
                <div className="kategorija h-36"></div>
                <div className="kategorija h-36"></div>
                <div className="kategorija h-36"></div>
                <div className="kategorija h-36"></div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Home;
