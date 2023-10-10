import "./App.css";
import { ButtonSave } from "./components/ButtonSave/ButtonSave";
import CardButton from "./components/CardButton/CardButton";
import { JournalItem } from "./components/JournalItem/JournalItem";

function App() {
  const data = [
    {
      id: 1,
      title: "Поход в горы",
      text: "Думал, что очень много времени",
      date: new Date(),
    },
    {
      id: 2,
      title: "Подготовка к обновлению курсов ",
      text: "Какой то еще текст для описания ",
      date: new Date(),
    },
  ];

  return (
    <>
      <h1>Hello Nastya</h1>
      <ButtonSave />

      {data.map((item) => (
        <CardButton key={item.id}>
          <JournalItem title={item.title} text={item.text} date={item.date} />
        </CardButton>
      ))}
    </>
  );
}

export default App;
