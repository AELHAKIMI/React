import React from "react";
import Person from "./Person";

function NameList() {
  // const names = ["Ayoub", "khalid", "Yassine", "Mohamed"];
  // const nameList = names.map((name, index) => <h2 key = {index}> {index} {name}</h2>);
  // // return <div>{nameList}</div>;

  const persons = [
    {
      id: 1,
      name: "Ayoub",
      age: 28,
      skill: "React"
    },
    {
      id: 2,
      name: "Khalid",
      age: 30,
      skill: "Java"
    },
    {
      id: 3,
      name: "Hicham",
      age: 30,
      skill: "Python"
    },
    {
      id: 4,
      name: "Yassine",
      age: 36,
      skill: "C#"
    }
  ];
  const personList = persons.map(person => <Person key={person.id} person={person} />);

  return <div> {personList}</div>;
}

export default NameList;
