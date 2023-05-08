export const Arrow = ({strokeColor}: any) => {
    console.log(strokeColor);
    
  return (
    <svg
      width="12"
      height="13"
      viewBox="0 0 12 13"
    fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 11.6661L11 1.66614M11 1.66614H1M11 1.66614V11.6661"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
