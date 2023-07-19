import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import CustomButton from '../components/customButton/customButton'
import { faX } from "@fortawesome/free-solid-svg-icons";
import userContext from "../components/useContext";

const BlankLayout = () => {
  // const [selectSport, setSelectSport] = useState([])
  // const [selectState, setSelectState] = useState([])
  const [selectedValue, setSelectedValue] = useContext(userContext)

  return (
    <div className="landingPage">

      <Header />
      {selectedValue.length > 0 && <div className='campSearchSelected' >
        {selectedValue.map((_, i) => {
          return <CustomButton key={i} text={_} icon={faX} />
        })}
      </div>}
      <div className='outletDiv' style={{ marginTop: selectedValue.length > 0 ? '0' : '64px' }}>
        <Outlet />
      </div>

      <Footer />

    </div>

  );
};
export default BlankLayout;
