import "./App.css";
import { JournalAddButton } from "./components/JournalAddButton/JournalAddButton";
import { Header } from "./components/Header/Header";
import { JournalList } from "./components/JournalList/JournalList";
import CardButton from "./components/CardButton/CardButton";
import { JournalItem } from "./components/JournalItem/JournalItem";
import { Body } from "./layout/Body/Body";
import { LefPanel } from "./layout/LeftPanel/LeftPanel";

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
    <div className="app">
      <LefPanel>
        <Header />
        <JournalAddButton />
        <JournalList>
          {data.map((item) => (
            <CardButton key={item.id}>
              <JournalItem
                title={item.title}
                text={item.text}
                date={item.date}
              />
            </CardButton>
          ))}
        </JournalList>
      </LefPanel>
      <Body>Body</Body>
    </div>
  );
}

export default App;
