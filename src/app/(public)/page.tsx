import About from "@/components/modules/Home/About";
import Blogs from "@/components/modules/Home/Blogs";
import Hero from "@/components/modules/Home/Hero";


const HomePage = async () => {

    return (
        <div className="container mx-auto">
            <Hero />
            <Blogs />
            <About />
        </div>
    );
};

export default HomePage;