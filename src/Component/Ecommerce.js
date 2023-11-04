import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Ecommercenav } from "./Ecommercenav";

export const Ecommerce = () => {
  const [fakeapi, setFakeapi] = useState([]);
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const [filtering, setFiltering] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setFakeapi(json));
  }, []);

  const elect = (e) => {
    // console.log(e.target.innerText)
    const newSet = fakeapi.filter(
      (fakeapp) => fakeapp.category === e.target.innerText
    );
    setFiltering(newSet);
  };

  // n
  const dataSearch = fakeapi.filter((item) => {});

  const hell = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    const filteredApi = fakeapi.filter(({ title, id, category }) => {
      return category.toLowerCase().includes(search);
    });
    setFiltering(filteredApi);
  }, [fakeapi, search]);

  return (
    <div>
      {/* {
        fakeapi.map((h)=>{
            return (
                <div>
                <button>{new Set(h.category)}</button>
                
                </div>
            )
        })
    } */}
      <Ecommercenav elect={elect} hell={hell} />

      {/* <div style={{display: 'grid', gridTemplateColumns: "auto auto auto auto",gap: "50px"}}> */}
      <div className="row">
        {filtering.map(
          ({ title, description, price, image, id, category, rating }) => {
            return (
              <div
                style={{ height: "100vh", marginBottom: "-200px" }}
                className="col-md-3"
                key={id}
              >
            <Card className="mt-4" style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>{id}</Card.Title>

                    <Card.Img
                      variant="top"
                      style={{ height: "200px", width: "200px" }}
                      src={image}
                    />
                    <Card.Title>{title.slice(0, 10) + "...."}</Card.Title>
                    <Card.Text style={{ fontSize: "10px" }}>
                      {description.slice(0, 100) + "..."}
                    </Card.Text>
                    <Button variant="primary">{category}</Button>
                    <Card.Title className="mt-2">${price}</Card.Title>
                    <Card.Title>*{rating.rate}</Card.Title>
                  </Card.Body>
                </Card>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};
