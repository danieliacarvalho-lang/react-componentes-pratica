function Nota(props){
    return(
        <div>
            <h2>{props.disciplina}</h2>
            <p>{props.nota}</p>
        </div>
    );
}

export default Nota