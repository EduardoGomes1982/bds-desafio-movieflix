const LogoutButton = (props: any) => {
    return (
        <button onClick={props.onClick} id="primary-button" type="submit" className="btn btn-primary btn-sm text-black fw-bold border-1 border-secondary rounded" style={{ width: "100px" }}>
            SAIR
        </button>
    );
};

export default LogoutButton;