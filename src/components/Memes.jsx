const Memes = async () => {
  const response = await fetch("https://api.imgflip.com/get_memes");
  const data = await response.json();
  const memes = data.data.memes;

  return (
    <main>
      <h3>memes</h3>
      <p>
        Here's an API to fetch random memes:
        <a href="https://api.imgflip.com/get_memes" target="_blank">
          https://api.imgflip.com/get_memes
        </a>
      </p>

      {memes.map((meme) => (
        <img
          className="meme"
          key={meme.id}
          src={meme.url}
          alt={`Meme ${meme.name}`}
        />
      ))}
      <hr />
    </main>
  );
};
export default Memes;
