import React from "react";

const Header = () => {
  return (
    <header style={{
        backgroundColor: "#f8f9fa",
        padding: "4rem 0", 
        textAlign: "center",
      }}
    >
      <div className="container">
        <h1 style={{
            fontSize: "3.5rem",
            fontWeight: "700", 
            marginBottom: "1rem", 
          }}
        >
          A Warm Welcome!
        </h1>
        <p style={{
            fontSize: "1.25rem", 
            marginBottom: "2rem",
            color: "#6c757d", 
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,
          eligendi, in quo sunt possimus non incidunt odit vero aliquid.
        </p>
        <button style={{
            backgroundColor: "#007bff", 
            border: "none", 
            color: "#fff", 
            padding: "0.75rem 1.25rem", 
            fontSize: "1rem", 
            borderRadius: "0.25rem", 
            cursor: "pointer", 
          }}
        >
          Call to action!
        </button>
      </div>
    </header>
  );
};

export default Header;
