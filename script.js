const grid = document.getElementById('grid');
        const newGridBtn = document.getElementById('newGridBtn');
        
        function createGrid(size) {

            grid.innerHTML = '';

            document.querySelector('h1').textContent = `${size}×${size} Grid`;

            const squareSize = (100 / size);

            for (let i = 0; i < size * size; i++) {
                const square = document.createElement('div');
                square.className = 'square';
                square.style.width = `calc(${squareSize}% - 2px)`;
                square.style.height = `calc(${squareSize}% - 2px)`;
                square.dataset.interactions = '0';

                square.addEventListener('mouseenter', function() {
                    let interactions = parseInt(this.dataset.interactions);

                    if (interactions === 0) {
                        const r = Math.floor(Math.random() * 256);
                        const g = Math.floor(Math.random() * 256);
                        const b = Math.floor(Math.random() * 256);
                        this.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
                    }

                    interactions = Math.min(interactions + 1, 10);
                    this.dataset.interactions = interactions;

                    const opacity = interactions * 0.1;
                    this.style.opacity = opacity;
                });
                
                grid.appendChild(square);
            }
        }
        createGrid(16);

        newGridBtn.addEventListener('click', function() {
            const userInput = prompt('Enter number of squares per side (max 100):');
            const size = parseInt(userInput);
            
            if (userInput === null) {

                return;
            }
            
            if (isNaN(size) || size < 1 || size > 100) {
                alert('Please enter a valid number between 1 and 100');
                return;
            }
            
            createGrid(size);
        });