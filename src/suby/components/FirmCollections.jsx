import React, { useState, useEffect } from "react";
import { API_URL } from "../../api";
import { Link } from "react-router-dom";

const FirmCollections = () => {
  const [firmData, setFirmData] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [activeCategory, setActiveCategory] = useState("all");

  const firmDataHandler = async () => {
    try {
      const res = await fetch(`${API_URL}/vendor/all-vendors`);
      const newData = await res.json();
      setFirmData(newData.vendors);
      console.log("this is firm data", newData);
    } catch (error) {
      alert("failed to fetch firm data");
      console.error("failed to fetch data", error);
    }
  };

  useEffect(() => {
    firmDataHandler();
  }, []);
  const filterHandler = (region, category) => {
    setSelectedRegion(region);
    setActiveCategory(category);
  };

  return (
    <>
      <h3>Restuarants with online food delivery in Hyderabad</h3>
      <div className="filterButtons">
        <button onClick={() => filterHandler("All",'all')} className={activeCategory === "all" ? "activeButton" : ""}>All</button>
        <button onClick={() => filterHandler("south-indian",'South-Indian')} className={activeCategory === "South-Indian" ? "activeButton" : ""}>South-Indian</button>
        <button onClick={() => filterHandler("north-indian",'North-Indian')} className={activeCategory === "North-Indian" ? "activeButton" : ""}>North-Indian</button>
        <button onClick={() => filterHandler("chinese",'Chinese')} className={activeCategory === "Chinese" ? "activeButton" : ""}>Chinese</button>
        <button onClick={() => filterHandler("bakery",'Bakery')} className={activeCategory === "Bakery" ? "activeButton" : ""}>Bakery</button>
      </div>
      <section className="firmSection">
        {firmData.map((apple) => {
            return apple.firm.map((item)=>{
                if(selectedRegion === "All" || item.region.includes(selectedRegion.toLocaleLowerCase())){
                    
                        return (
                          <Link
                            to={`/products/${item._id}/${item.firmName}`}
                            className="link"
                          >
                            <div className="firmGroupBox">
                              <div className="firmGroup">
                                <img src={`${API_URL}/uploads/${item.image}`} />
                                <div className="firmOffer">{item.offer}</div>
                              </div>
                              <div className="firmDetails">
                                <strong>{item.firmName}</strong>
                                <div className="firmArea">{item.region.join(", ")}</div>
                                <div className="firmArea">{item.area}</div>
                              </div>
                            </div>
                          </Link>
                        );
                }
            })
          return null;
        })}
      </section>
    </>
  );
};

export default FirmCollections;
