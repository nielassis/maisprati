import { Outlet } from "react-router-dom";
import NavBarTailwind from "../components/TailwindComponents/NavBar";
import FooterTailwind from "../components/TailwindComponents/Footer";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBarTailwind />
      <main className="flex-1 p-6 bg-gray-50">
        <Outlet />
      </main>
      <FooterTailwind />
    </div>
  );
}
