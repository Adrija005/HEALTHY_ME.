import React, { useContext, useEffect, useState } from 'react';
import { Context } from "../main";
import { Navigate } from 'react-router-dom';
import axios from "axios";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { isAuthenticated } = useContext(Context);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const { data } = await axios.get("http://localhost:4000/api/v1/message/getall", 
          { withCredentials: true }
        );
        setMessages(data.messages);
      } catch (error) {
        console.log("ERROR OCCURED WHILE FETCHING MESSAGES:", error);
        if (error.response) {
          // Server responded with a status other than 2xx
          console.error('Error response:', error.response.data);
        } else if (error.request) {
          // Request was made but no response received
          console.error('No response received:', error.request);
        } else {
          // Error setting up the request
          console.error('Error setting up request:', error.message);
        }
      }
    }
    fetchMessages();
  }, []);

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return (
    <section className="page messages">
      <h1>Messages</h1>
      <div className="banner">
        {messages && messages.length > 0 ? (
          messages.map(element => (
            <div className="card" key={element._id}>
              <div className="details">
                <p>
                  First Name: <span>{element.firstName}</span>
                </p>
                <p>
                  Last Name: <span>{element.lastName}</span>
                </p>
                <p>
                  Email: <span>{element.email}</span>
                </p>
                <p>
                  Phone: <span>{element.phone}</span>
                </p>
                <p>
                  Message: <span>{element.message}</span>
                </p>
              </div>
            </div>
          ))
        ) : (
          <h1>No Messages!</h1>
        )}
      </div>
    </section>
  );
}

export default Messages;
