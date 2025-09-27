 /* Splash-Texte, Quelle: "chiro07.at/data/splashes.txt" */
async function loadRandomLine() {
  try {
    const response = await fetch('/data/splashes.txt');
    if (!response.ok) {
      throw new Error("Splashes-Datei konnte nicht geladen werden :(");
    }

    const text = await response.text();
    const lines = text.split(/\r?\n/).filter(line => line.trim() !== ""); 
    const randomLine = lines[Math.floor(Math.random() * lines.length)];
    
    const splashElement = document.getElementById("splash");
    splashElement.textContent = randomLine;

    const today = new Date();
    const day = today.getDate();      
    const month = today.getMonth() + 1;

    splashElement.style.color = "";
    splashElement.style.fontFamily = "";

    // Spezialausnahmen
    if (randomLine.includes("Hochmodern")) {
      splashElement.style.fontFamily = "Times New Roman, monospace";
    } else if (randomLine.includes("Comic Sans")) {
      splashElement.style.fontFamily = "Comic Sans MS, cursive";
    } else if (randomLine === "Bunt ist das neue Gelb!") {
  const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
  splashElement.innerHTML = randomLine
    .split("")
    .map((char, i) => {
      if (char === " ") return " ";
      const color = colors[i % colors.length];
      return `<span style="color:${color}">${char}</span>`;
    })
    .join("");
  } else if (day == 7 && month == 7) {
    document.getElementById("splash").textContent = "Ich habe heute Geburtstag!!";
  }  else if (day == 1 && month == 1) {
    document.getElementById("splash").textContent = "Schönes neues Jahr!";
  }

  } catch (error) {
    console.error(error);
    document.getElementById("splash").textContent = "konnte nicht geladen werden >:(";
  }
}

loadRandomLine();

  