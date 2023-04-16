import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { HomeNavBar } from "~/components/home-nav-bar/home-nav-bar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ToolKit</title>
      </Head>
      <main className="flex h-screen min-h-screen flex-col bg-gradient-to-b from-black to-gray-900">
        <HomeNavBar />
        <div className="grid grid-rows-2 items-center text-center h-full">
          <div className="flex items-end mt-20 justify-center h-full">
            <h2 className="w-1/3 text-2xl font-medium tracking-tight text-gray-300 pb-8">
              Unlock <span className={"text-indigo-500"}>unparalleled</span> productivity with ToolKit,
              the upcoming all-in-one platform that <span className={"text-indigo-500"}>intelligently</span> integrates your favorite development tools and optimizes your workflow.
            </h2>
          </div>
          <div className="flex items-end justify-center h-full mb-20">
            <p className="w-1/4 mt-6 text-gray-600">
              Interested in contributing? Join us on{' '}
              <Link href="https://github.com/dallenpyrah/toolkit" className={"text-indigo-500 underline"}>
                GitHub
              </Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
