import React, { useState, useEffect } from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import TabBar from "./TabBar";

const CollapsibleHeader = ({ tabs, activeTab, onTabChange, onSearch }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerHeight = 180; // Approximate height of the header
  const opacity = Math.max(0, 1 - scrollY / headerHeight);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-10"
      style={{
        transform: `translateY(-${Math.min(scrollY, headerHeight)}px)`,
        opacity: opacity,
      }}
    >
      <Header />
      <SearchBar onSearch={onSearch} />
      <TabBar tabs={tabs} activeTab={activeTab} onTabChange={onTabChange} />
    </div>
  );
};

export default CollapsibleHeader;
