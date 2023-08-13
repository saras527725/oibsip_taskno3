const a = document.querySelector('input');
        const b = document.querySelector('.addTask > button');

        b.addEventListener('click', addList);
        a.addEventListener('keyup', (d) => {
            (d.keyCode === 13 ? addList(d) : null);
        })

        function addList(d) {
            const notdone = document.querySelector('.notCompleted');
            const done = document.querySelector('.Completed');

            const z = document.createElement('li');
            const w = document.createElement('button');
            const q = document.createElement('button');

            w.innerHTML = '<i class="fa fa-check"></i>';
            q.innerHTML = '<i class="fa fa-trash"></i>';


            if (a.value !== '') {
                const task = a.value;
                const timestamp = getCurrentTimestamp();
                z.innerHTML = `${task}<span class="timestamp">${timestamp}</span>`;
                a.value = '';
                notdone.appendChild(z);
                z.appendChild(w);
                z.appendChild(q);
            }

            w.addEventListener('click', function() {
                const parent = this.parentNode;
                parent.remove();
                done.appendChild(parent);
                w.style.display = 'none';
            });

            q.addEventListener('click', function() {
                const parent = this.parentNode;
                parent.remove();
            });
        }

        function getCurrentTimestamp() {
            const now = new Date();
            return `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
        }