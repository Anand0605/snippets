"use server"

import { prisma } from "@/lib/prisma"
import { error } from "console";
import { redirect } from "next/navigation";

export const saveSnippet = async (id: number, code: string) => {
  await prisma.snippet.update({
    where: {
      id
    },
    data: {
      code
    }
  });

  redirect(`/snippets/${id}`)
};

export const deleteSnippet = async (id: number) => {
  await prisma.snippet.delete({
    where: { id }
  });

  redirect("/");
};


export async function createSnippet(preState: { message: string }, formData: FormData) {

  try {
    const title = formData.get("title");
    const code = formData.get("code");

    if (typeof title !== "string" || title.length < 4) {
      return { message: "title is required must be longer" }
    }

    if (typeof code !== "string" || code.length < 8) {
      return { message: "code is required must be longer" }
    }

      await prisma.snippet.create({
      data: { title, code },
    });

    throw new Error("opps something wait wrong")

    // console.log("Created snippet:", snippet);
  } catch (error:any) {
return {message:error.message}
  }


  redirect("/");
}
