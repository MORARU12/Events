import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { client } from "../../features/client/clientSlice";
import { clientUpdate } from "../../features/client/clientUpdateSlice";

import Switcher from "./components/Switcher";

import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const Client = () => {
  const [formData, setFormData] = useState(null);

  const [isToggled, setIsToggled] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.client
  );
  // const { isLoading, isError, isSuccess, message } = useSelector(
  //   (state) => state.clientUpdate
  // );

  useEffect(() => {
    dispatch(client(id));
  }, [id]);

  useEffect(() => {
    setFormData(user);
  }, [user]);

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData) {
      const {
        activated,
        activated_at,
        created_at,
        email,
        name,
        notes,
        payment_type,
        resources,
        ticket_image,
        ticket_type,
        unique_id,
        _id,
      } = formData;

      const userData = {
        activated,
        activated_at,
        created_at,
        email,
        name,
        notes,
        payment_type,
        resources,
        ticket_image,
        ticket_type,
        unique_id,
        _id,
      };

      // console.log(userData);

      dispatch(clientUpdate({ id, userData }));
    }
  };

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  if (isSuccess && formData) {
    const {
      activated,
      activated_at,
      created_at,
      email,
      name,
      notes,
      payment_type,
      resources,
      ticket_image,
      ticket_type,
      unique_id,
      _id,
    } = formData;

    return (
      <div>
        <div className="client-header">
          <h1>Client form</h1>
          <section>
            <p>edit mode {isToggled ? "on" : "off"}</p>
            <Switcher
              isToggled={isToggled}
              onToggle={() => setIsToggled(!isToggled)}
            />
          </section>
        </div>
        <div className="client-form">
          <form onSubmit={handleSubmit}>
            {/* simple text */}
            <div className="form-group">
              <p>Activated:</p>
              <section>
                <p>{activated}</p>
              </section>
            </div>

            {/* simple text */}
            <div className="form-group">
              <p>Activated at:</p>
              <section>
                <p>{activated_at}</p>
              </section>
            </div>

            {/* simple text */}
            <div className="form-group">
              <p>Created at:</p>
              <section>
                <p>{created_at}</p>
              </section>
            </div>

            {/* input */}
            <div className="form-group">
              <p>email:</p>
              <section>
                <input
                  type="text"
                  name="email"
                  value={email}
                  placeholder={email}
                  onChange={handleChange}
                  disabled={!isToggled}
                />
              </section>
            </div>

            {/* input */}
            <div className="form-group">
              <p>name:</p>
              <section>
                <input
                  type="text"
                  name="name"
                  value={name}
                  placeholder={name}
                  onChange={handleChange}
                  disabled={!isToggled}
                />
              </section>
            </div>

            {/* input */}
            <div className="form-group">
              <p>notes:</p>
              <section>
                <input
                  type="text"
                  name="notes"
                  value={notes}
                  placeholder={notes}
                  onChange={handleChange}
                  disabled={!isToggled}
                />
              </section>
            </div>

            {/* simple text */}
            <div className="form-group">
              <p>Payment type:</p>
              <section>
                <p>{payment_type}</p>
              </section>
            </div>

            {/* simple text */}
            <div className="form-group">
              <p>Resources:</p>
              <section>
                <p>{resources}</p>
              </section>
            </div>

            {/* simple text */}
            <div className="form-group">
              <p>Ticket image:</p>
              <section>
                <p>{ticket_image}</p>
              </section>
            </div>

            {/* input */}
            <div className="form-group">
              <p>Ticket type:</p>
              <section>
                <input
                  type="text"
                  name="ticket_type"
                  value={ticket_type}
                  placeholder={ticket_type}
                  onChange={handleChange}
                  disabled={!isToggled}
                />
              </section>
            </div>

            {/* simple text */}
            <div className="form-group">
              <p>Unique id:</p>
              <section>
                <p>{unique_id}</p>
              </section>
            </div>

            {/* simple text */}
            <div className="form-group">
              <p>Id:</p>
              <section>
                <p>{id}</p>
              </section>
            </div>

            {/* submit button */}
            <div className="form-group">
              <p></p>
              <section>
                <button disabled={!isToggled} type="submit">
                  update details
                </button>
              </section>
            </div>
          </form>

          {/* <section className="client-stats_section client-stats_section_client-page">
            <p className="client-stats_p client-stats_p_client-page ">
              <span>Activated:</span>
              {activated}
            </p>
            <p className="client-stats_p client-stats_p_client-page">
              <span>Activated at:</span>
              {activated_at}
            </p>
            <p className="client-stats_p client-stats_p_client-page">
              <span>Created at:</span>
              {created_at}
            </p>
            <p className="client-stats_p client-stats_p_client-page">
              <span>Email:</span>
              {email}
            </p>
            <p className="client-stats_p client-stats_p_client-page">
              <span>Name:</span>
              {name}
            </p>
            <p className="client-stats_p client-stats_p_client-page">
              <span>Notes:</span>
              {notes}
            </p>
            <p className="client-stats_p client-stats_p_client-page">
              <span>Payment type:</span>
              {payment_type}
            </p>
            <p className="client-stats_p client-stats_p_client-page">
              <span>Resources:</span>
              {resources}
            </p>
            <p className="client-stats_p client-stats_p_client-page">
              <span>Ticket image:</span>
              {ticket_image}
            </p>
            <p className="client-stats_p client-stats_p_client-page">
              <span>Ticket type:</span>
              {ticket_type}
            </p>
            <p className="client-stats_p client-stats_p_client-page">
              <span>Unique id:</span>
              {unique_id}
            </p>
            <p className="client-stats_p client-stats_p_client-page">
              <span>Id:</span>
              {_id}
            </p>
          </section> */}
        </div>
      </div>
    );
  }
};

export default Client;
