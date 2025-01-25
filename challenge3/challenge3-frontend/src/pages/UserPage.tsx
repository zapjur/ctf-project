import React, { useState } from "react";

const UserPage: React.FC = () => {
  const [showHint, setShowHint] = useState(false);

  const toggleHint = () => {
    setShowHint(prevState => !prevState);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <h1>Welcome to the User Page!</h1>
      <div>
        <p style={{ fontSize: "1.25rem", fontWeight: "500", lineHeight: "1.6" }}>
          Chowanie danych w obrazie, znane jako steganografia, polega na ukrywaniu informacji w taki sposób, by nie rzucały się w oczy. W kontekście obrazów często stosuje się technikę modyfikacji najmniej znaczących bitów (LSB, ang. Least Significant Bit) w pikselach, dzięki czemu dane są zapisane w obrazie, ale nie wpływają zauważalnie na jego wygląd. Przykładowo, tekst, klucz czy nawet inny plik można zaszyć w tych bitach.
        </p>
        <p style={{ fontSize: "1.25rem", fontWeight: "500", lineHeight: "1.6" }}>
          W zadaniach typu CTF (Capture The Flag), steganografia jest często wykorzystywana do ukrycia flagi lub ukrycia niezbędnych informacji do jej zdobycia. Uczestnicy muszą zidentyfikować, że dane są ukryte, a następnie je wydobyć. Czasami zaszyte dane są zabezpieczone hasłem lub ukryte w nietypowy sposób, np. w metadanych obrazu, kanale alfa czy przez manipulację paletą kolorów.
        </p>
        <p style={{ fontSize: "1.25rem", fontWeight: "500", lineHeight: "1.6" }}>
          Przykładową stroną do chowania i wyciągania danych z plików moze byc https://georgeom.net/StegOnline/upload
        </p>
        <div>
        {!showHint && (
          <button
          onClick={toggleHint}
          style={{
            display: "inline-block",
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            cursor: "pointer",
            fontSize: "1rem",
            height: "41px",
            borderRadius: "5px",
            marginTop: "20px",
            fontWeight: "bold",
          }}
        >
          Hint
        </button>
        )}
        {showHint && (
          <button onClick={toggleHint} 
          style={{ 
            display: "inline-block",
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            cursor: "pointer",
            fontSize: "1rem",
            height: "41px",
            borderRadius: "5px",
            marginTop: "20px",
            fontWeight: "bold",
            }}>
            RGB 7 7 7 ;)
          </button>
        )}
        </div>
        <a
          href="/piesek_embeded.jpg"
          download="piesek_embeded.jpg"
          style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "white",
            textDecoration: "none",
            borderRadius: "5px",
            fontSize: "1rem",
            fontWeight: "bold",
          }}
        >
          Pobierz testowy plik
        </a>
      </div>
    </div>
  );
};

export default UserPage;
