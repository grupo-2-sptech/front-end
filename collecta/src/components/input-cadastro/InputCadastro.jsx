import "./InputCadastro.css"
  
function InputCadastro(props){
    return(
        <>
            <input type="text" className="input" id={props.id} placeholder={props.placeholder}/>
        </>
    )
}

export default InputCadastro