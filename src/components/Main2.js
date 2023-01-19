export default function Main2({ card, aside }) {
    return (
        <div className="container">
            <div className="row">
                <div className=" col-8 pt-5 justify-content-between ">
                    {card.map((e) => {
                        return (
                            <div className="d-flex pt-5 justify-content-between">
                                <div>
                                    <div className="d-flex">
                                        <img src={e.createdUser.img} alt="a" />
                                        <h2 id="name">{e.createdUser.Name}</h2>

                                    </div>
                                    <div className="css">
                                        <h2 id="title2">{e.head}</h2>
                                        <p style={{ width: "250px" }}>{e.title}</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <span>{e.date}</span>
                                        <span>{e.read}</span>
                                        <span>{e.key}</span>
                                    </div>
                                </div>

                                <div>
                                    <img src={e.img} alt="a" />
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="col-4">
                    <h2 id="title3">Discover more of what matters to you</h2>
                    {aside.map((e) => {
                        return (
                            <ul className="asideList d-flex flex-wrap">
                                <li>
                                    {e.title}
                                </li>
                            </ul>

                        )
                    })}
                </div>
            </div>

        </div>
    )
}