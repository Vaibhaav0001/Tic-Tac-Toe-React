import Examples from "./Examples.jsx";
export default function TabButton({ children, onSelect, btnSelected }) {
    return (
      <li>
        <button className={btnSelected ? "active" : undefined} onClick={onSelect}>
          {children}
        </button>
      </li>
    );
  }
  