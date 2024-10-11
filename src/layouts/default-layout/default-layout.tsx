import { Outlet } from "react-router-dom";
import { DefaultFcProps, HasClasses } from "../../react-utils";

export const DefaultLayout: React.FC<DefaultFcProps & HasClasses> = ({
  classes
}) => {
  return (
      <div className={classes.pageWrapper}>
        <header>This's header</header>
        <Outlet />
        <footer>This's footer</footer>
      </div>
  );
};
