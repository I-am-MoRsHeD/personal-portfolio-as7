import About from "@/components/modules/Home/About";
import Blogs from "@/components/modules/Home/Blogs";
import Hero from "@/components/modules/Home/Hero";
import Projects from "@/components/modules/Home/Projects";


const HomePage = async () => {

    return (
        <div className="container mx-auto">
            <Hero />
            <About />
            <Projects />
            <Blogs />
        </div>
    );
};

export default HomePage;