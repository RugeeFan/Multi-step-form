import { Navigate } from "react-router-dom";
import AddOn from "../components/AddOn";
import PersonaInfo from "../components/PersonaInfo";
import SelectPlan from "../components/SelectPlan";
import Summary from "../components/Summary";
import ThankYou from "../components/ThankYou";

const routes = [
  {
    path: "/",
    element: <Navigate to="/personalinfo" />
  },

  {
    path: "/personalinfo",
    element: <PersonaInfo />
  },
  {
    path: "/addon",
    element: <AddOn />
  },
  {
    path: "/selectplan",
    element: <SelectPlan />
  },
  {
    path: "/summary",
    element: <Summary />
  },
  {
    path: "/thankyou",
    element: <ThankYou />
  }

]

export default routes;