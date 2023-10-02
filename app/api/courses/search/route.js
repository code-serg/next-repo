import { NextResponse } from "next/server";
import courses from "../courses.json";

export async function GET(request) {
  const { searchParams } = new URL(request.url); // destructuring the request url to get the params
  // In Postman, make a GET request using something like this: localhost:3000/api/courses/search?query=react&name=srg
  // console.log(searchParams);
  // console.log(searchParams.get('query'));
  // console.log(searchParams.get('name'));
  const query = searchParams.get('query'); 
  const filteredCourses = courses.filter((course) => {
    return course.title.toLowerCase().includes(query.toLowerCase());
  });
  return NextResponse.json(filteredCourses);
}
