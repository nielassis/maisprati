import { Link } from "react-router-dom";

export default function NavBarTailwind() {
  return (
    <nav className="w-full bg-[#4B3EC4] shadow-md px-4 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between text-center gap-2">
      <div className="flex justify-center items-center gap-2">
        <div className="px-4 py-2 bg-white text-black rounded-full font-semibold text-sm">
          Special condition!
        </div>

        <div className="flex sm:items-center justify-center gap-1 text-white font-semibold">
          <span>Discounts</span>
          <span>on the whole site!</span>
        </div>
      </div>

      <div className="justify-end flex items-end">
        <span>
          <Link to="/favorites" className="text-white">
            🤍
          </Link>
        </span>
      </div>
    </nav>
  );
}
