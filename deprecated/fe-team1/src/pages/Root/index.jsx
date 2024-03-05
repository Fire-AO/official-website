import Header from "../../components/Header";
import FirstIntro from "../../components/FirstIntro";
import Detail from "../../components/Detail";
import Footer from "../../components/Footer";
import MainActivity from "../../components/MainActivity";
import Executives from "../../components/Executives";

const Root = () => {
    return (
        <div className="App">
            <Header></Header>
            <FirstIntro></FirstIntro>
            <Detail></Detail>
            <MainActivity />
            <Executives></Executives>
            <Footer />
        </div>
    )
}

export default Root