import { v4 as uuidv4 } from "uuid";

const Data = [
  {
    id: uuidv4(),
    title: "To do 📃",
    tasks: [
      {
        id: uuidv4(),
        title: "Learn c#",
      },
      {
        id: uuidv4(),
        title: "Learn React native",
      },
      {
        id: uuidv4(),
        title: "Learn Svelte",
      },
      {
        id: uuidv4(),
        title: "Learn Typescript",
      },
      {
        id: uuidv4(),
        title: "Learn Vue",
      },
      {
        id: uuidv4(),
        title: "Learn advanced Git",
      },
      {
        id: uuidv4(),
        title: "Learn Python",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "in Process ✏️",
    tasks: [
      {
        id: uuidv4(),
        title: "Learn React",
      },
      {
        id: uuidv4(),
        title: "Learn photoshop",
      },
      {
        id: uuidv4(),
        title: "Learn figma",
      },
      {
        id: uuidv4(),
        title: "Learn Node",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Complete ✔️",
    tasks: [
      {
        id: uuidv4(),
        title: "Learn HTML",
      },
      {
        id: uuidv4(),
        title: "Learn Css",
      },
      {
        id: uuidv4(),
        title: "Learn Javascript",
      },
    ],
  },
];

export default Data;
