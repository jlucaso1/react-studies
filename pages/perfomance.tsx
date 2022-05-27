import React, { useState } from "react";
export default function Home() {
  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);

  const counterALess10 = counterA < 10;
  const headingStyle = React.useMemo(
    () => ({
      color: counterALess10 ? "blue" : "red",
    }),
    [counterALess10]
  );
  return (
    <div>
      <Heading style={headingStyle}>Home</Heading>
      <Counter
        name="A"
        value={counterA}
        onClickIncrement={React.useCallback(
          () => setCounterA(counterA + 1),
          [counterA]
        )}
      />
      <Counter
        name="B"
        value={counterB}
        onClickIncrement={React.useCallback(
          () => setCounterB(counterB + 1),
          [counterB]
        )}
      />
    </div>
  );
}

const Counter = React.memo(function Counter({
  name,
  value,
  onClickIncrement,
}: {
  name: string;
  value: number;
  onClickIncrement: () => void;
}) {
  console.log(`Rendering counter ${name}`);
  return (
    <div>
      {name}: {value} <button onClick={onClickIncrement}>Increment</button>
    </div>
  );
});

const Heading = React.memo(function Heading({
  children,
  ...props
}: {
  style: React.CSSProperties;
  children: React.ReactNode;
}) {
  console.log("Rendering heading");
  return <h1 {...props}>{children}</h1>;
});
