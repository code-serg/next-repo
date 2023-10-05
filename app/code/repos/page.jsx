import Link from 'next/link';
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';

async function fetchRepos() {
  try {
    const response = await fetch(
      'https://api.github.com/users/code-serg/repos',
      {
        headers: {
          Authorization: `token ${process.env.GITHUB_TOKEN}`,
        },
        next: {
          revalidate: 60,
        },
      }
    );

    const data = await response.json();

    // Check if the data is an error object
    if (data.message && data.documentation_url) {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    console.error('Error fetching repos data:', error.message);
    return { error: error.message };
  }
}

const ReposPage = async () => {
  const repos = await fetchRepos();

  if (repos.error) {
    return (
      <div className="error-container">
        <h2>Error Fetching Repositories</h2>
        <p>{repos.error}</p>
      </div>
    );
  }

  return (
    <div className="repos-container">
      <h2>Repositories</h2>
      <ul className="repo-list">
        {repos.map((repo) => (
          <li key={repo.id}>
            <Link href={`/code/repos/${repo.name}`}>
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
              <div className="repo-details">
                <span>
                  <FaStar /> {repo.stargazers_count}
                </span>
                <span>
                  <FaCodeBranch /> {repo.forks_count}
                </span>
                <span>
                  <FaEye /> {repo.watchers_count}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReposPage;
