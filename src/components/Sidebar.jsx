import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import {
  faUser,
  faCalendar,
  faTag,
  faMoneyBill,
  faChartLine,
  faCog,
  faSearch,
  faTree,
  faDollarSign,
  faCubes,
  faStickyNote,
  faCompass,
  faPlusSquare
} from "@fortawesome/free-solid-svg-icons";
import "../styles/Style.scss";

function Sidebar(props) {
  return (
    <ul className="icons-bar">
      <li>
        <button>
          <FontAwesomeIcon className="icon" icon={faSearch} />{" "}
        </button>
      </li>
      <li>
        <button>
          <FontAwesomeIcon className="icon" icon={faUser} />{" "}
        </button>
      </li>
      <li>
        <button>
          <FontAwesomeIcon className="icon" icon={faCalendar} />{" "}
        </button>
      </li>
      <li>
        <button>
          <FontAwesomeIcon className="icon" icon={faTag} />{" "}
        </button>
      </li>
      <li>
        <button>
          <FontAwesomeIcon className="icon" icon={faTree} />{" "}
        </button>
      </li>
      <li>
        <button>
          <FontAwesomeIcon className="icon" icon={faDollarSign} />{" "}
        </button>
      </li>

      <li>
        <button>
          <FontAwesomeIcon className="icon" icon={faCubes} />{" "}
        </button>
      </li>
      <li>
        <button>
          <FontAwesomeIcon className="icon" icon={faStickyNote} />{" "}
        </button>
      </li>
      <li>
        <button>
          <FontAwesomeIcon className="icon" icon={faChartLine} />{" "}
        </button>
      </li>
      <li>
        <button>
          <FontAwesomeIcon className="icon" icon={faMoneyBill} />{" "}
        </button>
      </li>
      <li>
        <button>
          <FontAwesomeIcon className="icon" icon={faCompass} />{" "}
        </button>
      </li>
      <li>
        <button>
          <FontAwesomeIcon className="icon" icon={faPlusSquare} />{" "}
        </button>
      </li>
      <li>
        <button>
          <FontAwesomeIcon className="icon" icon={faCog} />{" "}
        </button>
      </li>
      <li></li>
    </ul>
  );
}

export default Sidebar;
