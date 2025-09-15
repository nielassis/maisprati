import React from "react";

export default function NavBarTailwind() {
  return (
    <nav className="w-full bg-[#4B3EC4] shadow-md px-4 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-center text-center gap-2">
      <div className="px-4 py-2 bg-white text-black rounded-full font-semibold text-sm">
        Condição especial!
      </div>

      <div className="flex sm:items-center justify-center gap-1 text-white font-semibold">
        <span>Descontos</span>
        <span>em todo site!</span>
      </div>
    </nav>
  );
}
