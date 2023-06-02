import Banner from "./page sections/home/Banner";
import Benefits from "./page sections/home/Benefits";
import CourseHighlight from "./page sections/home/CourseHighlight";
import Mentorship from "./page sections/home/Mentorship";
import Why from "./page sections/home/Why";


export default function Home() {
  return (
    <main>
      <Banner />
      <Why />
      <CourseHighlight />
      <Mentorship />
      <Benefits />
    </main>
  )
}
