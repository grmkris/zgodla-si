import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </Head>
      <div className="font-body text-gray-600">
        <div className="bg-orange-200 py-5 h-40 flex">
          <div className="presledki sm:flex sm:items-center sm:justify-start align-bottom">
            <img src="https://picsum.photos/50" className="mr-5 rounded-full" />
            <h1 className="text-xl">Zgodovina na kratko</h1>
          </div>
        </div>
        <div className="bg-orange-200 py-5 h-40 flex">
          <div className="presledki">
            <img src="https://picsum.photos/50" className="mr-5 rounded-full" />
            <h1 className="text-xl">Zgodovina na kratko</h1>
          </div>
        </div>
        <div className="presledki">
          <main>
            <div>
              <h2 className="podnaslov">Izpostavljeno</h2>
              <div className="inline-block">
                <div className="kategorija sm:h-72 h-36"></div>
              </div>
            </div>

            <div>
              <h2 className="podnaslov">Kategorije</h2>
              <div className="inline-block">
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
