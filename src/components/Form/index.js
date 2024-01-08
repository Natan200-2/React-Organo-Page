import "./Form.css"
import InputText from "../InputText";
import SelectField from "../SelectField";
import Button from "../Button";
import { useState } from "react";

const Form = (props) => {

    const [name, setName] = useState('')
    const [cargo, setCargo] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')

    const onSave = (e) => {
        e.preventDefault();

        props.onRegister({
            name,
            cargo,
            image,
            team
        })
    }


    return (
        <section className="forms">
            <form onSubmit={onSave}>
                <h2>Por favor preencha suas informações</h2>
                <InputText obrigatorio={true}
                 title="Nome" 
                 placeholder="Digite seu nome..." 
                 value={name}
                 aoAlterado={valor => setName(valor)}
                 />
                <InputText obrigatorio={true} 
                title="Cargo" 
                placeholder="Informe seu cargo..." 
                value={cargo}
                aoAlterado={valor => setCargo(valor)}
                />
                <InputText title="Imagem"
                 placeholder="Insira sua imagem..." 
                 value={image}
                 aoAlterado={valor => setImage(valor)}
                 />
                <SelectField obrigatorio={true} 
                items={props.teams}
                value={team}
                aoAlterado={valor => setTeam(valor)}
                />
                <Button>
                    Crie um card
                </Button>
            </form>
        </section>
    )
}

export default Form;