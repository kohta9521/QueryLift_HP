import Link from "next/link";

export default function NotFound() {
  return (
    <html>
      <body className="flex min-h-screen flex-col items-center justify-center bg-white text-center text-gray-700">
        <h2 className="text-3xl font-bold mb-4">ページが見つかりません</h2>
        <p className="mb-4">
          お探しのページは存在しないか、移動された可能性があります。
        </p>
        <Link
          href="/"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          ホームに戻る
        </Link>
      </body>
    </html>
  );
}
