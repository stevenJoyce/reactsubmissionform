import { useState } from 'react';
import './App.css';

function App() {
  //variables to save user form data
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");
  const [selVal, setSelVal] = useState();

  const genders = [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },
    { value: 'Transgender', label: 'Trans' },
    { value: 'Gender-Neutral', label: 'Gender-Neutral' },
    { value: 'Non-Binary', label: 'Non-Binary' },
  ];

  return (
    <div className="App">
      <header className="App-header">

        ReactJS Submission Form
      </header>
      <body>
        <form>
          <label>
            <b> Enter Name </b>
            <input type='text' value={name}
              onChange={(e) => setName(e.target.value)} />
          </label> <br />
          <label>
            <b> Enter Age </b>
            <input type='number' value={age}
              onChange={(e) => setAge(e.target.value)} />
          </label> <br />

          <label>
            <b> Enter Gender </b>
          </label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            {genders.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select> <br />
          <label> <b>Experience Level</b> </label> <br />
          <input type='radio'
            name="experience"
            value="Entry-Level"
            onChange={e => setSelVal(e.target.value)} /> Entry-Level
          <input type='radio'
            name="experience"
            value="Intermediate"
            onChange={e => setSelVal(e.target.value)} /> Intermediate
          <input type='radio'
            name="experience"
            value="Mid-Level"
            onChange={e => setSelVal(e.target.value)} /> Mid-Level
          <input type='radio'
            name="experience"
            value="Senior or Executive-Level"
            onChange={e => setSelVal(e.target.value)} /> Senior or Executive-Level
        </form>
        
        <h3> <b> SAVED DETAILS </b></h3>
        Name inputted: {name} <br />
        Age inputted: {age} <br />
        Gender inputted: {gender} < br />
        Radio Button Choice : {selVal} <br />
      </body>
    </div>
  );
}

export default App;
