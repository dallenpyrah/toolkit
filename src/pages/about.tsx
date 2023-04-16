import { NextPage } from "next";
import Head from "next/head";
import { HomeNavBar } from "~/components/home-nav-bar/home-nav-bar";

const AboutPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>About ToolKit</title>
      </Head>
      <main className="flex flex-col min-h-screen bg-gradient-to-b from-black to-gray-900">
        <HomeNavBar />
        <div className="flex flex-col items-center justify-center flex-1 px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl mt-10 font-extrabold tracking-tight text-gray-50 sm:text-5xl md:text-6xl">
              About Tool<span className={'text-indigo-500'}>Kit</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-4xl sm:mx-auto md:mt-5 md:text-xl">
              ToolKit is an all-in-one platform that brings together open-source tools and integrations,
              simplifying the development process and boosting efficiency for developers.
              By centralizing access to essential resources and tools, ToolKit empowers developers to manage
              their projects with ease and stay focused on what matters most.
            </p>
            <div className="mt-10 space-y-10">
              <div>
                <h2 className="text-2xl font-bold text-gray-50 mb-10">Founder</h2>
                <div className="mt-2 flex items-center justify-center my-10">
                  <img
                    className="w-24 h-24 rounded-full"
                    src="/images/dallenpyrah.jpeg"
                    alt="Dallen Pyrah's profile photo"
                  />
                </div>
                <div className="mt-2 flex items-center">
                  <p className="text-gray-500">
                    ToolKit was established in 2023 by its founder, Dallen Pyrah.
                    Recognizing the challenges faced by developers in managing various tools and resources,
                    Dallen set out to create ToolKit as a unified platform.
                    This innovative solution provides a one-stop-shop for developers to easily access and manage all essential tools and integrations,
                    significantly improving their workflow and overall efficiency.
                  </p>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-50 mb-8">Open Source - Open Mind</h2>
                <p className="mt-2 text-gray-500">
                  At ToolKit, we embrace the open-source philosophy, ensuring all our tools are freely accessible and open for collaboration. By adopting this approach, we aim to foster innovation, drive creativity, and unite the developer community around a shared vision.
                </p>
                <p className="mt-2 text-gray-500">
                  Our commitment to open source stems from the belief that transparency and collaboration lead to better quality software, ultimately benefiting developers worldwide. By enabling individuals to contribute to ToolKit, we harness the collective intelligence of the community, accelerating growth and inspiring new ideas.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-50 mb-8">Why We&apos;re Doing It</h2>
                <p className="mt-2 text-gray-500">
                  The driving force behind ToolKit is our desire to empower developers by providing them with the best possible tools to enhance their workflow. We understand the complexities and challenges that developers face daily, and we're committed to making their lives easier and more productive.
                </p>
                <p className="mt-2 text-gray-500">
                  By crafting a versatile and user-friendly platform, we aim to support developers of all skill levels, from beginners to experts. ToolKit is designed to adapt to each individual's needs, simplifying processes and ultimately allowing developers to focus on what truly matters: creating outstanding software.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AboutPage;
