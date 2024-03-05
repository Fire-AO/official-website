import Header from "@/pages/home/page/components/Header";
import FirstIntro from "@/pages/home/page/components/FirstIntro";
import Detail from "@/pages/home/page/components/Detail";
import Footer from "@/pages/home/page/components/Footer";
import MainActivity from "@/pages/home/page/components/MainActivity";
import Executives from "@/pages/home/page/components/Executives";

const Root = () => {
    return (
        <div className="App">
            <Header />
            <FirstIntro />
            <Detail />
            <MainActivity />
            <Executives />
            <Footer />
        </div>
    )
}

export default Root