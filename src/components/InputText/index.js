import './InputText.css'

const aoDigitar = (e) => {
    console.log(e.target.value)
}

const InputText = (props) => {
    return (
        <div className="fieldText">
            <label>{props.title}</label>
            <input onChange={aoDigitar} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}

export default InputText;