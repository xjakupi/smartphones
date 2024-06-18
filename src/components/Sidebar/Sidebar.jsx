import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useState, useContext } from "react";
import "../Sidebar/Sidebar.css";
import FilterIcon from "../assets/icons/filter.png";
import { AppContext } from "../../App";
import { motion } from "framer-motion";

function Sidebar() {
  const { searchPhones, setSearchPhones } = useContext(AppContext);
  const { phones, setActiveBrand } = useContext(AppContext);
  const [filteredPhones, setFilteredPhones] = useState(phones);
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <h4 className="checkbox-filters-h4-mobile">Stores</h4>
        <div className="checkbox-div-mobile">
          <input
            type="checkbox"
            name="checkbox-filter"
            id="checkbox-filter"
            className="checkbox-filter"
          />
          <label className="checkbox-label">Ledikom</label>
        </div>
        <div className="checkbox-div-mobile">
          <input
            type="checkbox"
            name="checkbox-filter"
            id="checkbox-filter"
            className="checkbox-filter"
          />
          <label className="checkbox-label">Anhoch</label>
        </div>
        <div className="checkbox-div-mobile">
          <input
            type="checkbox"
            name="checkbox-filter"
            id="checkbox-filter"
            className="checkbox-filter"
          />
          <label className="checkbox-label">Mobelix</label>
        </div>
        <div className="checkbox-div-mobile">
          <input
            type="checkbox"
            name="checkbox-filter"
            id="checkbox-filter"
            className="checkbox-filter"
          />
          <label className="checkbox-label">Neptun</label>
        </div>
        <div className="checkbox-div-mobile">
          <input
            type="checkbox"
            name="checkbox-filter"
            id="checkbox-filter"
            className="checkbox-filter"
          />
          <label className="checkbox-label">Setec</label>
        </div>
        <Divider />
        <h4 className="checkbox-filters-h4-mobile">Brands</h4>

        <div className="checkbox-div-mobile">
          <input
            type="checkbox"
            name="checkbox-filter"
            id="checkbox-filter"
            className="checkbox-filter"
            onClick={() => setActiveBrand("Xiaomi")}
          />
          <label className="checkbox-label">Xiaomi</label>
        </div>
        <div className="checkbox-div-mobile">
          <input
            type="checkbox"
            name="checkbox-filter"
            id="checkbox-filter"
            className="checkbox-filter"
            onClick={() => setActiveBrand("Samsung")}
          />
          <label className="checkbox-label">Samsung</label>
        </div>
        <div className="checkbox-div-mobile">
          <input
            type="checkbox"
            name="checkbox-filter"
            id="apple"
            className="checkbox-filter"
            onClick={() => setActiveBrand("Apple")}
          />
          <label className="checkbox-label">Apple</label>
        </div>
        <div className="checkbox-div-mobile">
          <input
            type="checkbox"
            name="checkbox-filter"
            id="checkbox-filter"
            className="checkbox-filter"
            onClick={() => setActiveBrand("")}
          />
          <label className="checkbox-label">Huawei</label>
        </div>
        <div className="checkbox-div-mobile">
          <input
            type="checkbox"
            name="checkbox-filter"
            id="checkbox-filter"
            className="checkbox-filter"
            onClick={() => setActiveBrand("OnePlus")}
          />
          <label className="checkbox-label">OnePlus</label>
        </div>
      </List>
      {/* <List>
         {['Ledikom', 'Anhoch', 'Mobelix', 'Neptun', 'Setec'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
             
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))} 
          <ListItem className='listitem1'>
            <h3>Stores</h3>
            <ListItemButton>Ledikom</ListItemButton>
            <ListItemButton>Anhoch</ListItemButton>
            <ListItemButton>Mobelix</ListItemButton>
            <ListItemButton>Neptun</ListItemButton>
            <ListItemButton>Setec</ListItemButton>




          </ListItem>
        
      </List>
      <Divider />
      <List>
        <ListItem className='listitem1'>
          <h3>Brands</h3>
          <ListItemButton>Xiaomi</ListItemButton>
          <ListItemButton>Samsung </ListItemButton>
          <ListItemButton>Apple</ListItemButton>
          <ListItemButton>Huawei</ListItemButton>
          <ListItemButton>OnePlus</ListItemButton>





        </ListItem>
      </List> */}
    </Box>
  );
  return (
    <div className="sidebar-main">
      <div className="search-bar-main-div">
        <div>
          <img
            src={FilterIcon}
            alt="filter-icon"
            className="filter-icon"
            onClick={toggleDrawer("left", true)}
          />
          <Drawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
        </div>
        <input
          type="search"
          name="search-inp"
          id="filter-searchbox-default"
          placeholder="Search"
          className="filter-searchbox"
          onChange={(e) => setSearchPhones(e.target.value)}
        />
      </div>
      <div id="filters" className="filters-div">
        <h4 className="checkbox-filters-h4">Stores</h4>
        <div className="checkbox-div">
          <input
            type="checkbox"
            name="checkbox-filter"
            id="checkbox-filter"
            className="checkbox-filter"
          />
          <label className="checkbox-label">Ledikom</label>
        </div>
        <div className="checkbox-div">
          <input
            type="checkbox"
            name="checkbox-filter"
            id="checkbox-filter"
            className="checkbox-filter"
          />
          <label className="checkbox-label">Anhoch</label>
        </div>
        <div className="checkbox-div">
          <input
            type="checkbox"
            name="checkbox-filter"
            id="checkbox-filter"
            className="checkbox-filter"
          />
          <label className="checkbox-label">Mobelix</label>
        </div>
        <div className="checkbox-div">
          <input
            type="checkbox"
            name="checkbox-filter"
            id="checkbox-filter"
            className="checkbox-filter"
          />
          <label className="checkbox-label">Neptun</label>
        </div>
        <div className="checkbox-div">
          <input
            type="checkbox"
            name="checkbox-filter"
            id="checkbox-filter"
            className="checkbox-filter"
          />
          <label className="checkbox-label">Setec</label>
        </div>
        <div>
          <div id="filters" className="filters-div">
            <h4 className="checkbox-filters-h4">Brands</h4>

            <div className="checkbox-div">
              <input
                type="checkbox"
                name="checkbox-filter"
                id="checkbox-filter"
                className="checkbox-filter"
              />
              <label className="checkbox-label">Xiaomi</label>
            </div>
            <div className="checkbox-div">
              <input
                type="checkbox"
                name="checkbox-filter"
                id="checkbox-filter"
                className="checkbox-filter"
              />
              <label className="checkbox-label">Samsung</label>
            </div>
            <div className="checkbox-div">
              <input
                type="checkbox"
                name="checkbox-filter"
                id="checkbox-filter"
                className="checkbox-filter"
              />
              <label className="checkbox-label">Apple</label>
            </div>
            <div className="checkbox-div">
              <input
                type="checkbox"
                name="checkbox-filter"
                id="checkbox-filter"
                className="checkbox-filter"
              />
              <label className="checkbox-label">Huawei</label>
            </div>
            <div className="checkbox-div">
              <input
                type="checkbox"
                name="checkbox-filter"
                id="checkbox-filter"
                className="checkbox-filter"
              />
              <label className="checkbox-label">OnePlus</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
