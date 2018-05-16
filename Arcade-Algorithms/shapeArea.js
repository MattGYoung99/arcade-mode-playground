// Below we will define an n-interesting polygon.
// Your task is to find the area of a polygon for a given n.

function shapeArea(n) {
	let area = 1;
        for (let x=0;x<n;x++)
                area += 4*x;
        return area;
}
