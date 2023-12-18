import { useContext } from "react";
import { ThemeContext } from "./Main";
import InsideHome from "./InsideHome";

export default function Home() {
    const { theme } = useContext(ThemeContext);

    return (
      <div
        style={{
          height: "82vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: theme.bgColor,
          color: theme.textColor,
          alignItems: "center",
        }}>
        <InsideHome></InsideHome>
      </div>
    );
}
