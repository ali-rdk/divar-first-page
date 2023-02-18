import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import AddSection from "./components/AdSection";
import EL from "./utils/EL.js";

const App = ()=>{
    const page = EL({
        element: 'div',
        children: [
            Navbar(),
            Sidebar(),
            AddSection()
        ]
    })
    return page;
}

export default App; 