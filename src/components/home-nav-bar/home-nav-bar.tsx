import { useState } from 'react';
import { useRouter } from 'next/router';
import { HomeNavBarListItem } from '~/components/home-nav-bar/home-nav-bar-list-item';

export const HomeNavBar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed lg:relative top-0 left-0 right-0 z-50 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-white text-xl font-bold">
              Tool<span className="text-indigo-500">Kit</span>
            </h1>
          </div>
          <div className="hidden sm:block">
            <div className="flex items-center">
              <HomeNavBarListItem path={'/'} title={'Home'} />
              <HomeNavBarListItem path={'/about'} title={'About'} />
              <HomeNavBarListItem path={'/sponsor'} title={'Sponsor'} />
              <HomeNavBarListItem
                path={'https://github.com/dallenpyrah/toolkit'}
                title={'Github'}
                isExternal
              />
            </div>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:text-white"
              aria-label="Toggle menu"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                  <path
                    fillRule="evenodd"
                    d="M14.95 14.95a.999.999 0 11-1.414 1.414l-8-8a.999.999 0 010-1.414l8-8a.999.999 0 111.414 1.414L6.414 10l8.536 8.536z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                  <path
                    fillRule="evenodd"
                    d="M3 4h14a1 1 0 010 2H3a1 1 0 110-2zm0 6h14a1 1 0 010 2H3a1 1 0 010-2zm0 6h14a1 1 0 010 2H3a1 1 0 110-2z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <HomeNavBarListItem
              path="/"
              title="Home"
              isActive={router.pathname === '/'}
              onClick={toggleMenu}
            />
            <HomeNavBarListItem
              path="/about"
              title="About"
              isActive={router.pathname === '/about'}
              onClick={toggleMenu}
            />
            <HomeNavBarListItem
              path="/sponsor"
              title="Sponsor"
              isActive={router.pathname === '/sponsor'}
              onClick={toggleMenu}
            />
            <HomeNavBarListItem
              path="https://github.com/dallenpyrah/toolkit"
              title="Github"
              isExternal
              onClick={toggleMenu}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

