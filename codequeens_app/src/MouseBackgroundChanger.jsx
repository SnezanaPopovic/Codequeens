import { useEffect } from "react";

function MouseBackgroundChanger() {
  useEffect(() => {
    console.log("MouseBackgroundChanger montiran");

    function handleMouseMove(e) {
      const x = e.clientX;
      const y = e.clientY;
      const r = Math.round((x / window.innerWidth) * 255);
      const g = Math.round((y / window.innerHeight) * 255);
      const b = 150;

      document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }

    window.addEventListener("mousemove", handleMouseMove);
    console.log("Mousemove listener aktivan");

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.style.backgroundColor = "gray";
      console.log(
        "MouseBackgroundChanger unmountovan - listener uklonjen, pozadina resetovana"
      );
    };
  }, []);

  return (
    <div>
      <h2>3.Promena pozadine na osnovu misa</h2>
    </div>
  );
}

export default MouseBackgroundChanger;
