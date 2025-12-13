export const Alert = ({ type, children }) => {
  let color;

  if (type == "error") color = "red";
  else if (type == "success") color = "green";
  else if (type == "info") color = "blue";

  return (
    <div style={{ backgroundColor: color }}>
      {type}
      {children}
    </div>
  );
};
