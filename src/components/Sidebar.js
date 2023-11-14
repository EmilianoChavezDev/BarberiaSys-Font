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

export function Sidebar() {
  return (
    <Card className="h-screen w-[20rem] bg-gray-800 text-white">
      <div className="p-4">
        <Typography variant="h5" color="blue-gray">
          BarberiaSys
        </Typography>
      </div>

      <div className="mx-4">
        <List className="text-base flex flex-col flex-grow">
          <ListItem className="py-3">
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5 mr-2" />
            </ListItemPrefix>
            Comprar Productos
          </ListItem>
          <ListItem className="py-3">
            <ListItemPrefix>
              <ShoppingBagIcon className="h-5 w-5 mr-2" />
            </ListItemPrefix>
            Vender Productos
          </ListItem>
          <ListItem className="py-2">
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5 mr-2" />
            </ListItemPrefix>
            Clientes
          </ListItem>
          <ListItem className="py-2">
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5 mr-2" />
            </ListItemPrefix>
            Empleados
          </ListItem>
        </List>
      </div>
      <div className="mt-auto py-3 mx-3">
        <ListItem className="py-2">
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5 mr-2" />
          </ListItemPrefix>
          Cerrar Sesión
        </ListItem>
      </div>
    </Card>
  );
}
