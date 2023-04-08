const RepoPage = ({ params: {name}}) => {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Repo Detail</p>
    </div>
  );
};

export default RepoPage;