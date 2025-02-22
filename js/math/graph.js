class Graph {
  constructor(points = [], segments = []) {
    this.points = points;
    this.segments = segments;
  }
  draw(ctx) {
    for (const seg of this.segments) {
      seg.draw(ctx);
    }
    for (const point of this.points) {
      point.draw(ctx);
    }
  }
  addPoint(point) {
    this.points.push(point);
  }

  containsPoint(point) {
    return this.points.find((p) => p.equals(point));
  }

  tryAddPoint(point) {
    if (!this.containsPoint(point)) {
      this.addPoint(point);
      return true;
    }
    return false;
  }
  addSegment(segment) {
    this.segments.push(segment);
  }
  containsSegment(segment) {
    return this.segments.find((s) => s.equals(segment));
  }
  tryAddSegment(segment) {
    if (!this.containsSegment(segment) && !segment.p1.equals(segment.p2)) {
      this.addSegment(segment);
      return true;
    }
    return false;
  }
  removeSegment(segment) {
    this.segments.splice(this.segments.indexOf(segment), 1);
  }
  getSegmentsWithPoint(point) {
    return this.segments.filter((seg) => seg.includes(point));
  }
  removePoint(point) {
    const segments = this.getSegmentsWithPoint(point);
    for (const seg of segments) {
      this.removeSegment(seg);
    }
    this.points.splice(this.points.indexOf(point), 1);
  }
  dispose() {
    this.points = [];
    this.segments = [];
  }
}
