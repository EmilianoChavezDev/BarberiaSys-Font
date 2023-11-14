import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { GrDocumentTxt } from "react-icons/gr";

export function Sidebar() {
  return (
    <Card className="h-screen w-[20rem] bg-gray-800 text-white">
      <div className="p-4">
        <Typography variant="h1" color="blue-gray" className="text-2xl">
          <a href="/">BarberiaSys</a>
        </Typography>
      </div>

      <div className="mx-4">
        <List className="text-base flex flex-col flex-grow">
          <ListItem className="py-3 transition duration-300 hover:bg-gray-700 hover:bg-opacity-50">
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5 mr-2" />
            </ListItemPrefix>
            <a
              href={"/ComprarProductos"}
              className="transition duration-300 hover:font-bold"
            >
              Comprar Productos
            </a>
          </ListItem>
          <ListItem className="py-3 transition duration-300 hover:bg-gray-700 hover:bg-opacity-50">
            <ListItemPrefix>
              <ShoppingBagIcon className="h-5 w-5 mr-2" />
            </ListItemPrefix>
            <a href="/" className="transition duration-300 hover:font-bold">
              Vender Productos
            </a>
          </ListItem>
          <ListItem className="py-2 transition duration-300 hover:bg-gray-700 hover:bg-opacity-50">
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5 mr-2" />
            </ListItemPrefix>
            <a
              href="/Clientes"
              className="transition duration-300 hover:font-bold"
            >
              Clientes
            </a>
          </ListItem>
          <ListItem className="py-2 transition duration-300 hover:bg-gray-700 hover:bg-opacity-50">
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5 mr-2" />
            </ListItemPrefix>
            <a
              href="/Empleados"
              className="transition duration-300 hover:font-bold"
            >
              Empleados
            </a>
          </ListItem>
          <ListItem className="py-2 transition duration-300 hover:bg-gray-700 hover:bg-opacity-50">
            <ListItemPrefix>
              <GrDocumentTxt />
            </ListItemPrefix>
            <a href="/Reportes" className="ml-2 transition duration-300 hover:font-bold">
              Reportes
            </a>
          </ListItem>
        </List>
      </div>
      <div className="mt-auto py-3 mx-3">
        <ListItem className="py-2 transition duration-300 hover:bg-gray-700 hover:bg-opacity-50">
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5 mr-2" />
          </ListItemPrefix>
          <span className="font-semibold transition duration-300 hover:font-bold">
            Cerrar Sesión
          </span>
        </ListItem>
      </div>
    </Card>
  );
}
