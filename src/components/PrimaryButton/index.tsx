const PrimaryButton = (props: any) => {
    return (
        <button id="primary-button" className={"btn btn-primary text-black fw-bold " + props.className} onSubmit={props.onSubmit}>
            {props.children}
        </button>
    );
}

export default PrimaryButton;