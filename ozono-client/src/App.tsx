import { BrowserRouter as Router } from "react-router-dom";
import MainRoutes from "./routes/routes";
function App() {
  return (
    <div>
      <Router>
      <MainRoutes />
    </Router>
    </div>
  );
}
export default App;
