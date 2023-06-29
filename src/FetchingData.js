import React, { useState, useEffect } from "react";

const FetchingData = () => {
  //let url = 'https://panorbit.in/api/users.json;

  const [profiles, setProfiles] = useState([]);

  const FetchProducts = async () => {
    const res = await fetch("https://panorbit.in/api/users.json");
    // console.log(res, "response");
    const data = await res.json();
    setProfiles(data.users);
    console.log(data.users);
  };

  useEffect(() => {
    FetchProducts();
  }, []);

  return (
    <div>
      <h1>FetchingData</h1>
      {profiles.length > 0 && (
        <div className="mainProfile">
          {profiles.map((item, index) => {
            return (
              <div key={index} className="profile">
                <img
                  src={item.profilepicture}
                  alt={item.name}
                  height={100}
                  width={100}
                />
                <h3>Name - {item.name}</h3>
                <h5> Email - {item.email}</h5>
                <p>Company- {item.company.name}</p>
                <h6>
                  Website- <a href={item.website}>{item.website}</a>
                </h6>
                <h6>ZipCode -{item.address.zipcode}</h6>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default FetchingData;
