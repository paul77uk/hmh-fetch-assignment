const Dogs = async () => {
  const response = await fetch("https://dog.ceo/api/breeds/image/random/10");
  const data = await response.json();
  const message = data.message;
  return (
    <main>
      <h3>Dogs</h3>
      <p>
        Here's an API to fetch 10 random dog images:<a href="https://dog.ceo/api/breeds/image/random/10" target="_blank">
          https://dog.ceo/api/breeds/image/random/10
        </a>
      </p>

      {message.map((url) => (
        <img className="dog" key={url} src={url} alt={`Dog ${url}`} />
      ))}

      <hr />
    </main>
  );
};
export default Dogs;
