import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import tear from "../assets/img/tear.svg";
import Card from "../components/Card";

const Home = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://lereacteur-vinted-api.herokuapp.com/offers"
      );
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return isLoading ? (
    <p>En cours de chargement</p>
  ) : (
    <>
      <div className="home-container">
        <img className="forme" src={tear} alt="forme" />
        <div>
          <div className="home-ready">
            Prêts à faire du tri dans vos placards ?
            <button>Commencer à vendre</button>
          </div>
        </div>
      </div>
      <div className="annonces">
        {data.offers &&
          data.offers.map((offer, index) => {
            return (
              <Link to={`/offer/${offer._id}`} key={offer._id}>
                <Card key={index} data={offer} />
              </Link>
            );
          })}
      </div>
    </>
  );
};

export default Home;
