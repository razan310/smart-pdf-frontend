
"use client";

import { useState } from "react";
import UploadForm from "./components/UploadForm";

export default function Home() {
  const [data, setData] = useState(null);

  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="py-2 text-2xl text-center uppercase font-bold mb-10">
        Upload Property Brochure (PDF)
      </h1>

      <UploadForm onExtractedData={setData} />

      {data && (
        <div className="mt-8 bg-white shadow-md rounded-lg p-6 border border-gray-200">
          <h2 className="text-xl text-black font-semibold mb-4 border-b pb-2">
            Extracted Property Data
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {Object.entries(data).map(([key, value]) => (
              <div
                key={key}
                className="flex flex-col border border-gray-100 rounded p-3 bg-gray-50 hover:bg-gray-100 transition"
              >
                <span className="text-xs text-gray-500 uppercase tracking-wide">
                  {key.replace(/_/g, " ")}
                </span>
                <span className="text-sm text-gray-800 font-medium break-words">
                  {String(value) || "-"}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
