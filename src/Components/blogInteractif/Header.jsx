import React from "react";

function Header() {
  return (
    <header className="bg-cyan-500 text-white py-4 shadow-md">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">Med-store</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:underline">
                Accueil
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Produits
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
