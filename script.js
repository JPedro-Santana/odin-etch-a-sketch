const container = document.getElementById('container');


for(let i = 0; i < 256; i++){
    const grid = document.createElement('div');
    grid.className = 'square';

    container.append(grid);
}