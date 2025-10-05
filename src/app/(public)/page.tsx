import About from "@/components/modules/Home/About";
import Hero from "@/components/modules/Home/Hero";


const HomePage = () => {
    return (
        <div className="container mx-auto">
            <Hero />
            <About />
        </div>
    );
};

export default HomePage;