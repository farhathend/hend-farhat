function ElementsArticle({ netyannt,
    Contourdesyeux,
    Cremesolaire,
    Serumetampule,
    Traitement,
    Soindesongles,
    Protection,
    sante,
    Peau,
    verrus,
    Infections }) {
    return (
        <>
            <h1></h1>
            <div className="row">
                {
                    netyannt && netyannt.length > 0 && netyannt.map((a) => {
                        return (<div key={a.id} className="col-sm-4">
                            <div className="card" style={{ "width": "18rem" }}>
                                <img src={a.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h4 className="list-group-item">{a.reference}</h4>
                                    <h5 className="card-title">{a.designation}</h5>
                                    <p className="card-text badge text-bg-primary text-wrap">{a.prixVente} </p>
                                </div>
                            </div>
                        </div>)
                    })
                }
                {
                    Contourdesyeux && Contourdesyeux.length > 0 && Contourdesyeux.map((a) => {
                        return (<div key={a.id} className="col-sm-4">
                            <div className="card" style={{ "width": "18rem" }}>
                                <img src={a.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h4 className="list-group-item">{a.reference}</h4>
                                    <h5 className="card-title">{a.designation}</h5>
                                    <p className="card-text badge text-bg-primary text-wrap">{a.prixVente} </p>
                                </div>
                            </div>
                        </div>)
                    })
                }
                {
                    Cremesolaire && Cremesolaire.length > 0 && Cremesolaire.map((a) => {
                        return (<div key={a.id} className="col-sm-4">
                            <div className="card" style={{ "width": "18rem" }}>
                                <img src={a.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h4 className="list-group-item">{a.reference}</h4>
                                    <h5 className="card-title">{a.designation}</h5>
                                    <p className="card-text badge text-bg-primary text-wrap">{a.prixVente} </p>
                                </div>
                            </div>
                        </div>)
                    })
                }
                {
                    Serumetampule && Serumetampule.length > 0 && Serumetampule.map((a) => {
                        return (<div key={a.id} className="col-sm-4">
                            <div className="card" style={{ "width": "18rem" }}>
                                <img src={a.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h4 className="list-group-item">{a.reference}</h4>
                                    <h5 className="card-title">{a.designation}</h5>
                                    <p className="card-text badge text-bg-primary text-wrap">{a.prixVente} </p>
                                </div>
                            </div>
                        </div>)
                    })
                }
                {
                    Traitement && Traitement.length > 0 && Traitement.map((a) => {
                        return (<div key={a.id} className="col-sm-4">
                            <div className="card" style={{ "width": "18rem" }}>
                                <img src={a.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h4 className="list-group-item">{a.reference}</h4>
                                    <h5 className="card-title">{a.designation}</h5>
                                    <p className="card-text badge text-bg-primary text-wrap">{a.prixVente} </p>
                                </div>
                            </div>
                        </div>)
                    })
                }
                {
                    Soindesongles && Soindesongles.length > 0 && Soindesongles.map((a) => {
                        return (<div key={a.id} className="col-sm-4">
                            <div className="card" style={{ "width": "18rem" }}>
                                <img src={a.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h4 className="list-group-item">{a.reference}</h4>
                                    <h5 className="card-title">{a.designation}</h5>
                                    <p className="card-text badge text-bg-primary text-wrap">{a.prixVente} </p>
                                </div>
                            </div>
                        </div>)
                    })
                }
                {
                    Protection && Protection.length > 0 && Protection.map((a) => {
                        return (<div key={a.id} className="col-sm-4">
                            <div className="card" style={{ "width": "18rem" }}>
                                <img src={a.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h4 className="list-group-item">{a.reference}</h4>
                                    <h5 className="card-title">{a.designation}</h5>
                                    <p className="card-text badge text-bg-primary text-wrap">{a.prixVente} </p>
                                </div>
                            </div>
                        </div>)
                    })
                }
                {
                    sante && sante.length > 0 && sante.map((a) => {
                        return (<div key={a.id} className="col-sm-4">
                            <div className="card" style={{ "width": "18rem" }}>
                                <img src={a.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h4 className="list-group-item">{a.reference}</h4>
                                    <h5 className="card-title">{a.designation}</h5>
                                    <p className="card-text badge text-bg-primary text-wrap">{a.prixVente} </p>
                                </div>
                            </div>
                        </div>)
                    })
                }
                {
                    Peau && Peau.length > 0 && Peau.map((a) => {
                        return (<div key={a.id} className="col-sm-4">
                            <div className="card" style={{ "width": "18rem" }}>
                                <img src={a.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h4 className="list-group-item">{a.reference}</h4>
                                    <h5 className="card-title">{a.designation}</h5>
                                    <p className="card-text badge text-bg-primary text-wrap">{a.prixVente} </p>
                                </div>
                            </div>
                        </div>)
                    })
                }
                {
                    verrus && verrus.length > 0 && verrus.map((a) => {
                        return (<div key={a.id} className="col-sm-4">
                            <div className="card" style={{ "width": "18rem" }}>
                                <img src={a.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h4 className="list-group-item">{a.reference}</h4>
                                    <h5 className="card-title">{a.designation}</h5>
                                    <p className="card-text badge text-bg-primary text-wrap">{a.prixVente} </p>
                                </div>
                            </div>
                        </div>)
                    })
                }
                {
                    Infections && Infections.length > 0 && Infections.map((a) => {
                        return (<div key={a.id} className="col-sm-4">
                            <div className="card" style={{ "width": "18rem" }}>
                                <img src={a.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h4 className="list-group-item">{a.reference}</h4>
                                    <h5 className="card-title">{a.designation}</h5>
                                    <p className="card-text badge text-bg-primary text-wrap">{a.prixVente} </p>
                                </div>
                            </div>
                        </div>)
                    })
                }
            </div>
        </>
    );
}
export default ElementsArticle;