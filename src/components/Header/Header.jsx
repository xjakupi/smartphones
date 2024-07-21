import { NavLink } from "react-router-dom";
import { useContext, useEffect } from "react";
import "../Header/Header.css";
import { AppContext } from "../../App.js";

function Header() {
  const {
    phones,
    setFilteringPhones,
    activeBrand,
    setActiveBrand,
    activeStore,
    setActiveStore,
  } = useContext(AppContext);
  useEffect(() => {
    if (activeBrand === "") {
      setFilteringPhones(phones);
    }

    const filteringPhones = phones.filter((brand) =>
      brand.phonebrand.includes(activeBrand)
    );
    setFilteringPhones(filteringPhones);
  }, [activeBrand]);

  useEffect(() => {
    if (activeBrand === "") {
      setFilteringPhones(phones);
    }
    const filteringPhones = phones.filter((store) =>
      store.store.includes(activeStore)
    );
    setFilteringPhones(filteringPhones);
  }, [activeStore]);
  return (
    <div className="header-main">
      <div className="div-logo">
        <NavLink
          to={"/"}
          onClick={() => setActiveBrand("") || setActiveStore("")}
        >
          <h1 className="logo-name">Smartphones.mk</h1>
        </NavLink>
      </div>
      <div className="div-phone-models">
        <ul className="phone-models">
          <a onClick={() => setActiveBrand("Xiaomi")}>Xiaomi</a>
          <a onClick={() => setActiveBrand("Samsung")}>Samsung</a>
          <a onClick={() => setActiveBrand("Apple")}>Apple</a>
          <a onClick={() => setActiveBrand("")}>Poco</a>
          <a onClick={() => setActiveBrand("")}>Huawei</a>
          <a onClick={() => setActiveBrand("")}>Motorola</a>
          <a onClick={() => setActiveBrand("OnePlus")}>OnePlus</a>
          <a onClick={() => setActiveBrand("")}>Realme</a>
          <a onClick={() => setActiveBrand("")}>Oppo</a>
          <a onClick={() => setActiveBrand("")}>Honor</a>
        </ul>
      </div>
    </div>
  );
}

export default Header;
