import Home from "../components/Home/Home";
import Properties from "../components/Properties/Properties";
import Contacts from "../components/Contacts/Contacts";
export const navbar = [
  {
    id: 1,
    path: "/home",
    title: "Home",
    element: <Home />,
  },
  {
    id: 2,
    path: "/properties",
    title: "Properties",
    element: <Properties />,
  },
  {
    id: 3,
    path: "/contacts",
    title: "contacts",
    element: <Contacts />,
  },
];
