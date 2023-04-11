import Link from 'next/link';

async function fetchCourses() {
  const response = await fetch('http://localhost:3000/api/courses');
  const data = await response.json();
  return data;
}

const Courses = async () => {
  const courses = await fetchCourses();

  return (
    <>
    <div className="courses">Courses</div>
      { courses.map(course => (
        <div key={course.id} className="card">
          <h2>{course.title}</h2>
          <small>Level: { </small>
          <p>{course.description}</p>
        </div>
      ))}
    </>
  );
};

export default Courses;