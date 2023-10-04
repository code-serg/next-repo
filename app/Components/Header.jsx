import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/logo-nr.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-links">
        <div className="logo">
          <Link href="/">
            <Image src={logo} alt="repo-search-logo" width={60} height={60} />
            <span> Next Repo</span>
          </Link>
        </div>
        <div className="links">
          <Link href="/about"> About</Link>
          <Link href="/about/team"> The Team</Link>
          <Link href="/code/repos"> Code</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
