const ButtonSubmit = (props) => {
    const { onClick, type, disabled, label } = props;
    return (
      <button
        className={`rounded-lg w-full h-11 font-medium bg-primary1 text-white`}
        onClick={onClick}
        type={type}
        disabled={disabled}
      >
        {label ? label : 'Submit'}
      </button>
    );
  };
  
  export default ButtonSubmit;