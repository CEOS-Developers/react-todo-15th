export const colors : string[] = [
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59"
  
    ];

    const firstColor = colors[Math.floor(Math.random() * colors.length)];
    const secondColor = colors[Math.floor(Math.random() * colors.length)];
    
    document.body.style.background = `linear-gradient(${firstColor}, ${secondColor})`;