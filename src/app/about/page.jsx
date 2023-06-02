import Collaboration from "../page sections/about/Collaboration";
import Features from "../page sections/about/Features";
import Hero from "../page sections/about/Hero";
import SamePage from "../page sections/about/SamePage";
import Streamlined from "../page sections/about/Streamlined";
import Title from "../page sections/about/mobile-view/Title";

export default function About() {
    return (
        <main>
            <div className="xl:block hidden">
                <Hero />
                <Collaboration />
                <SamePage />
                <Streamlined />
                <Features />
            </div>
            <div className="xl:hidden block">
                <Title />
            </div>
        </main>
    )
}