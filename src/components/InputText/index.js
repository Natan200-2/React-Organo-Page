import './InputText.css'

const InputText = (props) => {
    return (
        <div className="fieldText">
            <label>{props.title}</label>
            <input placeholder={props.placeholder}/>
        </div>
    )
}

export default InputText;