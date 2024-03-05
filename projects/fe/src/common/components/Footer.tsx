import "@/pages/home/page/css/Footer.css";

function Footer() {
    return (
        <>
            <footer>
                <div className='footer'>
                    <div className="footername">
                        <p>Fire</p>&nbsp;<p id="fotfro">A</p><p id="fotback">O</p>
                    </div>
                    <div className="call">
                        <img className="callimg" src="asset/call.png" />
                        &nbsp;
                        <p id="number">010-4939-1971</p>
                    </div>
                    <div className="copyright">
                        <p>ⓒ Fire AO. 2024 All rights reserved</p>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer;