const ASULink = props => {
    return (
        <a href={props.href} title={props.title} target={props.target} className={props.classes}>
            {props.text}
        </a>
    );
};

export default ASULink;