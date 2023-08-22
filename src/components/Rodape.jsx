
import Style from "./rodape.module.css";

function Rodape(props) {

    return(
        <>
            <div className={Style.rodape}>
                <h1>Redes sociais:</h1>
                <p></p>
                <h1>Instagram:</h1> <a href={"https://www.instagram.com/taylorswift/"+props.inst}>{props.insta}</a>
                <p></p>
                <h1>Spotify:</h1> <a href={"https://open.spotify.com/intl-pt/artist/06HL4z0CvFAxyc27GXpf02"+props.spo}>{props.sp}</a>
                <h1>contrate:</h1> <a href={"mailto:"+props.email}>{props.email}</a>
            </div>
                
        </>
    );
}
export default Rodape;