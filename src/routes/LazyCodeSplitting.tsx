import { lazy } from "react";

const lazyRetry = <T extends React.ComponentType<unknown>>(
  importFn: () => Promise<{ default: T }>,
  retries: number = 3,
  delay: number = 1000
): Promise<{ default: T }> => {
  return new Promise((resolve, reject) => {
    importFn()
      .then(resolve)
      .catch((error) => {
        if (retries === 0) {
          reject(error);
        } else {
          setTimeout(() => {
            lazyRetry(importFn, retries - 1, delay * 2)
              .then(resolve)
              .catch(reject);
          }, delay);
        }
      });
  });
};

// Landing Page
export const LandingPage = lazy(() =>
  lazyRetry(() => import(/* webpackChunkName: "landingpage-layout" */ "../pages/LandingPage"))
);

// Home Page
export const Home = lazy(() =>
  lazyRetry(() => import(/* webpackChunkName: "home-page" */ "../pages/LandingPage/Home"))
);  