import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="font-bold text-2xl">Home</h1>

      <div className="flex items-center justify-between">
        <h1>Snippets</h1>
        <Link href="snippets/new"><Button>New</Button></Link>
      </div>


    </div>
  );
}
