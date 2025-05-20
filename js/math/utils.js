function getNearestPoint(points, target, treshold = 10) {
  let minDist = Infinity;
  let nearest = null;
  for (const point of points) {
    // const dist = point.dist(target);
    const dist = distance(point, target);
    if (dist < minDist && dist < treshold) {
      minDist = dist;
      nearest = point;
    }
  }
  return nearest;
}

function distance(p1, p2) {
  return Math.hypot(p1.x - p2.x, p1.y - p2.y);
}