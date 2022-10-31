import React from "react";

const Home = React.lazy(() => import("../views/home/Index"));
const Search = React.lazy(() => import("../views/search/Index"));
const Favourite = React.lazy(() => import("../views/favourite/Index"));
const WatchList = React.lazy(() => import("../views/watch-list/Index"));

const routes = [
  { path: "/", exact: true, name: "Home", element: Home },
  { path: "/Home", name: "Home", element: Home },
  { path: "/Search", name: "Search", element: Search },
  { path: "/Favourite", name: "Favourite", element: Favourite },
  { path: "/WatchList", name: "WatchList", element: WatchList },
];

export default routes;
