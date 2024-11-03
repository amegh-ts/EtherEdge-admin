import { BreadcrumbLink, BreadcrumbRoot } from "../../ui/breadcrumb";
import { useLocation } from "react-router-dom";
import { Heading } from "@chakra-ui/react";
import NavSearch from "./components/NavSearch";
import NavThemeTogler from "./components/NavThemeTogler";
import NavNotifications from "./components/NavNotifications";

const Navbar = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  const generateBreadcrumbs = () => {
    return pathnames.map((value, index) => {
      const to = `/${pathnames.slice(0, index + 1).join("/")}`;
      return (
        <BreadcrumbRoot>
          <BreadcrumbLink href={to}>{value}</BreadcrumbLink>
        </BreadcrumbRoot>
      );
    });
  };

  const getPageTitle = () => {
    const currentPath = pathnames[pathnames.length - 1] || "Home";
    return currentPath.charAt(0).toUpperCase() + currentPath.slice(1);
  };

  const handleSearch = (value: string) => {
    console.log("Search:", value);
  };
  return (
    <div className=" py-4 pr-4">
      <div className="nav-glass-effect p-3 rounded-[14px] flex justify-between">
        <div className="flex flex-col gap-2 justify-center">
          <BreadcrumbRoot>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
            {generateBreadcrumbs()}
          </BreadcrumbRoot>
          <Heading className="text-text-primary dark:text-dark-text-primary text-[28px] font-bold">
            {getPageTitle()}
          </Heading>
        </div>

        <div className="flex gap-3 items-center bg-primary-bg dark:bg-dark-primary-bg p-[8px] rounded-full">
          <NavSearch onSearch={handleSearch} />
          <NavNotifications/>
          <NavThemeTogler />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
