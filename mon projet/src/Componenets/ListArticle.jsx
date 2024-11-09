import { useState, useEffect } from "react";
import axios from "axios";
import ElementsArticle from "./ElementArticle";

function ListArticles() {
    const [netyannt, setNetoyannt] = useState([]);
    const [Contourdesyeux, setContourdesyeux] = useState([]);
    const [Cremesolaire, setCremesolaire] = useState([]);
    const [Serumetampule, setSerumetampule] = useState([]);
    const [CremeVisage, setCremeVisage] = useState([]);
    const [Traitement, setTraitement] = useState([]);
    const [Soindesongles, setSoindesongles] = useState([]);
    const [Protection, setProtection] = useState([]);
    const [sante, setSante] = useState([]);
    const [Peau, setPeau] = useState([]);
    const [verrus, setVerrus] = useState([]);
    const [Infections, setInfections] = useState([]);

    const fetchArticles = () => {
        axios.get("http://localhost:3001/netoyannt").then((reponse) => setNetoyannt(reponse.data));
        axios.get("http://localhost:3001/Contourdesyeux").then((reponse) => setContourdesyeux(reponse.data));
        axios.get("http://localhost:3001/Crèmessolairesvisage").then((reponse) => setCremesolaire(reponse.data));
        axios.get("http://localhost:3001/SérumsetAmpoules").then((reponse) => setSerumetampule(reponse.data));
        axios.get("http://localhost:3001/CremeVisage").then((reponse) => setCremeVisage(reponse.data));
        axios.get("http://localhost:3001/Traitementsspécifiques").then((reponse) => setTraitement(reponse.data));
        axios.get("http://localhost:3001/Soindesongles").then((reponse) => setSoindesongles(reponse.data));
        axios.get("http://localhost:3001/Protectionsolaire").then((reponse) => setProtection(reponse.data));
        axios.get("http://localhost:3001/HygièneetSanté").then((reponse) => setSante(reponse.data));
        axios.get("http://localhost:3001/Peaugrasse").then((reponse) => setPeau(reponse.data));
        axios.get("http://localhost:3001/Traitementverrues").then((reponse) => setVerrus(reponse.data));
        axios.get("http://localhost:3001/Infections").then((reponse) => setInfections(reponse.data));
    }

    useEffect(() => {
        fetchArticles();
    }, []);

    return (
        <>
            <h2 className="text-center">Liste Articles</h2>
            <br />
            <div id="container" className="container" style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
            }}>
                <ElementsArticle 
                    netyannt={netyannt} 
                    Contourdesyeux={Contourdesyeux} 
                    Cremesolaire={Cremesolaire} 
                    Serumetampule={Serumetampule} 
                    Traitement={Traitement} 
                    Soindesongles={Soindesongles} 
                    Protection={Protection} 
                    sante={sante} 
                    Peau={Peau} 
                    verrus={verrus} 
                    Infections={Infections}
                    articleStyle={{ margin: '20px', marginBottom: '30px' }} 
                />
            </div>
        </>
    );
    
    
}

export default ListArticles;
