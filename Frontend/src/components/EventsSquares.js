import "../styles/eventSquare.css"

export default function EventsSquares(props) {
    const {title, date, description} = props;
    var t = new Date(date);
    t.setDate(t.getDate() + 1);
    let formated = new Intl.DateTimeFormat('pt-BR', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(t)

    return(
        <div className="square">
            {formated}<br/>
            {title} <br/>
            {description}
        </div>
    );
}