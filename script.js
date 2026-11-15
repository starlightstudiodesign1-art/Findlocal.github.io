 // FindLocal Zamboanga del Sur
// WEEKLY PRICE MONITORING - Pagadian City
// As of November 11, 2026
// Source: City Agriculture Office – Pagadian City
// Email: pagadiancityagri@gmail.com

const prices = [
  // 1. COMMERCIAL RICE
  { name: "Imported Rice - Premium Rice", price: "57.00", unit: "kg", category: "Rice" },
  { name: "Imported Rice - Well Milled Rice", price: "48.00–50.00", unit: "kg", category: "Rice" },
  { name: "Local Rice - Premium Rice", price: "58.00–60.00", unit: "kg", category: "Rice" },
  { name: "Local Rice - Well Milled Rice", price: "52.00–55.00", unit: "kg", category: "Rice" },
  { name: "Local Rice - Regular Milled Rice", price: "48.00–50.00", unit: "kg", category: "Rice" },
  // 2. SPECIAL RICE
  { name: "Black Rice", price: "85.00–110.00", unit: "kg", category: "Rice" },
  { name: "Brown Rice", price: "62.00", unit: "kg", category: "Rice" },
  { name: "Red Rice", price: "60.00–62.00", unit: "kg", category: "Rice" },
  { name: "Glutinous Rice", price: "50.00–52.00", unit: "kg", category: "Rice" },
  // 3. CORN
  { name: "Corn Grits - White, Food Grade", price: "38.00–48.00", unit: "kg", category: "Corn" },
  { name: "Corn Grits - Yellow, Food Grade", price: "32.00–35.00", unit: "kg", category: "Corn" },
  { name: "Corn Cracked", price: "32.00–35.00", unit: "kg", category: "Corn" },
  // 4. SPICES
  { name: "Red Onion", price: "140.00–150.00", unit: "kg", category: "Spices" },
  { name: "White Onion", price: "230.00–280.00", unit: "kg", category: "Spices" },
  { name: "Garlic", price: "130.00–150.00", unit: "kg", category: "Spices" },
  { name: "Ginger", price: "100.00–120.00", unit: "kg", category: "Spices" },
  { name: "Chilli", price: "250.00", unit: "kg", category: "Spices" },
  // 5. BASIC
  { name: "Sugar - Refined Sugar", price: "70.00–75.00", unit: "kg", category: "Basic" },
  { name: "Sugar - Brown Sugar", price: "58.00–60.00", unit: "kg", category: "Basic" },
  { name: "Cooking Oil – Palm Oil (330 ml)", price: "35.00", unit: "pc", category: "Basic" },
  { name: "Cooking Oil – Palm Oil (1 Liter)", price: "110.00–115.00", unit: "pc", category: "Basic" },
  { name: "Coconut Oil (330 ml)", price: "60.00", unit: "pc", category: "Basic" },
  { name: "Coconut Oil (1 Liter)", price: "180.00–190.00", unit: "pc", category: "Basic" },
  // 6. LIVESTOCK & POULTRY
  { name: "Beef Rump", price: "450.00", unit: "kg", category: "Livestock" },
  { name: "Beef Brisket", price: "320.00", unit: "kg", category: "Livestock" },
  { name: "Pork Ham (Kasim)", price: "280.00–290.00", unit: "kg", category: "Livestock" },
  { name: "Pork Belly (Liempo)", price: "330.00–340.00", unit: "kg", category: "Livestock" },
  { name: "Whole Chicken (Fully Dressed)", price: "190.00–195.00", unit: "kg", category: "Poultry" },
  { name: "Chicken Egg - White, Peewee", price: "6.00", unit: "pc", category: "Poultry" },
  { name: "Chicken Egg - White, Extra Small", price: "6.00–6.50", unit: "pc", category: "Poultry" },
  { name: "Chicken Egg - White, Small", price: "6.50–7.00", unit: "pc", category: "Poultry" },
  { name: "Chicken Egg - White, Medium", price: "7.00–8.00", unit: "pc", category: "Poultry" },
  { name: "Chicken Egg - White, Large", price: "7.50–9.00", unit: "pc", category: "Poultry" },
  { name: "Chicken Egg - White, Extra Large", price: "8.00–10.00", unit: "pc", category: "Poultry" },
  { name: "Chicken Egg - White, Jumbo", price: "8.50–11.00", unit: "pc", category: "Poultry" },
  // 7. LIVE PIG
  { name: "Live Pig (Under 30 kg)", price: "190.00–200.00", unit: "kg", category: "Livestock" },
  { name: "Live Pig (Over 50 kg)", price: "120.00–150.00", unit: "kg", category: "Livestock" },
  // 8. SWEET POTATO
  { name: "Sweet Potato / Kamote - 1st Class (Primera)", price: "45.00–50.00", unit: "kg", category: "Vegetables" },
  { name: "Sweet Potato / Kamote - 2nd Class (Segunda)", price: "40.00–45.00", unit: "kg", category: "Vegetables" },
  { name: "Sweet Potato / Kamote - 3rd Class (Tercera)", price: "25.00–35.00", unit: "kg", category: "Vegetables" },
];

const businesses = [
  { name: "Dumingag Organics", priceNote: "₱2,200", rating: 4.7, reviews: 34, category: "Tourist Attraction", location: "Magsaysay Street, Dumingag", hours: "Open Daily", description: "Organic farming, local products, community livelihoods.", products: "Organic wines, herbal teas, native chicken siomai, guyabano shakes, abaca bags & mats.", area: "Dumingag" },
  { name: "Paglinawan Organic Eco Farm", priceNote: "₱2,200", rating: 4.7, reviews: 34, category: "Tourist Attraction", location: "Dumingag", hours: "Open Daily", description: "10-hectare agri-farm tourism destination.", products: "Farm-to-table dining, Asian-fusion & Vietnamese-inspired cuisine.", area: "Dumingag" },
  { name: "Dumingag Public Market", priceNote: "Free Entry", rating: 3.9, reviews: 67, category: "Grocery Store", location: "Dumingag", hours: "Open Daily", description: "Main public market of Dumingag.", products: "Fresh produce, rice, corn, meat, fish, local goods.", area: "Dumingag" },
  { name: "RJ Treehouse Outdoor Cafe", priceNote: "Cafe Price", rating: 0, reviews: 0, category: "Cafe", location: "Bobongan-Sominot-Midsalip-Dumingag Rd", hours: "Daily 9AM - 7PM", description: "Outdoor cafe setting.", products: "Coffee, desserts, lunch, dinner.", area: "Dumingag" },
  { name: "Meraki Cafe", priceNote: "Cafe Price", rating: 0, reviews: 0, category: "Cafe", location: "Magsaysay Avenue, Dumingag", hours: "Daily 10AM - 9PM", description: "Quiet, laptop-friendly space.", products: "Coffee, pastries, snacks, full meals.", area: "Dumingag" },
  { name: "Es'Cafe Dumingag", priceNote: "Cafe Price", rating: 0, reviews: 0, category: "Cafe", location: "Dumingag", hours: "Daily 9AM - 9PM", description: "Cozy spot for coffee & frappes.", products: "Coffee, frappes, desserts.", area: "Dumingag" },
  { name: "Rudhil's Place Resort", priceNote: "Around ₱3,028 / night", rating: 4.6, reviews: 0, category: "Resort", location: "Purok 4, Brgy. Mahayag", hours: "Open Daily", description: "Inland resort with day-use.", products: "Pool, hot tub, Filipino & Chinese restaurant, sports facilities.", area: "Zamboanga del Sur" },
  { name: "Vine Molave", priceNote: "Hotel / Resort Price", rating: 4.2, reviews: 0, category: "Resort", location: "Rizal Ave, Molave", hours: "Daily 7AM - 10PM", description: "Hotel and resort.", products: "Hotel rooms, pool, hot tub, on-site dining.", area: "Molave" },
];

let currentCat = 'All';

function renderPrices(){
  const q = document.getElementById('searchInput').value.toLowerCase();
  const filtered = prices.filter(p => (currentCat==='All' || p.category===currentCat) && p.name.toLowerCase().includes(q));
  document.getElementById('count').innerText = filtered.length + ' items • As of Nov 10, 2026 • Pagadian City';
  document.getElementById('priceGrid').innerHTML = filtered.map(p => `
    <div class="card">
      <div class="cat">${p.category}</div>
      <h3>${p.name}</h3>
      <div class="price">₱${p.price} <span class="unit">/ ${p.unit}</span></div>
      <div class="area">📍 Pagadian City Public Market</div>
    </div>
  `).join('') || '<p style="padding:20px">No result. Try: bugas, pork, kamote</p>';
}
function renderBusinesses(){
  document.getElementById('bizGrid').innerHTML = businesses.map(b => `
    <div class="biz-card">
      <div class="biz-top">
        <div class="cat">${b.category} • ${b.area}</div>
        <h3>${b.name}</h3>
        <p>${b.description}</p>
        <p><b>Products:</b> ${b.products}</p>
        <div class="meta">⭐ ${b.rating ? b.rating + ' (' + b.reviews + ' reviews)' : 'No rating yet'}<br>📍 ${b.location}<br>🕒 ${b.hours}</div>
      </div>
      <div class="biz-bottom"><b>${b.priceNote}</b><span>View</span></div>
    </div>
  `).join('');
}
function setCat(cat, btn){
  currentCat = cat;
  document.querySelectorAll('.tabs button').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('bizSection').classList.add('hidden');
  document.getElementById('priceSection').classList.remove('hidden');
  renderPrices();
}
function showBusinesses(btn){
  document.querySelectorAll('.tabs button').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('priceSection').classList.add('hidden');
  document.getElementById('bizSection').classList.remove('hidden');
  renderBusinesses();
}
function filterAll(){
  document.getElementById('bizSection').classList.add('hidden');
  document.getElementById('priceSection').classList.remove('hidden');
  renderPrices();
}
renderPrices();