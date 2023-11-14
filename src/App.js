import "./App.css";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <div className="App flex">
      {/* Sidebar */}
      <div className="bg-gray-100 h-screen">
        <Sidebar />
      </div>

      {/* Rest of the content */}
      <div className="flex-grow">
        {/* Aquí puedes colocar el resto del contenido de tu aplicación */}
      </div>
    </div>
  );
}

export default App;
