import Beer from "@/components/Beer.jsx";
import Dogs from "@/components/Dogs.jsx";
import Memes from "@/components/Memes.jsx";
import Pokemon from "@/components/Pokemon.jsx";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1>Can you catch them all?</h1>
      <Dogs />
      <Memes />
      <Pokemon />
      <Beer />
    </main>
  );
}
