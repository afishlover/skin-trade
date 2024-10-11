
import { Suspense, useEffect } from "react";
import {
  NavigationType,
  RouterProvider
} from "react-router-dom";
import { Loading } from "../components";
import { router } from "../router";


export function App() {
  useEffect(() => {
    // initDb();
    const unsubscribe = router.subscribe((state) => {
      if (state.historyAction === NavigationType.Pop && state.location.pathname === '/') {
        document.body.innerHTML = `
          <div
            style="pointer-events: none;width: 100%;height: 100vh;display: flex;justify-content: center;align-items: center;">
            <video id="loadingVideo" style="width: 200px;" playsinline preload="metadata" autoplay muted>
              <source src="/loading.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        `;
        document.location.href = '/';
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  )
};