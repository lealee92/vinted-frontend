import React from "react";
import "../containers/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "../components/Header";
import Home from "../pages/Home";
import Offer from "../pages/Offer";

function App() {
  // const [data, setData] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get(
  //       "https://lereacteur-vinted-api.herokuapp.com/offers"
  //     );
  //     setData(response.data);
  //     setIsLoading(false);
  //   };
  //   fetchData();
  // }, []);
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/offer/:id" element={<Offer />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
