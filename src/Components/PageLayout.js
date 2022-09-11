import React, { useState } from "react";
import logo from "../assets/logo.png";
import "../Styles/Styles.css";
import StepProgressBar from "./StepProgressBar";
import { Groups, Person } from "@mui/icons-material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

export default function PageLayout({ title, subtitle, displayFields, status }) {
  let [isActiveForMyself, setIsActiveForMyself] = useState(false);
  let [isActiveWithMyTeam, setIsActiveWithMyTeam] = useState(false);
  const [url, setUrl] = useState("www.eden.com/");

  let displayField;

  const handleClickForMyself = () => {
    setIsActiveWithMyTeam(false);
    setIsActiveForMyself((currentState) => {
      return !currentState;
    });
  };

  const handleClickWithMyTeam = () => {
    setIsActiveForMyself(false);
    setIsActiveWithMyTeam((currentState) => {
      return !currentState;
    });
  };

  const handleChange = (e) => {
    setUrl(`${e.target.value}`);
  };

  if (displayFields === "NameFields") {
    displayField = (
      <div className="Fields">
        <p>Full Name</p>
        <input className="InputArea" type="text" placeholder="Steve Jobs" />
        <p>Display Name</p>
        <input className="InputArea" type="text" placeholder="Steve" />
      </div>
    );
  } else if (displayFields === "WorkspaceFields") {
    displayField = (
      <div className="Fields">
        <p>Workspace Name</p>
        <input className="InputArea" type="text" placeholder="Eden" />
        <p>Workspace URL (optional)</p>
        <input
          className="InputArea"
          type="text"
          value={url}
          onChange={handleChange}
        />
      </div>
    );
  } else if (displayFields === "Planning") {
    displayField = (
      <div className="usageFields">
        <div
          className="forMySelf"
          onClick={handleClickForMyself}
          style={{
            borderColor: isActiveForMyself ? "rgb(102,77,229)" : "",
            borderWidth: isActiveForMyself ? "rgb(102,77,229)" : "",
          }}
        >
          <Person
            sx={{
              fontSize: 50,
              color: isActiveForMyself ? "rgb(102,77,229)" : "",
            }}
          />
          <p>For myself</p>
          <p className="forMySelfDetails">
            Write better. Think more clearly. Stay organized.
          </p>
        </div>
        <div
          className="withMyTeam"
          onClick={handleClickWithMyTeam}
          style={{
            borderColor: isActiveWithMyTeam ? "rgb(102,77,229)" : "",
            borderWidth: isActiveWithMyTeam ? "rgb(102,77,229)" : "",
          }}
        >
          <Groups
            sx={{
              fontSize: 50,
              color: isActiveWithMyTeam ? "rgb(102,77,229)" : "",
            }}
          />
          <p>With my team</p>
          <p className="withMyTeamDetails">
            Wiki, docs, tasks & projects, all in one place.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div>
        <img src={logo} alt="EDEN" style={{ marginBottom: "30px" }} />
        <StepProgressBar status={status} />
        {displayFields === "Congratulations" ? (
          <CheckCircleRoundedIcon
            sx={{
              marginTop: 10,
              marginBottom: 5,
              fontSize: 100,
              color: "rgb(102, 77, 229)",
            }}
          ></CheckCircleRoundedIcon>
        ) : (
          ""
        )}
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <div className="AddDetails">{displayField}</div>
      </div>
    </>
  );
}
