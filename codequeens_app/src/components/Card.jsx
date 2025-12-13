export const Card = ({ children }) => {
  return (
    <div
      style={{
        border: "1px solid white",
        padding: "20px",
        backgroundColor: "green",
        margin: "20px",
      }}
    >
      {children}
    </div>
  );
};
