import { Route, Routes } from "react-router-dom";
import OurStory from "../components/OurStory";
import Membership from "../components/Membership";
import Write from "../components/Write";

export default function Navbar({ logo, tses }) {

    return (
        <div className="container-fliud">
            <div className="navbar bg-warning">
                <div>
                    <img src={logo} alt="#" />
                </div>
                <div className="menu d-flex">
                    {/* <div> */}
                    <ul className="menu1">
                        {
                            tses.map((e) => {
                                return (
                                    <li>{e.title}</li>
                                )
                            })
                        }
                    </ul>
                    {/* </div> */}
                    <div>
                        <button className="button1">Get started</button>
                    </div>

                </div>
            </div>
            <div>
                <Routes>
                    <Route exact path="/" element={<OurStory />}>
                        <Route path="/membership" element={<Membership />} />
                        <Route path="/write" element={<Write />} />
                    </Route>
                </Routes>
                
            </div>
        </div>

    )
}