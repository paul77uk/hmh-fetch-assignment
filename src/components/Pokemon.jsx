"use client";

import { useEffect, useState } from "react";

const Pokemon = () => {
  const [text, setText] = useState("ditto");
  const [pokemon, setPokemon] = useState("");
  const [img, setImg] = useState("");

  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = async () => {
    await fetch(`https://pokeapi.co/api/v2/pokemon/${text}`)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data.name);
        setImg(data.sprites.front_default);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchPokemon();
  };

  return (
    <main>
      <h3>Pokemon</h3>
      <p>
        Here's a pokemon api:{" "}
        <a href="https://pokeapi.co/api/v2/pokemon/ditto" target="_blank">
          https://pokeapi.co/api/v2/pokemon/ditto
        </a>
      </p>
      <p>
        You have to replace the text "ditto" with the name of the pokemon you
        want to search for.
      </p>
      <form onSubmit={handleSubmit}>
        <input
        placeholder="Enter Pokemon name..."
          type="text"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <button>Search</button>
        <h4>{pokemon}</h4>
        <img src={img} />
      </form>
      <hr />
    </main>
  );
};
export default Pokemon;
