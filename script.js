
        const eggsData = [
            { id: 1, name: "Trichostrongylidae (excepto Nematodirus spp. y Marshallagia spp.)", tags: ["segmentado", "con-camara"], desc: "Segmentados. 80x40 µm. Cámara de aire. Membrana fina.", img: "URL_AQUÍ_1" },
            { id: 2, name: "Marshallagia spp.", tags: ["segmentado", "con-camara"], desc: "Segmentado. 160x80 µm. Cámara de aire. Bordes paralelos.", img: "URL_AQUÍ_2" },
            { id: 3, name: "Nematodirus spp.", tags: ["segmentado", "con-camara"], desc: "Segmentado. 160x80 µm. Cámara de aire. Puntas acuminadas.", img: "URL_AQUÍ_3" },
            { id: 4, name: "Trichonema spp.", tags: ["segmentado", "con-camara"], desc: "Segmentado. 90 µm. Cámara de aire.", img: "URL_AQUÍ_4" },
            { id: 5, name: "Oesophagostomum spp.", tags: ["segmentado", "con-camara"], desc: "Segmentado. 65x80 µm. Cámara de aire.", img: "URL_AQUÍ_5" },
            { id: 6, name: "Ancylostomatidae", tags: ["segmentado", "con-camara"], desc: "Segmentado. 65x40 µm. Varias blastómeras.", img: "URL_AQUÍ_6" },
            { id: 7, name: "Stephanurus dentatus", tags: ["segmentado", "con-camara"], desc: "Segmentado. 120x60 µm. Muchos blastómeros.", img: "URL_AQUÍ_7" },
            { id: 8, name: "Dioctophyma renale", tags: ["no-segmentado"], desc: "No Segmentado. 60-80 µm. Depresiones en superficie y polos lisos.", img: "URL_AQUÍ_8" },
            { id: 9, name: "Ascaris spp.", tags: ["no-segmentado", "con-camara"], desc: "No Segmentado. 70 µm. Cámara de aire. Cáscara gruesa. Superficie abollonada.", img: "URL_AQUÍ_9" },
            { id: 10, name: "Toxocara spp.", tags: ["no-segmentado", "con-camara"], desc: "No Segmentado. 80 µm. Cámara de aire. Cáscara gruesa con finas fosetas.", img: "URL_AQUÍ_10" },
            { id: 11, name: "Toxascaris leonina", tags: ["no-segmentado", "con-camara"], desc: "No Segmentado. 80 µm. Cámara de aire. Cáscara gruesa y lisa.", img: "URL_AQUÍ_11" },
            { id: 12, name: "Parascaris equorum", tags: ["no-segmentado", "con-camara"], desc: "No Segmentado. 90 µm. Cámara de aire. Cáscara gruesa.", img: "URL_AQUÍ_12" },
            { id: 13, name: "Trichuris spp.", tags: ["tapones", "con-camara", "no-segmentado"], desc: "No Segmentado. 70 µm. Cámara de aire. 2 tapones polares.", img: "URL_AQUÍ_13" },
            { id: 14, name: "Dictyocaulus spp.", tags: ["larvado"], desc: "Larvado. 90-100 µm.", img: "URL_AQUÍ_14" },
            { id: 15, name: "Metastrongylus spp.", tags: ["larvado"], desc: "Larvado. 50 µm. Cáscara gruesa mamelonada.", img: "URL_AQUÍ_15" },
            { id: 16, name: "Strongyloides spp.", tags: ["larvado"], desc: "Larvado. 50 µm.", img:"URL_AQUÍ_16" },
            { id: 17, name: "Oxyuris equi", tags: ["larvado", "operculo", "con-camara"], desc: "Larvado. 90 µm. Cámara de aire. Operculado. Asimétrico.", img: "URL_AQUÍ_17" },
            { id: 18, name: "Habronema spp.", tags: ["larvado"], desc: "Larvado. 50 µm. Cáscara fina.", img: "URL_AQUÍ_18" },
            { id: 19, name: "Ascarops spp.", tags: ["larvado"], desc: "Larvado. 40 µm. Cáscara gruesa rodeada por lisa.", img: "URL_AQUÍ_19" }
        ];

        let activeFilters = new Set();
        let solvedIds = new Set();

        const exclusionGroups = [
            ['con-camara', 'sin-camara'],
            ['segmentado', 'no-segmentado', 'larvado'],
            ['tapones', 'operculo']
        ];

        const filterTitles = {
            'segmentado': 'Segmentados',
            'no-segmentado': 'No segmentados',
            'larvado': 'Larvados',
            'tapones': 'Con tapones polares',
            'operculo': 'Con opérculo',
            'con-camara': 'Con cámara de aire',
            'sin-camara': 'Sin cámara de aire'
        };

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
                        <span class="text-[10px] text-slate-800 absolute center">HUEVO #${egg.id}</span>
                    </div>
                    <h3 class="text-sm font-bold text-blue-300 uppercase">${egg.name}</h3>
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
