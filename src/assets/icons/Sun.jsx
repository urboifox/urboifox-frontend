const Sun = ({ className }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g strokeWidth="0"></g>
      <g strokeLinecap="round" strokeLinejoin="round"></g>
      <g>
        <circle cx="12" cy="12" r="5" strokeWidth="1.2"></circle>
        <path d="M12 2V4" strokeWidth="1.2" strokeLinecap="round"></path>
        <path d="M12 20V22" strokeWidth="1.2" strokeLinecap="round"></path>
        <path d="M4 12L2 12" strokeWidth="1.2" strokeLinecap="round"></path>
        <path d="M22 12L20 12" strokeWidth="1.2" strokeLinecap="round"></path>
        <path
          d="M19.7778 4.22266L17.5558 6.25424"
          strokeWidth="1.2"
          strokeLinecap="round"
        ></path>
        <path
          d="M4.22217 4.22266L6.44418 6.25424"
          strokeWidth="1.2"
          strokeLinecap="round"
        ></path>
        <path
          d="M6.44434 17.5557L4.22211 19.7779"
          strokeWidth="1.2"
          strokeLinecap="round"
        ></path>
        <path
          d="M19.7778 19.7773L17.5558 17.5551"
          strokeWidth="1.2"
          strokeLinecap="round"
        ></path>
      </g>
    </svg>
  );
};

export default Sun;
