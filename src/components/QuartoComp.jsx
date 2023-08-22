import Style from "./quartocomp.module.css";

function QuartoComp(props) {

    return(
        <>
            <h1>Ouça Agora</h1> <a href={"https://open.spotify.com/intl-pt/artist/06HL4z0CvFAxyc27GXpf02"+props.ouça}>{props.agora}</a>
            <div className={Style.music}>
                <div className={Style.text1}>
                    TAYLOR SWIFT (2006)
                    <p></p>
                    FEARLESS (2008)
                    <p></p>
                    SPEAK NOW (2010)
                    <p></p>
                    RED (2012)
                    <p></p>
                    1989 (2014)
                </div>
                <div className={Style.text2}>
                    REPUTATION (2017)
                    <p></p>
                    LOVER (2019)
                    <p></p>
                    FOLKLORE (2020)
                    <p></p>
                    EVERMORE (2020)
                    <p></p>
                    MIDNIGHTS (2022)
                </div>
            </div>
        </>
    );
}
export default QuartoComp;