class GraphEditor {
  constructor(canvas, graph) {
    this.canvas = canvas;
    this.graph = graph;
    this.ctx = this.canvas.getContext("2d");
    this.selected = null;
    this.hovered = null;
    this.#addEventListeners();
  }
  #addEventListeners() {
    this.canvas.addEventListener("mousedown", (e) => {
        // if ()
      const mouse = new Point(e.offsetX, e.offsetY);
      if (this.hovered) {
        this.selected = this.hovered;
        return;
      }
      this.graph.addPoint(mouse);
      this.selected = mouse;
    });
    this.canvas.addEventListener("mousemove", (e) => {
      const mouse = new Point(e.offsetX, e.offsetY);
      this.hovered = getNearestPoint(this.graph.points, mouse);
    
    });
  }

  display() {
    this.graph.draw(this.ctx);
    if (this.hovered) {
      this.hovered.draw(this.ctx, { fill: true });
    }
    if (this.selected) {
      this.selected.draw(this.ctx, { outline: true });
    }
  }
}
