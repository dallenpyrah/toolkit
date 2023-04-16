import { NextPage } from "next";
import Head from "next/head";
import { HomeNavBar } from "~/components/home-nav-bar/home-nav-bar";

const SponsorPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sponsor ToolKit</title>
      </Head>
      <main className="flex flex-col min-h-screen bg-gradient-to-b from-black to-gray-900">
        <HomeNavBar />
        <div className="flex flex-col items-center justify-center flex-1 px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-50 sm:text-5xl md:text-6xl">
              Sponsor<span className={'text-indigo-500'}></span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-4xl sm:mx-auto md:mt-5 md:text-xl">
              We appreciate your support! By sponsoring our GitHub repository, you&apos;re helping us continue to develop and maintain ToolKit.
            </p>
            <div className="mt-20 space-y-10">
              <div className="bg-gray-800 rounded-lg p-6 text-center">
                <h2 className="text-2xl font-bold text-gray-50 mb-4">Support Tool<span className={'text-indigo-500'}>Kit</span></h2>
                <p className="text-gray-500">
                  Your sponsorship will help us keep ToolKit up-to-date, add new features, and improve the user experience for developers worldwide.
                </p>
                <a
                  href="https://github.com/sponsors/dallenpyrah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block px-6 py-3 text-base font-semibold text-white bg-indigo-500 rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sponsor on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SponsorPage;
