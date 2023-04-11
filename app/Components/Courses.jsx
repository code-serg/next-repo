import Link from 'next/link';

// Used this at first, when demonstrating how to use fetch() from the server side of Next.js
// async function fetchCourses() {
//   const response = await fetch('http://localhost:3000/api/courses');
//   const data = await response.json();
//   return data;
// }

const Courses = ({ courses }) => {
  // const courses = await fetchCourses(); //used with fetch() from server side of Next.js

  return (
    <>
    <div className="courses"></div>
      { courses.map(course => (
        <div key={course.id} className="card">
          <h2>{course.title}</h2>
          <small>Level: { course.level } </small>
          <p>{course.description}</p>
          <Link href={course.link} target="_blank" className="btn">
            Go to course
          </Link>
        </div>
      ))}
    </>
  );
};

export default Courses;