import { Suspense } from "react";
import Preloader from "../common/preloader/Preloader";

export const withSuspence = (Component) => {
  return (props) => {
    return (
      <Suspense return Suspense fallback={<Preloader />}>
        <Component {...props} />
      </Suspense>
    );
  };
};
