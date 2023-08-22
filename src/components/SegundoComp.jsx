import Style from "./segundocomp.module.css";

function SegundoComp(props) {

    return(
        <>
            <div className={Style.sc}>
                <figure className={Style.foto}>
                    <img src={props.foto} alt=""/>
                </figure>
                <div className={Style.bio}><h1>Who is she?</h1>
                <p>Taylor Alison Swift é uma cantora, compositora, atriz, diretora e roteirista norte-americana. Suas composições narrativas, muitas vezes inspirada pelas suas experiências pessoais, tem recebido ampla cobertura mediática e elogios críticos.</p>
                </div>
            </div>
        </>
    );
}
export default SegundoComp;