"use client";

import { useState } from "react";
import SearchBox from "@/components/SearchBox";
import RootBriefCard from "@/components/RootBriefCard";
export default function Home() {
  const [query, setQuery] = useState("");
  const [showBrief, setShowBrief] = useState(false);
  const handleSearch = () => {
    console.log("검색 버튼 클릭!");
    
    if (!query.trim()) return;
  
    setShowBrief(true);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-xl px-6 text-center">
        <h1 className="text-5xl font-bold">🌳 ROOT AI</h1>

        <p className="mt-4 text-gray-600 text-lg">
          기업을 이해하면 미래가 보인다.
        </p>

        <SearchBox
          value={query}
          onChange={setQuery}
          onSearch={handleSearch}
        />
        {showBrief && (
          <div className="mt-10">
            <RootBriefCard companyName={query} />
          </div>
        )}
      </div>
    </main>
  );
}
