'use client';
import { useState, useEffect } from 'react';
import LoadingPage from '../../Components/Loading';
import Courses from '../../Components/Courses';
import CourseSearch from '../../Components/CourseSearch';

const OldCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch('/api/courses');
      const data = await res.json();
      setCourses(data);
      setLoading(false);
    };
    fetchCourses();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <>
      <h1>Fetch Data from Local JSON File</h1>
      <CourseSearch getSearchResults={(results) => setCourses(results)} />
      <Courses courses={courses} />
    </>
  );
};

export default OldCourses;
