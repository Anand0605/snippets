import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function Home() {
  const snippets = await prisma.snippet.findMany();

  return (
    <section className="max-w-4xl mx-auto py-10 px-4">
      {/* Page Heading */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Code Snippet Manager</h1>
        <p className="text-gray-600 mt-2">Manage and view all your saved code snippets.</p>
      </header>

      {/* Snippets Header + New Button */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">All Snippets</h2>
        <Link href="/snippets/new">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">+ New Snippet</Button>
        </Link>
      </div>

      {/* Snippet List */}
      <div className="space-y-4">
        {snippets.length === 0 ? (
          <p className="text-gray-500">No snippets found. Click "New Snippet" to add one.</p>
        ) : (
          snippets.map((snippet) => (
            <div
              key={snippet.id}
              className="flex items-center justify-between border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-medium text-gray-800">{snippet.title}</h3>
              <Link href={`/snippets/${snippet.id}`}>
                <Button variant="link" className="text-blue-600 hover:text-blue-800">
                  View
                </Button>
              </Link>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
