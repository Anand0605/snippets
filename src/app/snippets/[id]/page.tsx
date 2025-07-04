import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";
import Link from "next/link";
import * as actions from "@/actions"

// Props for dynamic route
type SnippetDetailsProps = {
  params: { id: string };
};

const SnippetDetailPage = async ({ params }: SnippetDetailsProps) => {
  const id = parseInt(params.id);

  await new Promise((r)=>setTimeout(r,2000))

  if (isNaN(id)) {
    throw new Error("Invalid snippet ID");
  }

  const snippet = await prisma.snippet.findUnique({
    where: { id },
  });

  if (!snippet) {
    return notFound();
  }


  const deleteSnippetActions = actions.deleteSnippet.bind(null,snippet.id)
  return (
    <section className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md border">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-800">{snippet.title}</h1>
        <div className="flex gap-2">
          <Link href={`/snippets/${snippet.id}/edit`}>
            <Button>Edit</Button>
          </Link>
          <form action={deleteSnippetActions} ><Button variant="destructive" type="submit">Delete</Button></form>
        </div>
      </div>

      {/* Styled Code Block */}
      <div className="rounded-lg overflow-auto bg-[#0A192F] p-5 shadow-inner">
        <pre className="whitespace-pre-wrap text-sm font-mono text-[#00FFFF]">
          <code>{snippet.code}</code>
        </pre>
      </div>
    </section>
  );
};

export default SnippetDetailPage;
