import "./InputCadastro.css"
  
function InputCadastro(props){
    return(
        <>
            <input type={props.type} className="input" name={props.name} id={props.id} placeholder={props.placeholder}/>
        </>
    )

}

InputCadastro.defaultProps = {
    type: "text",  
  };

export default InputCadastro