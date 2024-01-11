type Props = {
    buttonTitle: string;
};

const PrimaryButton = ({ buttonTitle }: Props) => {
    return (
        <button id="primary-button" type="submit" className="btn btn-primary text-black fw-bold fs-5">
            {buttonTitle}
        </button>
    );
}

export default PrimaryButton;