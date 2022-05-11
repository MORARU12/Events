import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as ArrowRightSvg } from "../../../assets/icons/arrow-next.svg";

const ClientList = (user) => {
  const { payment_type, unique_id, created_at, activated_at, _id } = user.user;

  return (
    <>
      <section className="client-stats_section">
        <p className="client-stats_p">
          <span>Payment type:</span>
          {payment_type}
        </p>
        <p className="client-stats_p">
          <span>Unique id:</span>
          {unique_id}
        </p>
        <p className="client-stats_p">
          <span>Created at:</span>
          {created_at}
        </p>
        <p className="client-stats_p">
          <span>Activated at:</span>
          {activated_at}
        </p>
        <Link to={`client/${_id}`}>
          <ArrowRightSvg />
        </Link>
      </section>
    </>
  );
};

export default ClientList;
