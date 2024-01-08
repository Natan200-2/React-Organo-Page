import './Colaborator.css'

const Colaborator = (props) => {
    return(
        <div className='colaborador'>
            <div className='cabecalho' style={{backgroundColor: props.color}}>
                <img src={props.image} alt={props.name}/>
            </div>
            <div className='rodape'>
                <h4>{props.name}</h4>
                <h5>{props.cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborator