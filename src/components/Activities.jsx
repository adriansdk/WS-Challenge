import React from "react";
import "../styles/Style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faEnvelope,
  faUsers,
  faCalendarTimes
} from "@fortawesome/free-solid-svg-icons";

function Activities(props) {
  const user = props.user;
  let delayedTotal = undefined;
  let inProgressTotal = undefined;
  let toBeCompletedTotal = undefined;
  let completedTotal = undefined;

  function getTotal() {
    delayedTotal =
      user.activities.delayed.type.call.length +
      user.activities.delayed.type.meeting.length +
      user.activities.delayed.type.email.length +
      user.activities.delayed.type.event.length;
    inProgressTotal =
      user.activities.inProgress.type.call.length +
      user.activities.inProgress.type.meeting.length +
      user.activities.inProgress.type.email.length +
      user.activities.inProgress.type.event.length;
    toBeCompletedTotal =
      user.activities.toBeCompleted.type.call.length +
      user.activities.toBeCompleted.type.meeting.length +
      user.activities.toBeCompleted.type.email.length +
      user.activities.toBeCompleted.type.event.length;
    completedTotal =
      user.activities.completed.type.call.length +
      user.activities.completed.type.meeting.length +
      user.activities.completed.type.email.length +
      user.activities.completed.type.event.length;

    let total =
      delayedTotal + inProgressTotal + toBeCompletedTotal + completedTotal;

    return total;
  }

  function getDelayedInfo() {
    let delays = [];
    let delaydCalls = user.activities.delayed.type.call.map((eachCall, key) => {
      return (
        <div className="red-icon" key={key}>
          <h4>
            <FontAwesomeIcon icon={faPhoneAlt} className="icon" />{" "}
            {eachCall.description}
          </h4>
          <h4>{eachCall.withWho}</h4>
          <h4>Em atraso por {eachCall.delayedFor} dias.</h4>
        </div>
      );
    });
    delays.push(delaydCalls);
    let delaydMeetings = user.activities.delayed.type.meeting.map(
      (eachMeeting, key) => {
        return (
          <div className="red-icon" key={key}>
            <h4>
              <FontAwesomeIcon icon={faUsers} className="icon" />{" "}
              {eachMeeting.description}
            </h4>
            <h4>{eachMeeting.withWho}</h4>
            <h4>Em atraso por {eachMeeting.delayedFor} dias.</h4>
          </div>
        );
      }
    );

    delays.push(delaydMeetings);

    let delaydEmails = user.activities.delayed.type.email.map(
      (eachEmail, key) => {
        return (
          <div className="red-icon" key={key}>
            <h4>
              <FontAwesomeIcon icon={faEnvelope} className="icon" />{" "}
              {eachEmail.description}
            </h4>
            <h4>{eachEmail.withWho}</h4>
            <h4>Em atraso por {eachEmail.delayedFor} dias.</h4>
          </div>
        );
      }
    );

    delays.push(delaydEmails);

    let delaydEvents = user.activities.delayed.type.event.map(
      (eachEvent, key) => {
        return (
          <div className="red-icon" key={key}>
            <h4>
              <FontAwesomeIcon icon={faCalendarTimes} className="icon" />{" "}
              {eachEvent.description}
            </h4>
            <h4>{eachEvent.withWho}</h4>
            <h4>Em atraso por {eachEvent.delayedFor} dias.</h4>
          </div>
        );
      }
    );
    delays.push(delaydEvents);

    return delays;
  }

  function getToBeCompletedInfo() {
    let toBeComplete = [];
    let tbcCalls = user.activities.toBeCompleted.type.call.map(
      (eachCall, key) => {
        return (
          <div className="orange-icon" key={key}>
            <h4>
              <FontAwesomeIcon icon={faPhoneAlt} className="icon" />
              {eachCall.description}
            </h4>
            <h4>{eachCall.withWho}</h4>
            <h4>
              Previsto para {eachCall.date.date} às {eachCall.date.time} horas
            </h4>
          </div>
        );
      }
    );
    toBeComplete.push(tbcCalls);
    let tbcMeetings = user.activities.toBeCompleted.type.meeting.map(
      (eachMeeting, key) => {
        return (
          <div className="orange-icon" key={key}>
            <h4>
              {" "}
              <FontAwesomeIcon icon={faUsers} className="icon" />
              {eachMeeting.description}
            </h4>
            <h4>{eachMeeting.withWho}</h4>
            <h4>
              Previsto para {eachMeeting.date.date} às {eachMeeting.date.time}{" "}
              horas
            </h4>
          </div>
        );
      }
    );

    toBeComplete.push(tbcMeetings);

    let tbcEmails = user.activities.toBeCompleted.type.email.map(
      (eachEmail, key) => {
        return (
          <div className="orange-icon" key={key}>
            <h4>
              {" "}
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              {eachEmail.description}
            </h4>
            <h4>{eachEmail.withWho}</h4>
            <h4>
              Previsto para {eachEmail.date.date} às {eachEmail.date.time} horas
            </h4>
          </div>
        );
      }
    );

    toBeComplete.push(tbcEmails);

    let tbcEvents = user.activities.toBeCompleted.type.event.map(
      (eachEvent, key) => {
        return (
          <div className="orange-icon" key={key}>
            <h4>
              {" "}
              <FontAwesomeIcon icon={faCalendarTimes} className="icon" />
              {eachEvent.description}
            </h4>
            <h4>{eachEvent.withWho}</h4>
            <h4>
              Previsto para {eachEvent.date.date} às {eachEvent.date.time} horas
            </h4>
          </div>
        );
      }
    );
    toBeComplete.push(tbcEvents);

    return toBeComplete;
  }

  function getCompletedInfo() {
    let completed = [];
    let completedCalls = user.activities.completed.type.call.map(
      (eachCall, key) => {
        return (
          <div className="green-icon" key={key}>
            <h4>
              <FontAwesomeIcon icon={faPhoneAlt} className="icon" />{" "}
              {eachCall.description}
            </h4>
            <h4>{eachCall.withWho}</h4>
            <h4>
              Realizado no dia {eachCall.date.date} às {eachCall.date.time}{" "}
              horas.
            </h4>
          </div>
        );
      }
    );
    completed.push(completedCalls);

    let completedMeetings = user.activities.completed.type.meeting.map(
      (eachMeeting, key) => {
        return (
          <div className="green-icon" key={key}>
            <h4>
              <FontAwesomeIcon icon={faUsers} className="icon" />{" "}
              {eachMeeting.description}
            </h4>
            <h4>{eachMeeting.withWho}</h4>
            <h4>
              Realizado no dia {eachMeeting.date.date} às{" "}
              {eachMeeting.date.time} horas.
            </h4>
          </div>
        );
      }
    );

    completed.push(completedMeetings);

    let completedEmails = user.activities.completed.type.email.map(
      (eachEmail, key) => {
        return (
          <div className="green-icon" key={key}>
            <h4>
              <FontAwesomeIcon icon={faEnvelope} className="icon" />{" "}
              {eachEmail.description}
            </h4>
            <h4>{eachEmail.withWho}</h4>
            <h4>
              Realizado no dia {eachEmail.date.date} às {eachEmail.date.time}{" "}
              horas.
            </h4>
          </div>
        );
      }
    );

    completed.push(completedEmails);

    let completedEvents = user.activities.completed.type.event.map(
      (eachEvent, key) => {
        return (
          <div className="green-icon" key={key}>
            <h4>
              <FontAwesomeIcon icon={faCalendarTimes} className="icon" />{" "}
              {eachEvent.description}
            </h4>
            <h4>{eachEvent.withWho}</h4>
            <h4>
              Realizado no dia {eachEvent.date.date} às {eachEvent.date.time}{" "}
              horas.
            </h4>
          </div>
        );
      }
    );
    completed.push(completedEvents);

    return completed;
  }

  return (
    <div className="activities">
      <div className="container">
        <h3 className="spacing card-title">Atividades</h3>
        <input
          className="form-control"
          type="text"
          placeholder="Pesquisar..."
          aria-label="Search"
        ></input>
        <div className="row filters">
          <div className="col">
            <button className="btn">
              <h3>
                <span className="black btn">{getTotal()}</span> Total
              </h3>
            </button>
          </div>
          <div className="col">
            <button className="btn">
              <h3>
                <span className="red btn">{delayedTotal}</span> Em atraso
              </h3>
            </button>
          </div>
          <div className="col">
            <button className="btn">
              <h3>
                <span className="blue btn">{inProgressTotal}</span> Em andamento
              </h3>
            </button>
          </div>
          <div className="col">
            <button className="btn">
              <h3>
                <span className="orange btn">{toBeCompletedTotal}</span>{" "}
                Previstas
              </h3>
            </button>
          </div>
          <div className="col">
            <button className="btn">
              <h3>
                <span className="green btn">{completedTotal}</span> Concluídas
              </h3>
            </button>
          </div>
        </div>
        <div className="ball red">
          <h3>Atividades em atraso</h3>
          {getDelayedInfo()}
        </div>
        <hr
          text-align="left"
          style={{
            color: "rgba(51,51,51,0.3)",
            backgroundColor: "rgba(51,51,51,0.3)",
            width: "2px",
            height: `${delayedTotal * 75}` + "px"
          }}
        />
        <div className="ball orange">
          <h3>Atividades previstas</h3>
          {getToBeCompletedInfo()}
        </div>
        <hr
          text-align="left"
          style={{
            color: "rgba(51,51,51,0.3)",
            backgroundColor: "rgba(51,51,51,0.3)",
            width: "2px",
            height: `${toBeCompletedTotal * 75}` + "px"
          }}
        />
        <div className="ball green">
          <h3>Atividades concluídas</h3>
          {getCompletedInfo()}
        </div>
        <hr
          text-align="left"
          style={{
            color: "rgba(51,51,51,0.3)",
            backgroundColor: "rgba(51,51,51,0.3)",
            width: "2px",
            height: `${completedTotal * 75}` + "px"
          }}
        />
      </div>
    </div>
  );
}

export default Activities;
