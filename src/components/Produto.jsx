function Produto(props) {
    return (
        <div>
            <h2>{props.nome}</h2>
            <p>{props.descricao}</p>
            <p>{props.preco}</p>
            <p>{props.disponivel}</p>
        </div>
    );
}
export default Produto