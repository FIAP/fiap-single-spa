import { useEffect } from "react";

export default function Root(props) {
  useEffect(() => {
    const handleNavClick = () => {
      console.log("[dashboard] onNavClick");
    };

    document.addEventListener("onNavClick", handleNavClick);

    return () => {
      document.removeEventListener("onNavClick", handleNavClick);
    };
  }, []);
  return <section>{props.name} is mounted!</section>;
}
