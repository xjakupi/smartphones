import { useLocation, useParams } from "react-router";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import "../Products/Products.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import {motion} from "framer-motion"

const Products = () => {
  const params = useParams();
  let { state } = useLocation();

  console.log(params);
  console.log("state", state);

  return (
    <>
      <Header />
      <motion.div  className="products-main-div">
        <img
          src={state.phoneimg}
          alt={state.phonemodel}
          className="state-phoneimg"
        />
        <div className="products-second-div">
          <h1>{params.phonemodel}</h1>
          <p>{state.description}</p>
          <div className="price-button-div">
            <p className="state-phone-model-price">{state.phoneprice}</p>
            <Link to={state.specs}>
              <Button variant="contained" size="small">
                Specifications
              </Button>
              {/* <button>Specifications</button> */}
            </Link>
          </div>
        </div>
      </motion.div>
      <div className="products-right-div"> </div>
    </>
  );
};

export default Products;
