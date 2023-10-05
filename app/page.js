'use client';
import { useState, useEffect } from 'react';
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';
import LoadingPage from './Components/Loading';
import Link from 'next/link';
import Courses from './Components/Courses';
import CourseSearch from './Components/CourseSearch';

const HomePage = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      // const res = await fetch('/api/courses');
      // const data = await res.json();
      const response = await fetch(
        'https://api.github.com/users/code-serg/repos',
        {
          next: {
            revalidate: 60,
          },
        }
      );
      const repos = await response.json();
      setRepos(repos);
      setLoading(false);
    };
    fetchRepos();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  if (!repos) {
    return <LoadingPage />;
  }
  // return (
  //   <>
  //     <h1>Welcome</h1>
  //     <CourseSearch getSearchResults={(results) => setCourses(results)} />
  //     <Courses courses={courses} />
  //   </>
  // );
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

export default HomePage;
