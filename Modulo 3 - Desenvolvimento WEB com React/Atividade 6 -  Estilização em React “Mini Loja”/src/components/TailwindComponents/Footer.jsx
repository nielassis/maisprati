import React from "react";

export default function FooterTailwind() {
  return (
    <nav className="w-full justify-center items-center   bg-[#4B3EC4] shadow-md px-4 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-center text-center gap-2">
      <span className="text-white flex gap-1">
        Feito por{" "}
        <a href="https://github.com/nielassis" target="_blank">
          <p className="underline cursor-pointer text-white">Daniel Assis</p>
        </a>
      </span>
    </nav>
  );
}
