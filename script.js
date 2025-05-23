  // Navigation and Mobile Menu
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        const navLinks = document.querySelectorAll('.nav-link');
        const sections = document.querySelectorAll('main section');

        function updateActiveLink() {
            let currentSectionId = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (pageYOffset >= sectionTop - 80) { // 80px offset for sticky header
                    currentSectionId = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSectionId}`) {
                    link.classList.add('active');
                }
            });
        }
        window.addEventListener('scroll', updateActiveLink);
        updateActiveLink(); // Initial call

        // Close mobile menu on link click
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });


        // API Pricing Data (Post-March 2025)
        const apiPricingDataStore = [
            { id: 'dynamic_maps', name: 'Dynamic Maps', skuName: 'Dynamic Maps', category: 'Essentials', freeUsageCap: 10000, unit: 'Map Loads', price0_100k: 7.00, price100k_500k: 5.60, tiers: [{ limit: 100000, price: 7.00 }, { limit: 500000, price: 5.60 }, { limit: 1000000, price: 4.20 }, { limit: 5000000, price: 2.10 }, { limit: Infinity, price: 0.53 }] },
            { id: 'static_maps', name: 'Static Maps', skuName: 'Static Maps', category: 'Essentials', freeUsageCap: 10000, unit: 'Requests', price0_100k: 2.00, price100k_500k: 1.60, tiers: [{ limit: 100000, price: 2.00 }, { limit: 500000, price: 1.60 }, { limit: 1000000, price: 1.20 }, { limit: 5000000, price: 0.60 }, { limit: Infinity, price: 0.15 }] },
            { id: 'embed_api', name: 'Embed API', skuName: 'Embed', category: 'Essentials', freeUsageCap: Infinity, unit: 'Loads', price0_100k: 0, price100k_500k: 0, tiers: [{ limit: Infinity, price: 0 }] },
            { id: 'maps_sdk', name: 'Maps SDK (Android/iOS)', skuName: 'Maps SDK', category: 'Essentials', freeUsageCap: Infinity, unit: 'Loads', price0_100k: 0, price100k_500k: 0, tiers: [{ limit: Infinity, price: 0 }] },
            { id: 'static_street_view', name: 'Static Street View', skuName: 'Static Street View', category: 'Essentials', freeUsageCap: 10000, unit: 'Panoramas', price0_100k: 7.00, price100k_500k: 5.60, tiers: [{ limit: 100000, price: 7.00 }, { limit: 500000, price: 5.60 }, { limit: 1000000, price: 4.20 }, { limit: 5000000, price: 2.10 }, { limit: Infinity, price: 0.53 }] },
            { id: 'dynamic_street_view', name: 'Dynamic Street View', skuName: 'Dynamic Street View', category: 'Pro', freeUsageCap: 5000, unit: 'Panoramas', price0_100k: 14.00, price100k_500k: 11.20, tiers: [{ limit: 100000, price: 14.00 }, { limit: 500000, price: 11.20 }, { limit: 1000000, price: 8.40 }, { limit: 5000000, price: 4.20 }, { limit: Infinity, price: 1.05 }] },
            { id: 'routes_compute_essential', name: 'Routes: Compute Routes Essentials', skuName: 'Routes: Compute Routes Essentials', category: 'Essentials', freeUsageCap: 10000, unit: 'Requests', price0_100k: 5.00, price100k_500k: 4.00, tiers: [{ limit: 100000, price: 5.00 }, { limit: 500000, price: 4.00 }, { limit: 1000000, price: 3.00 }, { limit: 5000000, price: 1.50 }, { limit: Infinity, price: 0.38 }] },
            { id: 'routes_matrix_essential', name: 'Routes: Compute Route Matrix Essentials', skuName: 'Routes: Compute Route Matrix Essentials', category: 'Essentials', freeUsageCap: 10000, unit: 'Elements', price0_100k: 5.00, price100k_500k: 4.00, tiers: [{ limit: 100000, price: 5.00 }, { limit: 500000, price: 4.00 }, { limit: 1000000, price: 3.00 }, { limit: 5000000, price: 1.50 }, { limit: Infinity, price: 0.38 }] },
            { id: 'geocoding', name: 'Geocoding API', skuName: 'Geocoding', category: 'Essentials', freeUsageCap: 10000, unit: 'Requests', price0_100k: 5.00, price100k_500k: 4.00, tiers: [{ limit: 100000, price: 5.00 }, { limit: 500000, price: 4.00 }, { limit: 1000000, price: 3.00 }, { limit: 5000000, price: 1.50 }, { limit: Infinity, price: 0.38 }] },
            { id: 'autocomplete_requests', name: 'Autocomplete Requests', skuName: 'Autocomplete Requests', category: 'Essentials', freeUsageCap: 10000, unit: 'Requests', price0_100k: 2.83, price100k_500k: 2.27, tiers: [{ limit: 100000, price: 2.83 }, { limit: 500000, price: 2.27 }, { limit: 1000000, price: 1.70 }, { limit: 5000000, price: 0.85 }, { limit: Infinity, price: 0.21 }] },
            { id: 'places_details_essentials', name: 'Places API Place Details Essentials', skuName: 'Places API Place Details Essentials', category: 'Essentials', freeUsageCap: 10000, unit: 'Requests', price0_100k: 5.00, price100k_500k: 4.00, tiers: [{ limit: 100000, price: 5.00 }, { limit: 500000, price: 4.00 }, { limit: 1000000, price: 3.00 }, { limit: 5000000, price: 1.50 }, { limit: Infinity, price: 0.38 }] },
            { id: 'places_details_pro', name: 'Places API Place Details Pro', skuName: 'Places API Place Details Pro', category: 'Pro', freeUsageCap: 5000, unit: 'Requests', price0_100k: 17.00, price100k_500k: 13.60, tiers: [{ limit: 100000, price: 17.00 }, { limit: 500000, price: 13.60 }, { limit: 1000000, price: 10.20 }, { limit: 5000000, price: 5.10 }, { limit: Infinity, price: 1.28 }] },
            { id: 'find_place_id_only', name: 'Find Place - ID only', skuName: 'Find Place - ID only', category: 'Essentials', freeUsageCap: Infinity, unit: 'Requests', price0_100k: 0, price100k_500k: 0, tiers: [{ limit: Infinity, price: 0 }] },
            { id: 'geolocation', name: 'Geolocation API', skuName: 'Geolocation', category: 'Essentials', freeUsageCap: 10000, unit: 'Requests', price0_100k: 5.00, price100k_500k: 4.00, tiers: [{ limit: 100000, price: 5.00 }, { limit: 500000, price: 4.00 }, { limit: 1000000, price: 3.00 }, { limit: 5000000, price: 1.50 }, { limit: Infinity, price: 0.38 }] },
            // Added for Python script calculation, assuming Nearby Search is priced like Essentials if not specified otherwise.
            { id: 'places_nearby_search', name: 'Places API Nearby Search (Estimated as Essentials)', skuName: 'Places API Nearby Search', category: 'Essentials', freeUsageCap: 10000, unit: 'Requests', price0_100k: 5.00, price100k_500k: 4.00, tiers: [{ limit: 100000, price: 5.00 }, { limit: 500000, price: 4.00 }, { limit: 1000000, price: 3.00 }, { limit: 5000000, price: 1.50 }, { limit: Infinity, price: 0.38 }] },
        ];

        // Populate API Pricing Table
        const pricingTableBody = document.getElementById('apiPricingTable').getElementsByTagName('tbody')[0];
        let currentPricingData = [...apiPricingDataStore]; // For sorting

        function renderPricingTable() {
            pricingTableBody.innerHTML = ''; // Clear existing rows
            currentPricingData.forEach(api => {
                if (api.id === 'places_nearby_search') return; // Don't show the estimated one in main table
                const row = pricingTableBody.insertRow();
                row.innerHTML = `
                    <td class="px-3 sm:px-6 py-4 whitespace-nowrap">${api.skuName}</td>
                    <td class="px-3 sm:px-6 py-4 whitespace-nowrap">${api.category}</td>
                    <td class="px-3 sm:px-6 py-4 whitespace-nowrap">${api.freeUsageCap === Infinity ? 'Unlimited' : api.freeUsageCap.toLocaleString()} ${api.unit}</td>
                    <td class="px-3 sm:px-6 py-4 whitespace-nowrap">$${api.price0_100k.toFixed(2)}</td>
                    <td class="px-3 sm:px-6 py-4 whitespace-nowrap">$${api.price100k_500k.toFixed(2)}</td>
                `;
            });
        }
        
        // Sorting logic for the table
        document.querySelectorAll('#apiPricingTable th').forEach(headerCell => {
            headerCell.addEventListener('click', () => {
                const column = headerCell.dataset.sort;
                const sortArrow = headerCell.querySelector('.sort-arrow');
                let currentSortOrder = 'none';
                if (sortArrow.classList.contains('asc')) currentSortOrder = 'asc';
                if (sortArrow.classList.contains('desc')) currentSortOrder = 'desc';

                // Reset other arrows
                document.querySelectorAll('#apiPricingTable th .sort-arrow').forEach(arrow => {
                    arrow.classList.remove('asc', 'desc');
                    arrow.innerHTML = '↕';
                });
                
                let newSortOrder;
                if (currentSortOrder === 'asc') newSortOrder = 'desc';
                else newSortOrder = 'asc';

                sortArrow.classList.add(newSortOrder);
                sortArrow.innerHTML = newSortOrder === 'asc' ? '↑' : '↓';

                currentPricingData.sort((a, b) => {
                    let valA = a[column];
                    let valB = b[column];

                    if (typeof valA === 'string') valA = valA.toLowerCase();
                    if (typeof valB === 'string') valB = valB.toLowerCase();
                    
                    if (column === 'freeUsageCap' && valA === Infinity) valA = Number.MAX_SAFE_INTEGER;
                    if (column === 'freeUsageCap' && valB === Infinity) valB = Number.MAX_SAFE_INTEGER;


                    if (valA < valB) return newSortOrder === 'asc' ? -1 : 1;
                    if (valA > valB) return newSortOrder === 'asc' ? 1 : -1;
                    return 0;
                });
                renderPricingTable();
            });
        });
        renderPricingTable(); // Initial render

        // Price Calculator Logic
        const apiSelectionContainer = document.getElementById('apiSelectionContainer');
        const usageInputContainer = document.getElementById('usageInputContainer');
        const calculateTotalCostButton = document.getElementById('calculateTotalCostButton');
        const costResultsContainer = document.getElementById('costResultsContainer');
        const totalEstimatedCostEl = document.getElementById('totalEstimatedCost');
        const individualApiCostsEl = document.getElementById('individualApiCosts');
        let costBreakdownChart = null;

        apiPricingDataStore.forEach(api => {
            if (api.id === 'places_nearby_search') return; // Not for general selection
            if (api.freeUsageCap === Infinity && api.price0_100k === 0) return; // Skip always-free APIs

            const div = document.createElement('div');
            div.classList.add('flex', 'items-center');
            div.innerHTML = `
                <input id="api-${api.id}" data-api-id="${api.id}" type="checkbox" class="h-4 w-4 text-amber-600 border-stone-300 rounded focus:ring-amber-500">
                <label for="api-${api.id}" class="ml-2 block text-sm text-neutral-700">${api.name}</label>
            `;
            apiSelectionContainer.appendChild(div);

            div.querySelector('input[type="checkbox"]').addEventListener('change', (event) => {
                const apiId = event.target.dataset.apiId;
                const apiData = apiPricingDataStore.find(a => a.id === apiId);
                const existingInput = document.getElementById(`usage-${apiId}`);
                if (event.target.checked) {
                    if (!existingInput) {
                        const inputDiv = document.createElement('div');
                        inputDiv.innerHTML = `
                            <label for="usage-${apiId}" class="block text-sm font-medium text-neutral-700">${apiData.name} (Monthly ${apiData.unit}):</label>
                            <input type="number" id="usage-${apiId}" data-api-id="${apiId}" min="0" value="0" class="mt-1 block w-full rounded-md border-stone-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm p-2">
                        `;
                        usageInputContainer.appendChild(inputDiv);
                    }
                } else {
                    if (existingInput) {
                        existingInput.parentElement.remove();
                    }
                }
            });
        });
        
        function calculateApiCost(apiId, totalUsage) {
            const api = apiPricingDataStore.find(a => a.id === apiId);
            if (!api || (api.freeUsageCap === Infinity && api.tiers[0].price === 0)) return 0;

            let billableUsage = Math.max(0, totalUsage - api.freeUsageCap);
            if (billableUsage <= 0) return 0;

            let cost = 0;
            let usageProcessedInTiers = 0; // Tracks usage accounted for in tiers

            for (const tier of api.tiers) {
                // Determine how much of the current billableUsage falls into this tier
                const tierLimitAbsolute = tier.limit; // e.g. 100000, 500000
                const previousTierLimitAbsolute = api.tiers.indexOf(tier) > 0 ? api.tiers[api.tiers.indexOf(tier)-1].limit : 0;
                
                const usageInThisTierMax = tierLimitAbsolute - previousTierLimitAbsolute;
                const remainingBillableUsage = billableUsage - usageProcessedInTiers;
                
                if (remainingBillableUsage <= 0) break;

                const usageToPriceInThisTier = Math.min(remainingBillableUsage, usageInThisTierMax);
                
                cost += (usageToPriceInThisTier / 1000) * tier.price;
                usageProcessedInTiers += usageToPriceInThisTier;

                if (usageProcessedInTiers >= billableUsage) break;
            }
            return cost;
        }

        calculateTotalCostButton.addEventListener('click', () => {
            let totalCost = 0;
            const individualCosts = [];
            const chartLabels = [];
            const chartData = [];

            usageInputContainer.querySelectorAll('input[type="number"]').forEach(input => {
                const apiId = input.dataset.apiId;
                const usage = parseInt(input.value) || 0;
                if (usage > 0) {
                    const apiData = apiPricingDataStore.find(a => a.id === apiId);
                    const cost = calculateApiCost(apiId, usage);
                    totalCost += cost;
                    individualCosts.push({ name: apiData.name, cost: cost.toFixed(2) });
                    if (cost > 0) {
                       chartLabels.push(apiData.name.length > 25 ? apiData.name.substring(0,22)+'...' : apiData.name); // Truncate long names for chart
                       chartData.push(cost.toFixed(2));
                    }
                }
            });

            totalEstimatedCostEl.textContent = `$${totalCost.toFixed(2)}`;
            individualApiCostsEl.innerHTML = individualCosts.map(item => `<div>${item.name}: $${item.cost}</div>`).join('');
            costResultsContainer.classList.remove('hidden');

            // Update chart
            const ctx = document.getElementById('costBreakdownChart').getContext('2d');
            if (costBreakdownChart) {
                costBreakdownChart.destroy();
            }
            if (chartData.length > 0) {
                 costBreakdownChart = new Chart(ctx, {
                    type: 'pie', // or 'bar'
                    data: {
                        labels: chartLabels,
                        datasets: [{
                            label: 'Cost Breakdown',
                            data: chartData,
                            backgroundColor: [
                                '#fbbf24', '#f59e0b', '#d97706', '#b45309', '#92400e', 
                                '#fcd34d', '#fb923c', '#f97316', '#ea580c', '#c2410c' 
                            ], // Amber/Orange shades
                            borderColor: '#fff',
                            borderWidth: 1
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                position: 'top',
                                labels: {
                                    font: { size: 10 }
                                }
                            },
                            tooltip: {
                                callbacks: {
                                    label: function(context) {
                                        let label = context.label || '';
                                        if (label) {
                                            label += ': ';
                                        }
                                        if (context.parsed !== null) {
                                            label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed);
                                        }
                                        return label;
                                    }
                                }
                            }
                        }
                    }
                });
            } else {
                 document.getElementById('costBreakdownChart').parentElement.classList.add('hidden'); // Hide chart container if no data
            }
        });

        // Python Script Cost Calculator
        const scriptNumRunsEl = document.getElementById('scriptNumRuns');
        const scriptAvgResultsEl = document.getElementById('scriptAvgResults');
        const scriptMaxResultsEl = document.getElementById('scriptMaxResults');
        const scriptDetailsSkuEl = document.getElementById('scriptDetailsSku');
        const calculateScriptCostButton = document.getElementById('calculateScriptCostButton');
        const scriptCostResultEl = document.getElementById('scriptCostResult');

        calculateScriptCostButton.addEventListener('click', () => {
            const numRuns = parseInt(scriptNumRunsEl.value) || 0;
            const avgResults = parseInt(scriptAvgResultsEl.value) || 0;
            const maxResultsScript = parseInt(scriptMaxResultsEl.value) || 0;
            const detailsSkuId = scriptDetailsSkuEl.value;

            if (numRuns === 0) {
                scriptCostResultEl.textContent = 'Please enter a valid number of script runs.';
                return;
            }

            const itemsToProcessPerRun = Math.min(avgResults, maxResultsScript);
            const nearbyPagesPerRun = Math.ceil(itemsToProcessPerRun / 20); // Assuming Nearby Search returns up to 20 results per page

            const totalNearbySearches = numRuns * nearbyPagesPerRun;
            const totalDetailCalls = numRuns * itemsToProcessPerRun;
            
            const nearbySearchCost = calculateApiCost('places_nearby_search', totalNearbySearches);
            const detailsCost = calculateApiCost(detailsSkuId, totalDetailCalls);
            const totalScriptCost = nearbySearchCost + detailsCost;

            scriptCostResultEl.innerHTML = `
                Estimated Monthly Script Cost: <strong class="text-amber-600">$${totalScriptCost.toFixed(2)}</strong><br>
                <span class="text-xs text-neutral-500">
                    (Based on ${totalNearbySearches.toLocaleString()} Nearby Searches and ${totalDetailCalls.toLocaleString()} Place Details calls)
                </span>
            `;
        });


        // Optimization Strategies
        const optimizationStrategies = [
            { title: "Choose the Right API (Static vs. Dynamic)", content: "Use Static Maps ($2/1k requests) for fixed, non-interactive map images (previews, thumbnails). Use Dynamic Maps ($7/1k loads) only when user interaction (panning, zooming) or real-time data is essential. Overusing Dynamic Maps is a common source of unnecessary costs." },
            { title: "Implement Smart Caching (ToS Compliant)", content: "Cache Place IDs indefinitely (they are exempt from restrictions). Cache lat/lng values from Directions, Geocoding, etc., for up to 30 days. Most other content cannot be cached. Always adhere strictly to Google Maps Platform Terms of Service. Compliant caching reduces latency and API calls." },
            { title: "Optimize Places API Calls (Field Masks)", content: "For new Places API methods (Place Details, Nearby Search, Text Search), use the `FieldMask` header to request ONLY the data fields you need. Billing is based on the highest SKU applicable to requested fields. This prevents accidental billing for more expensive data you didn't intend to use." },
            { title: "Efficient Routes API Usage (Waypoint Limits)", content: "Directions API requests with 1-10 waypoints use the 'Essentials' SKU ($5/1k). Requests with 11-25 waypoints use the more expensive 'Directions Advanced' SKU ($10/1k). Minimize waypoints per request or break complex routes into segments to save costs." },
            { title: "Secure Your API Keys", content: "Compromised API keys can lead to unauthorized usage and unexpected charges. Restrict keys by IP address, HTTP referrer, or app package name. Use server-side proxies for web service calls to protect keys." },
            { title: "Implement Exponential Backoff", content: "For API errors (5xx, quota errors), retry requests with an increasing delay (exponential backoff). This prevents excessive, billable retries during transient issues and improves application resilience." },
            { title: "Use On-Demand Requests", content: "For user-interactive APIs, trigger API calls only when the user explicitly performs an action (e.g., on-click), not preemptively. This avoids unnecessary API consumption." },
            { title: "Optimize Map Rendering", content: "Avoid displaying overlay content while a map is actively moving. Refrain from intensive operations in `Draw()` methods. Use raster images (PNG, JPG) for markers instead of SVGs for potentially better rendering performance on some platforms." }
        ];

        const optimizationContainer = document.getElementById('optimizationStrategiesContainer');
        optimizationStrategies.forEach((strategy, index) => {
            const div = document.createElement('div');
            div.classList.add('bg-white', 'p-0', 'rounded-lg', 'shadow', 'overflow-hidden');
            div.innerHTML = `
                <button class="w-full text-left p-4 focus:outline-none" data-index="${index}">
                    <div class="flex justify-between items-center">
                        <h4 class="text-md font-semibold text-amber-600">${strategy.title}</h4>
                        <span class="transform transition-transform duration-200 text-amber-600 text-xl shrink-0 ml-2">&#x25BC;</span>
                    </div>
                </button>
                <div class="px-4 pb-4 text-neutral-600 text-sm hidden">
                    ${strategy.content}
                </div>
            `;
            optimizationContainer.appendChild(div);

            const button = div.querySelector('button');
            const content = div.querySelector('.hidden');
            const arrow = button.querySelector('span');

            button.addEventListener('click', () => {
                const isHidden = content.classList.contains('hidden');
                // Close all others
                optimizationContainer.querySelectorAll('button + div').forEach(el => el.classList.add('hidden'));
                optimizationContainer.querySelectorAll('button span').forEach(el => {
                    el.innerHTML = '&#x25BC;'; // Down arrow
                    el.classList.remove('rotate-180');
                });
                
                if (isHidden) {
                    content.classList.remove('hidden');
                    arrow.innerHTML = '&#x25B2;'; // Up arrow
                    arrow.classList.add('rotate-180');
                } else {
                    // Already handled by closing all others
                }
            });
        });

        // LLM Integration for Optimization Advisor
        const geminiApiKeyInput = document.getElementById('geminiApiKeyInput');
        const useCaseInput = document.getElementById('useCaseInput');
        const getOptimizationIdeasButton = document.getElementById('getOptimizationIdeasButton');
        const optimizationIdeasResult = document.getElementById('optimizationIdeasResult');
        const loadingIndicator = document.getElementById('loadingIndicator');
        const ideasContent = document.getElementById('ideasContent');

        getOptimizationIdeasButton.addEventListener('click', async () => {
            const userUseCase = useCaseInput.value.trim();
            const geminiApiKey = geminiApiKeyInput.value.trim();

            if (!geminiApiKey) {
                ideasContent.innerHTML = '<p class="text-red-500">Please enter your Gemini API Key.</p>';
                optimizationIdeasResult.classList.remove('hidden');
                return;
            }

            if (!userUseCase) {
                ideasContent.innerHTML = '<p class="text-red-500">Please describe your use case to get suggestions.</p>';
                optimizationIdeasResult.classList.remove('hidden');
                return;
            }

            optimizationIdeasResult.classList.remove('hidden');
            loadingIndicator.classList.remove('hidden');
            ideasContent.innerHTML = ''; // Clear previous results

            const availableApis = apiPricingDataStore.filter(api => api.freeUsageCap !== Infinity || api.price0_100k !== 0)
                                                .map(api => ({ name: api.name, category: api.category, unit: api.unit, price: api.price0_100k }));
            const availableStrategies = optimizationStrategies.map(s => s.title + ': ' + s.content);

            const prompt = `Based on the following Google Maps Platform API pricing and optimization strategies, and the user's described use case, suggest relevant Google Maps APIs and specific cost optimization strategies. Focus on practical advice and be concise.
            ---
            **Available Google Maps APIs (Name, Category, Unit, Price per 1k):**
            ${JSON.stringify(availableApis, null, 2)}
            ---
            **Available Optimization Strategies (Title: Content):**
            ${availableStrategies.join('\n')}
            ---
            **User's Use Case:**
            ${userUseCase}
            ---
            Please provide your suggestions in a clear, concise, and actionable format. Start with 'Suggested APIs:' then 'Suggested Optimization Strategies:'. Use bullet points for lists.`;

            try {
                let chatHistory = [];
                chatHistory.push({ role: "user", parts: [{ text: prompt }] });
                const payload = { contents: chatHistory };
                const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${geminiApiKey}`;

                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });

                const result = await response.json();
                loadingIndicator.classList.add('hidden');

                if (result.candidates && result.candidates.length > 0 &&
                    result.candidates[0].content && result.candidates[0].content.parts &&
                    result.candidates[0].content.parts.length > 0) {
                    const text = result.candidates[0].content.parts[0].text;
                    ideasContent.innerHTML = text.replace(/\n/g, '<br>'); // Display newlines as breaks
                } else {
                    ideasContent.innerHTML = '<p class="text-red-500">Could not generate ideas. Please try again or refine your query.</p>';
                    console.error('Gemini API response structure unexpected:', result);
                }
            } catch (error) {
                loadingIndicator.classList.add('hidden');
                ideasContent.innerHTML = `<p class="text-red-500">Error generating ideas: ${error.message}. Please check your network connection or try again later.</p>`;
                console.error('Error calling Gemini API:', error);
            }
        });
