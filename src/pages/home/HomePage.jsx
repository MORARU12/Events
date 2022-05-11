import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { home } from "../../features/home/homeSlice";
import ClientList from "./components/ClientList";

const HomePage = () => {
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.home
  );
  useEffect(() => {
    dispatch(home());
  }, [dispatch]);

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  if (isSuccess) {
    return (
      <div>
        <h1>Home</h1>
        <div className="client-stats">
          {user.map((user) => (
            <ClientList user={user} key={user._id} />
          ))}
        </div>
      </div>
    );
  }
};

export default HomePage;
