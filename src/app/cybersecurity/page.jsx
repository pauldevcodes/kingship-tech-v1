import Banner from "../page sections/cybersecurity/Banner";
import CourseDetails from "../page sections/cybersecurity/CourseDetails";
import Eligibility from "../page sections/cybersecurity/Eligibility";
import Outline from "../page sections/cybersecurity/Outline";
import Topics from "../page sections/cybersecurity/Topics";

export default function Cybersecurity() {
    return (
        <main>
            <Banner />
            <div className="py-20">
                <CourseDetails />
                <Topics />
                <Outline />
                <Eligibility />
            </div>
        </main>
    )
}