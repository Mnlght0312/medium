export default function Main1({icon,card1}){
    return(
        <div className="container">
            <div className="d-flex m-5 justify-content-between" id="icon">
                <img src={icon} width="38rem" alt="a"/>
                <h2>Trending on Medium</h2>
            </div>
            
            <div className="row justify-content-between">
            {card1.map((e) => {
                return(
                    <div className="col-3 m-2 d-flex" >
                        <div>
                            <p id="icon1">{e.id}</p>
                        </div>
                        <div>
                            <div className="d-flex">
                                <img src ={e.img} width="38rem" alt="a"/>
                                <h2 id="name">{e.text1}</h2>
                            </div>
                            
                            <h2 id="title">{e.text2}</h2>
                            <div className="d-flex justify-content-between">
                                <p>{e.date}</p>
                                <p>{e.read}</p>
                                {/* <span>{e.icon}</span> */}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
        </div>
        
    )
}

