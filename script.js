// Example Visualization of Dijkstra’s Algorithm on a Graph
document.getElementById("simulateButton").addEventListener("click", drawGraph);

function drawGraph() {
  const canvas = document.getElementById("graphCanvas");
  const ctx = canvas.getContext("2d");

  // Animate canvas appearance
  canvas.style.opacity = "0";
  canvas.style.transform = "scale(0.8)";
  setTimeout(() => {
    canvas.style.opacity = "1";
    canvas.style.transform = "scale(1)";
  }, 100);

  // Clear Canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Define nodes and edges
  const nodes = {
    A: { x: 50, y: 150 },
    B: { x: 350, y: 150 },
    C: { x: 200, y: 50 }
  };
  const edges = [
    { from: "A", to: "C", weight: 250 },
    { from: "C", to: "B", weight: 800 },
    { from: "A", to: "B", weight: 1200 }
  ];

  // Draw edges with delay
  edges.forEach((edge, index) => {
    setTimeout(() => {
      const from = nodes[edge.from];
      const to = nodes[edge.to];
      ctx.beginPath();
      ctx.moveTo(from.x, from.y);
      ctx.lineTo(to.x, to.y);
      ctx.strokeStyle = "black";
      ctx.lineWidth = 1;
      ctx.stroke();

      // Draw weight
      const midX = (from.x + to.x) / 2;
      const midY = (from.y + to.y) / 2;
      ctx.fillStyle = "blue";
      ctx.fillText(`${edge.weight} km`, midX, midY);
    }, index * 300);
  });

  // Draw nodes with delay
  Object.keys(nodes).forEach((node, index) => {
    setTimeout(() => {
      const { x, y } = nodes[node];
      ctx.beginPath();
      ctx.arc(x, y, 20, 0, Math.PI * 2);
      ctx.fillStyle = "lightgreen";
      ctx.fill();
      ctx.strokeStyle = "green";
      ctx.stroke();

      // Draw node label
      ctx.fillStyle = "black";
      ctx.fillText(node, x - 5, y + 5);
    }, edges.length * 300 + index * 300);
  });
}

// Static Map Simulation with Animation
window.onload = function () {
  const map = document.getElementById("map");
  map.style.animation = "pulse 2s infinite"; // Add pulsing animation
};
// Back to Top Button Logic
const backToTopButton = document.getElementById("backToTop");

// Show/Hide Button on Scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTopButton.style.opacity = "1";
    backToTopButton.style.visibility = "visible";
  } else {
    backToTopButton.style.opacity = "0";
    backToTopButton.style.visibility = "hidden";
  }
});

// Scroll Back to Top When Clicked
backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: -50,
    behavior: "smooth"
  });
});
