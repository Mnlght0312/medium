export default function Header({logo2}) {
    return (
        <div className="container-fliud">
            <div className="header bg-warning">
                <div className="leftSide">
                    <h2 id="h2" className="pb-3">Stay curious.</h2>
                    <p id="p">Discover stories, thinking, and expertise from writers on any topic.</p>
                    <button className="button1 mt-5">Start reading</button>
                </div>  
                
                <div className="rightSide">
                    <img src={logo2} alt="#"/>
                </div>
            </div>
            
        </div>
    )
}