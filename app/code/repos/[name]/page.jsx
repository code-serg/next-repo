import { Suspense } from 'react';
import Repo from '@/app/Components/Repo';
import Link from 'next/link';
import RepoDirs from '@/app/Components/RepoDirs';

const RepoPage = ({ params: {name}}) => {
  return (
    <div className="card">
      <Link href='/code/repos' className='btn btn-back'>
        Back to Repositories
      </Link>
      <Suspense fallback={<div>Loading Repo...</div>}>
        <Repo name={name} />
      </Suspense>
      <Suspense fallback={<div>Loading Directories...</div>}>
        <RepoDirs name={name} />
      </Suspense> 
    </div>
  );
};

export default RepoPage;