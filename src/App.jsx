import { useEffect, useState, useRef } from "react";
import A from "./components/A";
import B from "./components/B";
import C from "./components/C";
import D from "./components/D";
import E from "./components/E";

const App = () => {
  const [isObserved, setIsObserved] = useState(false);

  const cRef = useRef();
  const observer = useRef();

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersection) {
        setIsObserved(true);
      } else {
        setIsObserved(false);
      }
    });

    observer.current.observe(cRef.current);

    return () => observer.current.unobserve(cRef.current);
  }, []);

  return (
    <>
      <A />
      <B isObserved={isObserved} />
      <C cRef={cRef} />
      <D isObserved={isObserved} />
      <E />
    </>
  );
};

export default App;
