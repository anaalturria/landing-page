import Style from "./terceirocomp.module.css";

function TerceiroComp(props) {

    return(
        <>
            <div className={Style.oi}>
                <figure className={Style.foto2}>
                    <img src={props.foto2} alt=""/>
                </figure>
            </div>
        </>
    );
}
export default TerceiroComp;