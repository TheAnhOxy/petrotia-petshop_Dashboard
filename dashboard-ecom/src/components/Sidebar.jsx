"use client";

import { useState } from "react";
import {
  HiChartPie,
  HiShoppingBag,
  HiUser,
  HiCog,
  HiLockClosed,
  HiPlay,
  HiEye,
  HiChevronDown,
  HiChevronRight,
  HiChartBar, // thêm icon cho Statistics
} from "react-icons/hi";

function Sidebar({ darkMode, onItemClick }) {
  const [openSections, setOpenSections] = useState({
    ecommerce: false,
    users: false,
    statistics: false, // thêm toggle cho Statistics
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <aside
      className={`fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 shadow-xl transition-colors ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
      }`}
    >
      <div className="h-full overflow-y-auto py-4 px-3">
        <nav className="space-y-1">
          {/* Dashboard */}
          <button
            onClick={() => onItemClick && onItemClick("dashboard")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
              darkMode
                ? "hover:bg-gray-800 text-gray-300 hover:text-white"
                : "hover:bg-[#f5d7b7] text-gray-700 hover:text-[#7b4f35]"
            }`}
          >
            <HiChartPie className="h-5 w-5" />
            <span className="font-medium">Dashboard</span>
          </button>

          {/* Statistics Section */}
          <div>
            <button
              onClick={() => toggleSection("statistics")}
              className={`w-full flex items-center justify-between gap-3 px-4 py-3 rounded-lg transition-all ${
                darkMode
                  ? "hover:bg-gray-800 text-gray-300 hover:text-white"
                  : "hover:bg-[#f5d7b7] text-gray-700 hover:text-[#7b4f35]"
              }`}
            >
              <div className="flex items-center gap-3">
                <HiChartBar className="h-5 w-5" />
                <span className="font-medium">Statistics</span>
              </div>
              {openSections.statistics ? (
                <HiChevronDown className="h-4 w-4" />
              ) : (
                <HiChevronRight className="h-4 w-4" />
              )}
            </button>

            {openSections.statistics && (
              <div className="ml-4 mt-1 space-y-1 border-l-2 border-gray-200 dark:border-gray-700 pl-4">
                <button
                  onClick={() =>
                    onItemClick && onItemClick("revenue-statistics")
                  }
                  className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-all ${
                    darkMode
                      ? "hover:bg-gray-800 text-gray-400 hover:text-white"
                      : "hover:bg-[#f5d7b7] text-gray-600 hover:text-[#7b4f35]"
                  }`}
                >
                  Revenue Statistics
                </button>
                <button
                  onClick={() => onItemClick && onItemClick("pet-statistics")}
                  className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-all ${
                    darkMode
                      ? "hover:bg-gray-800 text-gray-400 hover:text-white"
                      : "hover:bg-[#f5d7b7] text-gray-600 hover:text-[#7b4f35]"
                  }`}
                >
                  Pet Statistics
                </button>
              </div>
            )}
          </div>

          {/* Ecommerce Section */}
          <div>
            <button
              onClick={() => toggleSection("ecommerce")}
              className={`w-full flex items-center justify-between gap-3 px-4 py-3 rounded-lg transition-all ${
                darkMode
                  ? "hover:bg-gray-800 text-gray-300 hover:text-white"
                  : "hover:bg-[#f5d7b7] text-gray-700 hover:text-[#7b4f35]"
              }`}
            >
              <div className="flex items-center gap-3">
                <HiShoppingBag className="h-5 w-5" />
                <span className="font-medium">Ecommerce</span>
              </div>
              {openSections.ecommerce ? (
                <HiChevronDown className="h-4 w-4" />
              ) : (
                <HiChevronRight className="h-4 w-4" />
              )}
            </button>

            {openSections.ecommerce && (
              <div className="ml-4 mt-1 space-y-1 border-l-2 border-gray-200 dark:border-gray-700 pl-4">
                <button
                  onClick={() => onItemClick && onItemClick("products")}
                  className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-all ${
                    darkMode
                      ? "hover:bg-gray-800 text-gray-400 hover:text-white"
                      : "hover:bg-[#f5d7b7] text-gray-600 hover:text-[#7b4f35]"
                  }`}
                >
                  Products
                </button>
                <button
                  onClick={() => onItemClick && onItemClick("invoices")}
                  className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-all ${
                    darkMode
                      ? "hover:bg-gray-800 text-gray-400 hover:text-white"
                      : "hover:bg-[#f5d7b7] text-gray-600 hover:text-[#7b4f35]"
                  }`}
                >
                  Invoices
                </button>
                <button
                  onClick={() => onItemClick && onItemClick("create-invoice")}
                  className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-all ${
                    darkMode
                      ? "hover:bg-gray-800 text-gray-400 hover:text-white"
                      : "hover:bg-[#f5d7b7] text-gray-600 hover:text-[#7b4f35]"
                  }`}
                >
                  Create Invoice
                </button>
                <button
                  onClick={() => onItemClick && onItemClick("billings")}
                  className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-all ${
                    darkMode
                      ? "hover:bg-gray-800 text-gray-400 hover:text-white"
                      : "hover:bg-[#f5d7b7] text-gray-600 hover:text-[#7b4f35]"
                  }`}
                >
                  Billings
                </button>
                <button
                  onClick={() => onItemClick && onItemClick("transactions")}
                  className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-all ${
                    darkMode
                      ? "hover:bg-gray-800 text-gray-400 hover:text-white"
                      : "hover:bg-[#f5d7b7] text-gray-600 hover:text-[#7b4f35]"
                  }`}
                >
                  Transactions
                </button>
              </div>
            )}
          </div>

          {/* Users Section */}
          <div>
            <button
              onClick={() => toggleSection("users")}
              className={`w-full flex items-center justify-between gap-3 px-4 py-3 rounded-lg transition-all ${
                darkMode
                  ? "hover:bg-gray-800 text-gray-300 hover:text-white"
                  : "hover:bg-[#f5d7b7] text-gray-700 hover:text-[#7b4f35]"
              }`}
            >
              <div className="flex items-center gap-3">
                <HiUser className="h-5 w-5" />
                <span className="font-medium">Users</span>
              </div>
              {openSections.users ? (
                <HiChevronDown className="h-4 w-4" />
              ) : (
                <HiChevronRight className="h-4 w-4" />
              )}
            </button>

            {openSections.users && (
              <div className="ml-4 mt-1 space-y-1 border-l-2 border-gray-200 dark:border-gray-700 pl-4">
                <button
                  onClick={() => onItemClick && onItemClick("users")}
                  className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-all ${
                    darkMode
                      ? "hover:bg-gray-800 text-gray-400 hover:text-white"
                      : "hover:bg-[#f5d7b7] text-gray-600 hover:text-[#7b4f35]"
                  }`}
                >
                  All Users
                </button>
                <button
                  onClick={() => onItemClick && onItemClick("user-settings")}
                  className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-all ${
                    darkMode
                      ? "hover:bg-gray-800 text-gray-400 hover:text-white"
                      : "hover:bg-[#f5d7b7] text-gray-600 hover:text-[#7b4f35]"
                  }`}
                >
                  Settings
                </button>
                <button
                  onClick={() => onItemClick && onItemClick("user-profiles")}
                  className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-all ${
                    darkMode
                      ? "hover:bg-gray-800 text-gray-400 hover:text-white"
                      : "hover:bg-[#f5d7b7] text-gray-600 hover:text-[#7b4f35]"
                  }`}
                >
                  Profiles
                </button>
              </div>
            )}
          </div>

          {/* Settings */}
          <button
            onClick={() => onItemClick && onItemClick("settings")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
              darkMode
                ? "hover:bg-gray-800 text-gray-300 hover:text-white"
                : "hover:bg-[#f5d7b7] text-gray-700 hover:text-[#7b4f35]"
            }`}
          >
            <HiCog className="h-5 w-5" />
            <span className="font-medium">Settings</span>
          </button>

          {/* Pages */}
          <button
            onClick={() => onItemClick && onItemClick("pages")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
              darkMode
                ? "hover:bg-gray-800 text-gray-300 hover:text-white"
                : "hover:bg-[#f5d7b7] text-gray-700 hover:text-[#7b4f35]"
            }`}
          >
            <HiLockClosed className="h-5 w-5" />
            <span className="font-medium">Pages</span>
          </button>

          {/* Playground */}
          <button
            onClick={() => onItemClick && onItemClick("playground")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
              darkMode
                ? "hover:bg-gray-800 text-gray-300 hover:text-white"
                : "hover:bg-[#f5d7b7] text-gray-700 hover:text-[#7b4f35]"
            }`}
          >
            <HiPlay className="h-5 w-5" />
            <span className="font-medium">Playground</span>
          </button>

          {/* View Pro Version */}
          <button
            onClick={() => onItemClick && onItemClick("view-pro")}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-[#7b4f35] text-white hover:bg-[#6a4330] transition-all"
          >
            <HiEye className="h-5 w-5" />
            <span className="font-medium">View Pro Version</span>
          </button>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
