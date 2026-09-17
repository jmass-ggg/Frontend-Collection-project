import { useState } from "react";
import axios from "axios";

const App = () => {
  const [users, setUsers] = useState([]);

  const getData = async () => {
    const response = await axios.get("https://picsum.photos/v2/list");
    setUsers(response.data);
  };

  return (
    <div>
      <button onClick={getData} className="get-data">
        Get data
      </button>

      <div className="images">
        {users.map((image) => (
          <div className="image-card" key={image.id}>
            <img
              src={`https://picsum.photos/id/${image.id}/500/333`}
              alt={image.author}
              width="200"
              loading="lazy"
            />
            <p>{image.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;