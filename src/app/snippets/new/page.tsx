import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

const CreateSnippetPage = () => {
  async function createSnippet(formData: FormData) {
    "use server"; // server action

    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

    const snippet = await prisma.snippet.create({
      data: { title, code },
    });

    console.log("Created snippet:", snippet);
    redirect("/");
  }

  return (
    <section className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md border">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Create New Snippet
      </h1>

      <form action={createSnippet} className="space-y-6">
        {/* Title Input */}
        <div className="space-y-2">
          <Label htmlFor="title" className="text-gray-700">
            Title
          </Label>
          <Input
            type="text"
            name="title"
            id="title"
            placeholder="Enter snippet title"
            className="w-full"
          />
        </div>

        {/* Code Textarea */}
        <div className="space-y-2">
          <Label htmlFor="code" className="text-gray-700">
            Code
          </Label>
          <Textarea
            name="code"
            id="code"
            placeholder="Paste your code here..."
            rows={8}
            className="w-full font-mono"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-4 text-right">
          <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
            Save Snippet
          </Button>
        </div>
      </form>
    </section>
  );
};

export default CreateSnippetPage;
