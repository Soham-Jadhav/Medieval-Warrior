// Add parse2D function to the array object
Array.prototype.parse2D = function () {
    const rows = [];

    for (let i = 0; i < this.length; i += 16) {
        rows.push(this.slice(i, i + 16));
    }

    return rows;
}

// Create collusion blocks object array form parsed 2D array
Array.prototype.createObjectsFrom2D = function () {
    const objects = [];

    this.forEach((row, i) => {
        row.forEach((symbol, j) => {
            if (symbol === 292) {
                // Push collusion block
                objects.push(new CollsionBlock({
                    position: {
                        x: j * 64,
                        y: i * 64
                    }
                }));
            }
        });
    });

    return objects;
}