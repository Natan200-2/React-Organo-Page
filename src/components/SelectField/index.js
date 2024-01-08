import './SelectField.css'


const SelectField = (props) => {
    return (
        <div className="selectBar">
            <label>Time</label>
        <select required={props.obrigatorio} value={props.value} onChange={e => props.aoAlterado(e.target.value)}>
            <option value=""></option>
            {
                props.items.map((item,index) => {
                    return <option key={index}>{item}</option>
                })
            }
        </select>
        </div>
    )
}

export default SelectField;