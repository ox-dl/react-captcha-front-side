const ValidSvg = props => (
  <svg
    viewBox="0 0 268 268"
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    clipRule="evenodd"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeMiterlimit={1.5}
    style={{ backgroundColor: props.valided && `rgb(15, 214, 108)` }}
  >
    <path
      fill="none"
      stroke="#646464"
      strokeWidth={2}
      d="M1 1h265.607v265.607H1z"
    />
    <path
      d="M35.746 121.024L119.19 226.76 231.86 40.846 113.596 167.53l-77.85-46.507z"
      fill="#646464"
    />
  </svg >
);

export default ValidSvg;