"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html>
      <body className="flex min-h-screen flex-col items-center justify-center bg-white text-center text-red-600">
        <h2 className="text-2xl font-bold mb-4">
          予期しないエラーが発生しました
        </h2>
        <p className="mb-4">しばらくしてから再度お試しください。</p>
        <button
          onClick={() => reset()}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          リロードする
        </button>
      </body>
    </html>
  );
}
