import "./Form.css"
import InputText from "../InputText";
import SelectField from "../SelectField";
import Button from "../Button";

const list = [
    'programação',
    'ux/ui Design',
    'Devops',
    'FrontEnd',
    'BackEnd'
  ]

const aoSalvar = (e) => {
    e.preventDefault();

    console.log('Form foi salvo')
}

const Form = () => {
    return (
        <section className="forms">
            <form onSubmit={aoSalvar}>
                <h2>Por favor preencha suas informações</h2>
                <InputText obrigatorio={true} title="Nome" placeholder="Digite seu nome..." />
                <InputText obrigatorio={true} title="Cargo" placeholder="Informe seu cargo..." />
                <InputText title="Imagem" placeholder="Insira sua imagem..." />
                <SelectField obrigatorio={true} items={list}/>
                <Button>
                    Crie um card
                </Button>
            </form>
        </section>
    )
}

export default Form;