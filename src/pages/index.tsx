import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { HomeNavBar } from "~/components/home-nav-bar/home-nav-bar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ToolKit</title>
      </Head>
      <main className="flex flex-col h-screen w-screen bg-gradient-to-b from-black to-gray-900">
        <HomeNavBar />
        <div className="flex flex-col items-center justify-center flex-1 py-20 px-4 text-center">
          <h2 className="lg:w-1/2 w-full text-base sm:text-2xl font-medium tracking-tight text-gray-300 pb-8">
            Unlock <span className="text-indigo-500">unparalleled</span> productivity with ToolKit,
            the upcoming all-in-one platform that <span className="text-indigo-500">intelligently</span> integrates your favorite development tools and optimizes your workflow.
          </h2>
          <p className="w-full mt-6 text-gray-600">
            Interested in contributing? Join us on{' '}
            <Link href="https://github.com/dallenpyrah/toolkit" className="text-indigo-500 underline">
              GitHub
            </Link>
          </p>
        </div>
      </main>
    </>
  );
};

export default Home;
