import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Store } from "../Store";

const SingleMessage = () => {
  const { state } = useContext(Store);
  const { userInfo } = state;
  const params = useParams();
  const { id } = params;
  const [message, setMessage] = useState(null);
 

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`/api/received-messages/${id}`,
      {
        headers: { Authorization: `Bearer ${userInfo.access}` },
      }
      );
      const data = result.data;
      console.log(data);
      setMessage(data);
    };

    fetchData();
  }, [id, userInfo.access]);

  return (
    <div>
      {/* SingleMessage {id} */}
      <h2>{message?.subject}</h2>
      <h1>{message?.content}</h1>
    </div>
  );
};

export default SingleMessage;
