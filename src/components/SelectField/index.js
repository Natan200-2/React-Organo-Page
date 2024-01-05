import './SelectField.css'


const SelectField = (props) => {
    return (
        <div className="selectBar">
            <label>Time</label>
        <select required={props.obrigatorio}>
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