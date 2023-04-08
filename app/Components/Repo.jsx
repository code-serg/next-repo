async function fetchRepo(name) {
  const response = await fetch(`https://api.github.com/repos/srgsouza/${name}`);
  const repo = await response.json();
  return repo;
}

const Repo = async ( {name} ) => {
  const repo = await fetchRepo(name);
   console.log(repo);

  return (
    <div>Repo</div>
  )
};

export default Repo;