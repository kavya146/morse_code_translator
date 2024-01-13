import "./Content.css";

function Content() {
  const encodeLable =
    'Output Morse Code: ("|" Indicates the Spacing in the Morse Code.)';
  const decodeLable =
    'Output String Value: (Add "|" for the Spacing in String.)';
  return (
    <div className="content-style">
      <BoxContainer
        heading="Encode"
        inputPlaceholder="Input String value"
        lable={encodeLable}
        buttonLable="Encode"
      />
      <BoxContainer
        heading="Decode"
        inputPlaceholder="Input morse code"
        lable={decodeLable}
        buttonLable="Decode"
      />
    </div>
  );
}

const BoxContainer = (props) => {
  return (
    <div className="box">
      <div className="box-header">{props.heading}</div>
      <hr></hr>
      <div className="content-container">
        <div>
          <input
            className="search-style"
            type="text"
            placeholder={props.inputPlaceholder}
          />
          <div>{props.lable}</div>
        </div>
        <div>
          <button
            style={{
              backgroundColor: "blue",
              borderRadius: "5px",
              height: "30px",
              width: "100px",
            }}
          >
            {props.buttonLable}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Content;
