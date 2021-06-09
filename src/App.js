import React, { useState } from 'react';
import CardList from "./CardList";
import Form from "./Form";

const testData = [
  { name: "Christian John Gonzalez", avatar_url: "https://avatars.githubusercontent.com/u/7649358?v=4", company: "", id: 7649358, },
];

function App(props) {
  const [profiles, setProfiles] = useState(testData)

  function addProfile(profileData) {
    setProfiles([...profiles, profileData])
  }

  return (
    <div className="App">
      <h1>{props.title}</h1>
      <Form onSubmit={addProfile} />
      <CardList profiles={profiles} />
    </div>
  );
}

export default App;
