// Чему равен second внутри useEffect при каждом изменении first или second - стейта. Почему?

const App = () => {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    console.log(first, second);
  }, [first]);

  return (
    <>
      <button onClick={() => setFirst(c => c + 1)}> click first </button>
      <button onClick={() => setSecond(s => s + 1)}> click second </button>
    </>
  );
};

// useEffect будет вызываться только при изменении first,
// так как он находится в массиве зависимостей