"use client";

import { useState } from "react";
import axios from "axios";

export default function UploadForm({ onExtractedData }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    setLoading(true);

    try {
        
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/parse-pdf`, // ✅ استخدم env بدل الرابط الصريح
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      onExtractedData(res.data.data);
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.error || "Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <label className="inline-flex items-center justify-center bg-gray-100 text-gray-800 px-5 py-2 rounded-lg border border-gray-300 shadow-sm cursor-pointer hover:bg-gray-200 transition-all">
        <span className="font-medium">Choose File</span>
        <input
          type="file"
          accept=".pdf"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="hidden"
        />
      </label>
      <button
        onClick={handleUpload}
        disabled={!file || loading}
        className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg font-medium disabled:opacity-50 hover:opacity-90 transition-all"
      >
        {loading ? "Uploading..." : "Upload"}
      </button>
    </div>
  );
}
