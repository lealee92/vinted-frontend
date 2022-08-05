import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Offer = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
      );
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [id]);
  return isLoading ? (
    <p>En cours de chargement</p>
  ) : (
    <div className="offer-body">
      <img
        className="offer-picture"
        src={data.product_name}
        alt={data.product_name}
      />
      {/* // pose problème s'il n'y a pas isLoading pck on cherche plus loin  */}
      {data.product_details.map((elem, index) => {
        const keys = Object.keys(elem);
        return (
          <p key={index}>
            {keys[0]} {elem[keys[0]]}
          </p>
        );
      })}
    </div>
  );
};

export default Offer;
