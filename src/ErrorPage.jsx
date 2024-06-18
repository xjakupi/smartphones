import { useRouteError } from "react-router-dom";
import Header from "../src/components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <Header />
      <div id="error-page-div">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}
