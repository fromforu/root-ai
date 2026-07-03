"use client";

type SearchBoxProps = {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
};

export default function SearchBox({
  value,
  onChange,
  onSearch,
}: SearchBoxProps) {
  return (
    <>
      <input
        type="text"
        value={value}
        placeholder="기업명 또는 티커를 입력하세요"
        className="mt-10 w-full rounded-xl border border-gray-300 px-5 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-green-600"
        onChange={(event) => onChange(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            onSearch();
          }
        }}
      />

      <button
        type="button"
        className="mt-5 w-full rounded-xl bg-green-700 py-4 text-lg font-semibold text-white transition hover:bg-green-800"
        onClick={onSearch}
      >
        검색
      </button>
    </>
  );
}
