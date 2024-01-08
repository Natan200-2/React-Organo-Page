import { useState } from 'react'
import './InputText.css'


const InputText = (props) => {

    const aoDigitar = (e) => {

        props.aoAlterado(e.target.value)

    }

    return (
        <div className="fieldText">
            <label>{props.title}</label>
            <input value={props.value} onChange={aoDigitar} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}

export default InputText;