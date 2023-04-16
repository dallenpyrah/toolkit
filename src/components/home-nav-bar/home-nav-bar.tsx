import { useRouter } from "next/router";
import { HomeNavBarListItem } from "~/components/home-nav-bar/home-nav-bar-list-item";

export const HomeNavBar = () => {
  return (
    <div>
      <div className="flex items-center ml-10 mt-4">
        <div className="flex items-center">
          <h1 className="text-xl font-extrabold tracking-tight text-white p-3">
            Tool<span className="text-indigo-500">Kit</span>
          </h1>
          <HomeNavBarListItem path={'/'} title={'Home'} />
          <HomeNavBarListItem path={'/about'} title={'About'} />
          <HomeNavBarListItem path={'/sponsor'} title={'Sponsor'}/>
          <HomeNavBarListItem path={'https://github.com/dallenpyrah/toolkit'} title={'Github'}/>
        </div>
      </div>
    </div>
  );
}
