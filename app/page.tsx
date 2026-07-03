"use client";

import { useState } from "react";
import SearchBox from "@/components/SearchBox";
import RootBriefCard from "@/components/RootBriefCard";

export default function Home() {
  const [query, setQuery] = useState("");
  const [showBrief, setShowBrief] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    if (!query.trim()) return;

    setLoading(true);
    setShowBrief(false);

    setTimeout(() => {
      setLoading(false);
      setShowBrief(true);
    }, 3000);
  };

  const handleQuickSearch = (ticker: string) => {
    setQuery(ticker);

    setLoading(true);
    setShowBrief(false);

    setTimeout(() => {
      setLoading(false);
      setShowBrief(true);
    }, 3000);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-xl px-6 text-center">
        <h1 className="text-5xl font-bold">🌳 ROOT AI</h1>

        <p className="mt-4 text-lg text-gray-600">
          기업을 이해하면 미래가 보인다.
        </p>

        <p className="mt-2 text-sm text-gray-400">
          AI Investment Research Assistant
        </p>

        <SearchBox
          value={query}
          onChange={setQuery}
          onSearch={handleSearch}
        />

        {/* Popular Searches */}
        <div className="mt-8">
          <p className="mb-3 text-sm font-semibold text-gray-500">
            Popular Searches
          </p>

          <div className="flex flex-wrap justify-center gap-3">

            <button
              onClick={() => handleQuickSearch("Apple")}
              className="rounded-full bg-gray-100 px-4 py-2 transition hover:bg-green-100"
            >
              🍎 Apple
            </button>

            <button
              onClick={() => handleQuickSearch("TSLA")}
              className="rounded-full bg-gray-100 px-4 py-2 transition hover:bg-green-100"
            >
              ⚡ TSLA
            </button>

            <button
              onClick={() => handleQuickSearch("NVDA")}
              className="rounded-full bg-gray-100 px-4 py-2 transition hover:bg-green-100"
            >
              🟢 NVDA
            </button>

            <button
              onClick={() => handleQuickSearch("MSFT")}
              className="rounded-full bg-gray-100 px-4 py-2 transition hover:bg-green-100"
            >
              🔵 MSFT
            </button>

          </div>
        </div>

        {loading && (
          <div className="mt-10 rounded-2xl border bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold">
              🤖 AI Researching...
            </h2>

            <p className="mt-4 text-gray-500">
              📈 Analyzing business model...
            </p>

            <p className="text-gray-500">
              🏆 Comparing competitors...
            </p>

            <p className="text-gray-500">
              💰 Reading financial statements...
            </p>

            <p className="text-gray-500">
              🎯 Evaluating long-term investment...
            </p>
          </div>
        )}

        {showBrief && (
          <div className="mt-10">
            <RootBriefCard companyName={query} />
          </div>
        )}
      </div>
    </main>
  );
}