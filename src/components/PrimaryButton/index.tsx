const PrimaryButton = (props: any) => {
    return (
        <button id="primary-button" type="submit" className={"btn btn-primary text-black fw-bold " + props.className}>
            {props.children}
        </button>
    );
}

export default PrimaryButton;