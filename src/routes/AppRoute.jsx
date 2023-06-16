
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "../components/pages/User";
import Admin from "../components/pages/Admin";
import AdminCustomerList from "../components/pages/AdminCustomerList";
import Support from "../components/pages/Support";

export default function AppRoute() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/User" element={<User />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/AdminCustomerList" element={<AdminCustomerList />} />
          <Route path="/Support" element={<Support />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}