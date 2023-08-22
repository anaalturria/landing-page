import Style from "./primeirocomp.module.css";

function PrimeiroComp(props) {

    return(
        <>
            <div className={Style.menu} style={{backgroundColor: props.cor , width: props.tamanho }}><h1>Taylor Swift</h1></div>
        </>
    );
}
 
export default PrimeiroComp;