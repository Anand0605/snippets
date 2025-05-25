import EditSnippetForm from "@/components/EditSnippetForm";
import { prisma } from "@/lib/prisma";
import React from "react";

type EditPageProps = {
  params: Promise<{ id: string }>;
};

const EditPageSnippet = async ({ params }: EditPageProps) => {
  const resolvedParams = await params;
  const id = parseInt(resolvedParams.id);

  if (isNaN(id)) {
    throw new Error("Invalid ID");
  }

  const snippet = await prisma.snippet.findUnique({
    where: { id },
  });

  if (!snippet) {
    return <h1>Snippet not found</h1>;
  }

  return <EditSnippetForm snippet={snippet} />;
};

export default EditPageSnippet;
