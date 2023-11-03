import "./App.css";
import { useState } from "react";
import { JournalAddButton } from "./components/JournalAddButton/JournalAddButton";
import { Header } from "./components/Header/Header";
import { JournalList } from "./components/JournalList/JournalList";
import CardButton from "./components/CardButton/CardButton";
import { JournalItem } from "./components/JournalItem/JournalItem";
import { Body } from "./layout/Body/Body";
import { LefPanel } from "./layout/LeftPanel/LeftPanel";
import { JournalForm } from "./components/JournalForm/JournalForm";

const INITIAL_DATA = [
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

function App() {
  const [items, setItems] = useState(INITIAL_DATA);

  const addItem = (item) => {
    setItems((oldItems) => [
      ...oldItems,
      {
        text: item.text,
        title: item.title,
        date: new Date(item.date),
        id: Math.max(...oldItems.map((i) => i.id)) + 1,
      },
    ]);
  };

  const sortItems = (a, b) => {
    if (a.date < b.date) {
      return -1;
    } else {
      return -1;
    }
  };
  return (
    <div className="app">
      <LefPanel>
        <Header />
        <JournalAddButton />
        <JournalList>
          {items.sort(sortItems).map((item) => (
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
      <Body>
        <JournalForm onSubmit={addItem} />
      </Body>
    </div>
  );
}

export default App;
