
        const eggsData = [
            { id: 1, name: "Trichostrongylidae (excepto Nematodirus spp. y Marshallagia spp.)", tags: ["segmentado", "con-camara", "rumiantes"], desc: "Segmentados. 80x40 µm. Cámara de aire. Membrana fina. MF rumiante", img: "./img/Trichostrongylidae.jpg" },
            { id: 2, name: "Marshallagia spp.", tags: ["segmentado", "con-camara", "rumiantes"], desc: "Segmentado. 160x80 µm. Cámara de aire. Bordes paralelos.", img: "./img/Marshallagia.jpg" },
            { id: 3, name: "Nematodirus spp.", tags: ["segmentado", "con-camara", "rumiantes"], desc: "Segmentado. 160x80 µm. Cámara de aire. Puntas acuminadas.", img: "./img/Nematodirus.jpg" },
            { id: 4, name: "Strongylidae", tags: ["segmentado", "con-camara", "equinos"], desc: "Segmentados. 80x40 µm. Cámara de aire. Membrana fina. MF equino", img: "./img/Strongylidae.jpg" },
            { id: 5, name: "Macracanthorhynchus hirudinaceus", tags: ["sin-camara", "embrionado", "porcinos"], desc: "Cáscara gruesa (4 membranas). 80x50 µm. Sin cámara de aire. Embrionado (acanthor)", img: "./img/Macracanthorhynchus.jpg" },
            { id: 6, name: "Ancylostominae", tags: ["segmentado", "con-camara", "caninos", "felinos"], desc: "Segmentado. 65-80x40 µm. Varias blastómeras.", img: "./img/Ancylostominae.jpg" },
            { id: 7, name: "Hyostrongylus rubidus (Trichostrongylidae)", tags: ["segmentado", "con-camara", "porcinos"], desc: "Segmentados. 80x40 µm. Cámara de aire. Membrana fina. MF porcino", img: "./img/Trichostrongylidae.jpg" },
            { id: 8, name: "Dioctophyma renale", tags: ["no-segmentado"], desc: "No Segmentado. 60-80x45 µm. Depresiones en superficie y polos lisos.", img: "./img/Dioctophyma.jpg" },
            { id: 9, name: "Ascaris suum", tags: ["no-segmentado", "con-camara", "porcinos"], desc: "No Segmentado. 70-80 µm. Cámara de aire. Cáscara gruesa. Superficie abollonada.", img: "./img/Ascaris.jpg" },
            { id: 10, name: "Toxocara spp.", tags: ["no-segmentado", "con-camara", "caninos", "felinos"], desc: "No Segmentado. 80 µm. Cámara de aire. Cáscara gruesa con finas fosetas.", img: "./img/Toxocara.jpg" },
            { id: 11, name: "Toxascaris leonina", tags: ["no-segmentado", "con-camara", "caninos", "felinos"], desc: "No Segmentado. 80 µm. Cámara de aire. Cáscara gruesa y lisa.", img: "./img/Toxascaris.jpg" },
            { id: 12, name: "Parascaris equorum", tags: ["no-segmentado", "con-camara", "equinos"], desc: "No Segmentado. 80-90 µm. Cámara de aire. Cáscara gruesa.", img: "./img/Parascaris.jpg" },
            { id: 13, name: "Trichuris spp.", tags: ["tapones", "con-camara", "no-segmentado", "caninos", "felinos", "porcinos", "rumiantes"], desc: "No Segmentado. 70 µm. Cámara de aire. 2 tapones polares. Cáscara gruesa", img: "./img/Trichuris.jpg" },
            { id: 14, name: "Dibothriocephalus latus (Diphyllobothrium latum)", tags: ["no-segmentado", "sin-camara", "operculo", "caninos", "felinos"], desc: "Sín cámara de aire, operculado, no segmentado. 70x40 µm.", img: "./img/Dibothriocephalus.jpg" },
            { id: 15, name: "Metastrongylus spp.", tags: ["larvado", "porcinos"], desc: "Larvado. 60x40 µm. Cáscara gruesa.", img: "./img/Metastrongylus.jpg" },
            { id: 16, name: "Strongyloides spp.", tags: ["larvado", "caninos", "felinos"], desc: "Larvado. 50x40 µm. Membrana fina", img:"./img/Strongyloides.jpg" },
            { id: 17, name: "Oxyuris equi", tags: ["larvado", "operculo", "con-camara", "equinos"], desc: "Larvado. 90 µm. Cámara de aire. Operculado. Asimétrico.", img: "./img/Oxyuris.jpg" },
            { id: 18, name: "Fasciola hepatica / Paramphistomum spp.", tags: ["sin-camara", "operculo", "no-segmentado", "rumiantes"], desc: "No segmentado. 120-140x70-80 µm. Operculado. Sin cámara de aire.", img: "./img/Fasciola.jpg" },
            { id: 19, name: "Taeniidae / Dipylidium caninum", tags: ["sin-camara", "embrionado", "caninos", "felinos"], desc: "Con embrión hexacanto. 40 µm. Sin cámara de aire. Membrana radiada", img: "./img/Taeniidae.jpg" },
            { id: 20, name: "Anoplocephalidae", tags: ["sin-camara", "embrionado", "equinos", "rumiantes"], desc: "Con aparato piriforme (excepto Thysanosoma spp.). 50-70 µm. Sin cámara de aire. Forma irregular", img: "./img/Anoplocephalidae.jpg" },
            

        ];

        let activeFilters = new Set();
        let solvedIds = new Set();

        const exclusionGroups = [
            ['con-camara', 'sin-camara'],
            ['segmentado', 'no-segmentado', 'larvado', 'embrionado'],
            ['tapones', 'operculo'],
            ['caninos', 'felinos', 'rumiantes', 'equinos', 'porcinos']
        ];

        const filterTitles = {
            'segmentado': 'Segmentados',
            'no-segmentado': 'No segmentados',
            'larvado': 'Larvados',
            'tapones': 'Con tapones polares',
            'operculo': 'Con opérculo',
            'con-camara': 'Con cámara de aire',
            'sin-camara': 'Sin cámara de aire',
            'caninos': 'MF canino',
            'felinos': 'MF felino',
            'rumiantes': 'MF rumiantes',
            'equinos': 'MF equino',
            'porcinos': 'MF porcino',
            'embrionado': 'Con embrión'
        };

        async function requestLandscape() {
            try {
                if (document.documentElement.requestFullscreen) {
                    await document.documentElement.requestFullscreen();
                }
                if (screen.orientation && screen.orientation.lock) {
                    await screen.orientation.lock('landscape');
                }
            } catch (err) {
                console.log("No se pudo bloquear la orientación:", err);
            }
        }

        function renderActivity() {
            const grid = document.getElementById('egg-grid');
            const descList = document.getElementById('descriptions-list');
            const filterTagsContainer = document.getElementById('active-filters-tags');
            
            let filtered = eggsData;
            if (activeFilters.size > 0) {
                filtered = eggsData.filter(egg => 
                    [...activeFilters].every(filter => egg.tags.includes(filter))
                );
            }

            filtered = [...filtered].sort(() => Math.random() - 0.5);
            
            grid.innerHTML = '';
            descList.innerHTML = '';

            if (activeFilters.size > 0) {
                filterTagsContainer.innerHTML = [...activeFilters].map(f => 
                    `<span class="bg-blue-900/50 text-blue-300 text-[9px] px-2 py-0.5 rounded border border-blue-700/50">${filterTitles[f]}</span>`
                ).join('');
            } else {
                filterTagsContainer.innerHTML = `<span class="text-[10px] text-slate-500 italic">Ninguno (Viendo todos)</span>`;
            }

            filtered.forEach(egg => {
                const isSolved = solvedIds.has(egg.id);
                const dropZone = document.createElement('div');
                dropZone.className = `card-drop rounded-xl p-4 flex flex-col items-center text-center ${isSolved ? 'correct' : ''}`;
                dropZone.setAttribute('data-id', egg.id);
                
                if (!isSolved) {
                    dropZone.ondragover = (e) => { e.preventDefault(); dropZone.classList.add('drag-over'); };
                    dropZone.ondragleave = () => dropZone.classList.remove('drag-over');
                    dropZone.ondrop = (e) => handleDrop(e, egg.id);
                }

                dropZone.innerHTML = `
                    <div class="h-32 w-full bg-slate-900 rounded mb-3 flex items-center justify-center relative overflow-hidden">
                        <img src="${egg.img}" alt="${egg.name}" class="max-h-full max-w-full object-contain z-10" onerror="this.style.display='none'">
                        <!--<span class="text-[10px] text-slate-800 absolute center">HUEVO ${egg.name}</span>-->
                    </div>
                    <h3 class="text-m font-bold text-violet-400 italic">${egg.name}</h3>
                    ${isSolved ? `<p class="text-[10px] text-green-400 mt-2 font-medium">✓ ${egg.desc}</p>` : ''}
                `;
                grid.appendChild(dropZone);
            });

            const pendingDescs = filtered.filter(e => !solvedIds.has(e.id));
            const shuffledDescs = [...pendingDescs].sort(() => Math.random() - 0.5);

            shuffledDescs.forEach(egg => {
                const item = document.createElement('div');
                item.className = 'draggable-item p-3 rounded-lg border border-slate-600 text-xs shadow-lg';
                item.draggable = true;
                item.innerText = egg.desc;
                
                item.ondragstart = (e) => {
                    e.dataTransfer.setData('text/plain', egg.id);
                    item.classList.add('dragging');
                };
                item.ondragend = () => item.classList.remove('dragging');
                
                descList.appendChild(item);
            });

            updateScore(filtered.length, filtered);
        }

        function handleDrop(e, targetId) {
            e.preventDefault();
            const draggedId = parseInt(e.dataTransfer.getData('text/plain'));
            const dropZone = document.querySelector(`.card-drop[data-id="${targetId}"]`);
            dropZone.classList.remove('drag-over');

            if (draggedId === targetId) {
                solvedIds.add(targetId);
                dropZone.classList.add('correct');
                setTimeout(renderActivity, 300);
            } else {
                dropZone.classList.add('incorrect');
                setTimeout(() => dropZone.classList.remove('incorrect'), 400);
            }
        }

        function updateScore(total, currentItems) {
            const currentItemsIds = currentItems.map(e => e.id);
            const solvedInCurrent = [...solvedIds].filter(id => currentItemsIds.includes(id)).length;
            document.getElementById('score').innerText = `Aciertos: ${solvedInCurrent}/${total}`;
        }

        function toggleFilter(category) {
            const btn = document.getElementById('filter-' + category);
            
            if (activeFilters.has(category)) {
                activeFilters.delete(category);
                btn.classList.remove('active');
            } else {
                exclusionGroups.forEach(group => {
                    if (group.includes(category)) {
                        group.forEach(filterInGroup => {
                            if (filterInGroup !== category && activeFilters.has(filterInGroup)) {
                                activeFilters.delete(filterInGroup);
                                document.getElementById('filter-' + filterInGroup).classList.remove('active');
                            }
                        });
                    }
                });

                activeFilters.add(category);
                btn.classList.add('active');
            }
            
            renderActivity();
        }

        function clearFilters() {
            activeFilters.clear();
            document.querySelectorAll('.btn-filter').forEach(btn => btn.classList.remove('active'));
            renderActivity();
        }

        window.onload = renderActivity;
