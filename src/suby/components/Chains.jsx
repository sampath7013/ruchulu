import React, { useEffect, useState } from "react";
import { API_URL } from "../../api";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { ClipLoader } from "react-spinners";
const Chains = () => {
  const [vendorData, setVendorData] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [loading, setLoading] = useState(true);
  const vendorFirmHandler = async () => {
    try {
      const res = await fetch(`${API_URL}/vendor/all-vendors`);
      const newData = await res.json();
      setVendorData(newData);
      console.log("this is api data", newData);
      setLoading(false);
    } catch (error) {
      alert("failed to fetch data");
      console.error("failed to fetch data", error);
      setLoading(true);
    }
  };
  const HandleScroll = (direction) => {
    const gallery = document.getElementById("chainGallery");
    const scrollAmount = 300;
    if (direction === "left") {
      gallery.scrollTo({
        left: gallery.scrollLeft - scrollAmount,
        behavior: "smooth",
      });
    } else if (direction === "right") {
      gallery.scrollTo({
        left: gallery.scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };
  useEffect(() => {
    vendorFirmHandler();
  }, []);
  return (
    <div className="mediaChainSection">
      <div className="loaderSection">
        {loading && <>
        <div className="loader">
            Your 🍽️ is Loading...
            </div>
              
            <ClipLoader
  size={80}
  color="#4fa94d"
  loading={loading}     // boolean flag you control
  aria-label="Loading Spinner"
/>
        </>
          
        }
      </div>

      <div className="btnSection">
        <button onClick={() => HandleScroll("left")}>
          <FaRegArrowAltCircleLeft className="btnIcons" />
        </button>
        <button onClick={() => HandleScroll("right")}>
          <FaRegArrowAltCircleRight className="btnIcons" />
        </button>
      </div>
      <h3>Top Restaurant chains in Hyderabad</h3>
      <section
        className="chainSection"
        id="chainGallery"
        onScroll={(e) => setScrollPosition(e.target.scrollLeft)}
      >
        {vendorData.vendors &&
          vendorData.vendors.map((vendor) => {
            return (
              <>
                <div key={vendor._id} className="vendorBox">
                  {vendor.firm.map((item) => {
                    return (
                      <>
                        <div>{item.firmName}</div>
                        <div className="firmImage">
                          <img src={`${API_URL}/uploads/${item.image}`} />
                        </div>
                      </>
                    );
                  })}
                </div>
              </>
            );
          })}
      </section>
    </div>
  );
};

export default Chains;
