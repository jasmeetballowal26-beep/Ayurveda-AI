// AyurVeda AI Application JavaScript - Enhanced Professional Version

// Enhanced Application Data with comprehensive information
const appData = {
  "medicines": [
    {
      "id": 1,
      "name": "Triphala Churna",
      "sanskrit_name": "त्रिफला चूर्ण",
      "type": "Churna",
      "category": "Rasayana",
      "brand": "Himalaya",
      "price": "₹120",
      "rating": 4.5,
      "reviews": 2340,
      "composition": ["Haritaki (Terminalia chebula)", "Bibhitaki (Terminalia bellirica)", "Amalaki (Emblica officinalis)"],
      "properties": ["Rasayana", "Tridosha Shamaka", "Deepana", "Pachana"],
      "indications": ["Digestive disorders", "Constipation", "Eye health", "General wellness", "Detoxification"],
      "dosage": "3-6g twice daily with warm water before meals",
      "availability": "In Stock",
      "description": "Classical Ayurvedic formulation for digestive health, detoxification, and overall wellness. Balances all three doshas.",
      "contraindications": ["Pregnancy", "Severe dehydration", "Diarrhea"],
      "classicalRef": "Charaka Samhita - Sutra Sthana 4/36",
      "pharmacology": ["Antioxidant", "Hepatoprotective", "Immunomodulatory", "Anti-inflammatory"]
    },
    {
      "id": 2,
      "name": "Ashwagandha Capsules",
      "sanskrit_name": "अश्वगन्धा",
      "type": "Capsule",
      "category": "Rasayana",
      "brand": "Kottakkal",
      "price": "₹350",
      "rating": 4.7,
      "reviews": 1560,
      "composition": ["Withania somnifera root extract (500mg)"],
      "properties": ["Rasayana", "Balya", "Vajikara", "Nidrajanana"],
      "indications": ["Stress", "Anxiety", "Fatigue", "Immunity", "Sleep disorders", "Cognitive enhancement"],
      "dosage": "1-2 capsules twice daily after meals with milk or water",
      "availability": "In Stock",
      "description": "Premium adaptogenic herb for stress management, vitality, and mental clarity. Natural anxiety reliever and energy booster.",
      "contraindications": ["Autoimmune conditions", "Pregnancy", "Hyperthyroidism"],
      "classicalRef": "Sushruta Samhita - Chikitsa Sthana 29/3",
      "pharmacology": ["Adaptogenic", "Anti-stress", "Neuroprotective", "Immunomodulatory"]
    },
    {
      "id": 3,
      "name": "Brahmi Ghrita",
      "sanskrit_name": "ब्राह्मी घृत",
      "type": "Ghrita",
      "category": "Medhya Rasayana",
      "brand": "Vaidyaratnam",
      "price": "₹280",
      "rating": 4.3,
      "reviews": 890,
      "composition": ["Brahmi (Bacopa monnieri)", "Cow ghee", "Vacha (Acorus calamus)", "Kustha (Saussurea lappa)"],
      "properties": ["Medhya", "Rasayana", "Neuroprotective", "Smriti Vardhaka"],
      "indications": ["Memory enhancement", "Mental clarity", "Epilepsy", "Anxiety", "Depression"],
      "dosage": "5-10ml twice daily before meals or as directed",
      "availability": "Limited Stock",
      "description": "Classical medicated ghee for cognitive enhancement and nervous system support. Enhances memory and concentration.",
      "contraindications": ["High cholesterol", "Gallbladder disorders", "Obesity"],
      "classicalRef": "Ashtanga Hridaya - Uttara Tantra 6/46",
      "pharmacology": ["Nootropic", "Neuroprotective", "Anxiolytic", "Memory enhancer"]
    },
    {
      "id": 4,
      "name": "Dashamoolarishta",
      "sanskrit_name": "दशमूलारिष्ट",
      "type": "Arishta",
      "category": "Arishta",
      "brand": "Baidyanath",
      "price": "₹165",
      "rating": 4.4,
      "reviews": 1200,
      "composition": ["Dashamoola (10 medicinal roots)", "Jaggery", "Natural fermentation"],
      "properties": ["Vatahara", "Balya", "Deepana", "Pachana"],
      "indications": ["Post-partum care", "General weakness", "Digestive disorders", "Respiratory problems"],
      "dosage": "15-30ml twice daily after meals with equal water",
      "availability": "In Stock",
      "description": "Fermented Ayurvedic tonic for strength, digestion, and respiratory health. Especially beneficial for women's health.",
      "contraindications": ["Diabetes", "Alcohol sensitivity"],
      "classicalRef": "Ashtanga Hridayam - Chikitsa Sthana 3/156",
      "pharmacology": ["Immunomodulatory", "Anti-inflammatory", "Digestive", "Rejuvenative"]
    },
    {
      "id": 5,
      "name": "Saraswatarishta",
      "sanskrit_name": "सरस्वतारिष्ट",
      "type": "Arishta",
      "category": "Medhya Rasayana",
      "brand": "Himalaya",
      "price": "₹210",
      "rating": 4.6,
      "reviews": 945,
      "composition": ["Brahmi", "Shankhpushpi", "Jaggery", "Various brain tonics"],
      "properties": ["Medhya", "Smriti Vardhaka", "Buddhi Vardhaka"],
      "indications": ["Memory loss", "Learning difficulties", "Mental fatigue", "Speech disorders"],
      "dosage": "15-25ml twice daily after meals",
      "availability": "In Stock",
      "description": "Brain tonic for memory enhancement, cognitive function, and mental clarity. Excellent for students and professionals.",
      "contraindications": ["Diabetes", "Children under 12"],
      "classicalRef": "Bhaishajya Ratnavali - Unmada Adhikara",
      "pharmacology": ["Cognitive enhancer", "Neuroprotective", "Memory booster"]
    }
  ],
  "bodySystemsSymptoms": {
    "Respiratory": ["Cough", "Breathlessness", "Chest congestion", "Sore throat", "Runny nose", "Sneezing", "Wheezing", "Chest pain"],
    "Digestive": ["Nausea", "Vomiting", "Diarrhea", "Constipation", "Abdominal pain", "Gas", "Acidity", "Loss of appetite", "Bloating"],
    "Nervous": ["Headache", "Dizziness", "Anxiety", "Depression", "Memory issues", "Sleep disorders", "Stress", "Mental fatigue"],
    "Musculoskeletal": ["Joint pain", "Back pain", "Muscle pain", "Stiffness", "Swelling", "Weakness", "Cramps"],
    "Skin": ["Rash", "Itching", "Dryness", "Acne", "Eczema", "Psoriasis", "Hair loss", "Pigmentation"],
    "Urogenital": ["Frequent urination", "Burning urination", "Kidney stones", "Irregular periods", "Urinary retention"]
  },
  "experts": [
    {
      "id": 1,
      "name": "Dr. Rajesh Kumar",
      "qualification": "BAMS, MD (Ayurveda), PhD",
      "experience": "15 years",
      "specialization": "Panchakarma & Chronic Diseases",
      "rating": 4.8,
      "consultations": 2150,
      "fee": "₹500",
      "availability": "Available Today",
      "languages": ["Hindi", "English", "Sanskrit"],
      "education": "AIIMS Delhi, Banaras Hindu University",
      "expertise": ["Diabetes Management", "Arthritis Treatment", "Detoxification"]
    },
    {
      "id": 2,
      "name": "Dr. Priya Sharma",
      "qualification": "BAMS, MD (Prasuti Tantra), PhD",
      "experience": "12 years",
      "specialization": "Women's Health & Fertility",
      "rating": 4.9,
      "consultations": 1890,
      "fee": "₹600",
      "availability": "Tomorrow 10 AM",
      "languages": ["Hindi", "English", "Sanskrit"],
      "education": "Gujarat Ayurved University",
      "expertise": ["PCOS Treatment", "Fertility Enhancement", "Menstrual Disorders"]
    },
    {
      "id": 3,
      "name": "Dr. Amit Verma",
      "qualification": "BAMS, MD (Kayachikitsa)",
      "experience": "18 years",
      "specialization": "Mental Health & Neurological Disorders",
      "rating": 4.7,
      "consultations": 2340,
      "fee": "₹550",
      "availability": "Available Today",
      "languages": ["Hindi", "English"],
      "education": "NIA Jaipur",
      "expertise": ["Anxiety Treatment", "Depression Care", "Memory Enhancement"]
    }
  ],
  "classicalTexts": [
    {
      "id": 1,
      "name": "Charaka Samhita",
      "author": "Acharya Charaka",
      "sections": ["Sutra Sthana", "Nidana Sthana", "Vimana Sthana", "Sharira Sthana", "Indriya Sthana", "Chikitsa Sthana", "Kalpa Sthana", "Siddhi Sthana"],
      "totalVerses": 8400,
      "description": "Fundamental text on Ayurvedic medicine, internal medicine, and treatment principles",
      "focus": "Internal medicine, diagnosis, pharmacology",
      "period": "400-200 BCE"
    },
    {
      "id": 2,
      "name": "Sushruta Samhita", 
      "author": "Acharya Sushruta",
      "sections": ["Sutra Sthana", "Nidana Sthana", "Sharira Sthana", "Chikitsa Sthana", "Kalpa Sthana", "Uttara Tantra"],
      "totalVerses": 5416,
      "description": "Classical text on surgery, surgical procedures, and anatomy",
      "focus": "Surgery, anatomy, wound care",
      "period": "600-1000 CE"
    },
    {
      "id": 3,
      "name": "Ashtanga Hridayam",
      "author": "Acharya Vagbhata",
      "sections": ["Sutra Sthana", "Sharira Sthana", "Nidana Sthana", "Chikitsa Sthana", "Kalpa Sthana", "Uttara Sthana"],
      "totalVerses": 7120,
      "description": "Comprehensive compilation of Ayurvedic principles and practices",
      "focus": "Complete medical system, practical applications",
      "period": "600 CE"
    }
  ],
  "testimonials": [
    {
      "id": 1,
      "name": "Amit Patel",
      "age": 45,
      "condition": "Chronic Digestive Issues", 
      "review": "After years of suffering from IBS, the AI-powered recommendations helped me find the perfect combination of Triphala and dietary changes. My digestion has improved dramatically in just 3 months.",
      "rating": 5,
      "duration": "3 months of treatment",
      "medicines": ["Triphala Churna", "Hingvastak Churna"],
      "location": "Mumbai, Maharashtra"
    },
    {
      "id": 2,
      "name": "Sunita Devi",
      "age": 38,
      "condition": "Anxiety & Sleep Problems",
      "review": "The personalized treatment plan with Ashwagandha and Brahmi, along with expert consultation, transformed my mental health. I sleep peacefully now and feel more confident.",
      "rating": 5,
      "duration": "6 months of treatment",
      "medicines": ["Ashwagandha", "Brahmi Ghrita"],
      "location": "Delhi, India"
    },
    {
      "id": 3,
      "name": "Ramesh Singh",
      "age": 52,
      "condition": "Joint Pain & Arthritis",
      "review": "The AI correctly identified my Vata imbalance and recommended specific medicines. Combined with Panchakarma therapy, my joint pain reduced by 80%.",
      "rating": 5,
      "duration": "4 months of treatment",
      "medicines": ["Yogaraja Guggulu", "Dashamoolarishta"],
      "location": "Jaipur, Rajasthan"
    }
  ],
  "diseaseMapping": [
    {
      "disease": "Amlapitta (Hyperacidity)",
      "symptoms": ["Heartburn", "Acid reflux", "Nausea", "Loss of appetite", "Abdominal pain"],
      "dosha": "Pitta",
      "recommendedMedicines": ["Avipattikar Churna", "Kamadudha Rasa", "Shankh Bhasma"],
      "lifestyle": ["Avoid spicy food", "Regular meal times", "Stress management"],
      "probability": 85
    },
    {
      "disease": "Sandhivata (Arthritis)",
      "symptoms": ["Joint pain", "Stiffness", "Swelling", "Reduced mobility"],
      "dosha": "Vata",
      "recommendedMedicines": ["Dashamoolarishta", "Maharasnadi Kwath", "Yogaraja Guggulu"],
      "lifestyle": ["Gentle exercise", "Oil massage", "Warm environment"],
      "probability": 78
    }
  ]
};

// Application State Management
let currentStep = 1;
let selectedBodySystem = '';
let selectedSymptoms = [];
let symptomDetails = {};
let filteredMedicines = [...appData.medicines];
let chatHistory = [];
let isChatbotExpanded = false;
let currentTestimonial = 0;
let bookingStep = 1;
let selectedExpert = null;
let selectedTimeSlot = null;
let currentResultTab = 'conditions';

// DOM Elements
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');
const searchModal = document.querySelector('.search-modal');
const medicineModal = document.getElementById('medicine-modal');
const bookingModal = document.getElementById('booking-modal');

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    renderMedicines();
    renderExperts();
    renderClassicalTexts();
    renderTestimonials();
    animateStats();
    initializeChatbot();
});

// App Initialization
function initializeApp() {
    console.log('AyurVeda AI Application Initializing...');
    
    // Set minimum date for consultations
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateInput = document.getElementById('consultation-date');
    if (dateInput) {
        dateInput.min = today.toISOString().split('T')[0];
        dateInput.value = tomorrow.toISOString().split('T')[0];
    }
    
    // Initialize severity slider
    const severitySlider = document.getElementById('severity-slider');
    if (severitySlider) {
        severitySlider.addEventListener('input', function() {
            document.getElementById('severity-value').textContent = this.value;
        });
    }
    
    // Set initial wizard progress
    updateWizardProgress(1);
    
    console.log('Application initialized successfully');
}

// Event Listeners Setup
function setupEventListeners() {
    // Navigation
    navLinks.forEach(link => {
        link.addEventListener('click', handleNavigation);
    });

    // Search functionality
    document.querySelector('.search-toggle').addEventListener('click', openSearchModal);
    document.querySelector('.search-close').addEventListener('click', closeSearchModal);
    
    // Global search
    const globalSearch = document.getElementById('global-search');
    if (globalSearch) {
        globalSearch.addEventListener('input', debounce(handleGlobalSearch, 300));
    }

    // Modal close handlers
    setupModalHandlers();
    
    // Body system selection
    setupBodySystemSelection();
    
    // Symptom search and selection
    setupSymptomHandlers();
    
    // Medicine filters
    setupMedicineFilters();
    
    // Expert filters
    setupExpertFilters();
    
    // Chat functionality
    setupChatHandlers();
    
    // Keyboard shortcuts
    setupKeyboardShortcuts();
    
    // Booking form handlers
    setupBookingHandlers();
}

// Navigation Functions
function handleNavigation(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    showSection(targetId);
    updateActiveNav(this);
}

function showSection(sectionId) {
    // Hide all sections
    sections.forEach(section => {
        section.classList.add('hidden');
    });
    
    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.remove('hidden');
    }
    
    // Handle home section special case
    const heroSection = document.querySelector('.hero-section');
    const featuresSection = document.querySelector('.features-section');
    const trustSection = document.querySelector('.trust-section');
    const testimonialsSection = document.querySelector('.testimonials-section');
    
    if (sectionId === 'home') {
        heroSection.style.display = 'flex';
        featuresSection.style.display = 'block';
        trustSection.style.display = 'block';
        testimonialsSection.style.display = 'block';
    } else {
        heroSection.style.display = 'none';
        featuresSection.style.display = 'none';
        trustSection.style.display = 'none';
        testimonialsSection.style.display = 'none';
    }
    
    // Trigger animations for newly visible section
    triggerSectionAnimations(sectionId);
}

function updateActiveNav(activeLink) {
    navLinks.forEach(link => link.classList.remove('active'));
    activeLink.classList.add('active');
}

function triggerSectionAnimations(sectionId) {
    const section = document.getElementById(sectionId);
    if (!section) return;
    
    // Add animation classes to cards and elements
    const animatedElements = section.querySelectorAll('.feature-card, .medicine-card, .expert-card');
    animatedElements.forEach((element, index) => {
        setTimeout(() => {
            element.style.animation = 'fadeInUp 0.6s ease forwards';
        }, index * 100);
    });
}

// Search Functions
function openSearchModal() {
    searchModal.classList.remove('hidden');
    document.getElementById('global-search').focus();
}

function closeSearchModal() {
    searchModal.classList.add('hidden');
    document.getElementById('global-search').value = '';
    document.getElementById('search-results').innerHTML = `
        <div class="search-suggestions">
            <h4>Popular Searches</h4>
            <button class="search-tag" onclick="performQuickSearch('Triphala')">Triphala</button>
            <button class="search-tag" onclick="performQuickSearch('Headache')">Headache</button>
            <button class="search-tag" onclick="performQuickSearch('Digestion')">Digestion</button>
            <button class="search-tag" onclick="performQuickSearch('Stress')">Stress</button>
            <button class="search-tag" onclick="performQuickSearch('Ashwagandha')">Ashwagandha</button>
        </div>
    `;
}

function handleGlobalSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    if (searchTerm.length < 2) {
        closeSearchModal();
        return;
    }
    
    const results = performGlobalSearch(searchTerm);
    displaySearchResults(results);
}

function performGlobalSearch(searchTerm) {
    const results = [];
    
    // Search medicines
    appData.medicines.forEach(medicine => {
        if (medicine.name.toLowerCase().includes(searchTerm) ||
            medicine.description.toLowerCase().includes(searchTerm) ||
            medicine.composition.some(comp => comp.toLowerCase().includes(searchTerm)) ||
            medicine.indications.some(ind => ind.toLowerCase().includes(searchTerm))) {
            results.push({
                type: 'medicine',
                title: medicine.name,
                subtitle: `${medicine.brand} - ${medicine.type}`,
                data: medicine,
                relevance: calculateRelevance(searchTerm, medicine)
            });
        }
    });
    
    // Search symptoms
    Object.values(appData.bodySystemsSymptoms).flat().forEach(symptom => {
        if (symptom.toLowerCase().includes(searchTerm)) {
            results.push({
                type: 'symptom',
                title: symptom,
                subtitle: 'Symptom',
                data: symptom,
                relevance: symptom.toLowerCase() === searchTerm ? 100 : 50
            });
        }
    });
    
    // Search experts
    appData.experts.forEach(expert => {
        if (expert.name.toLowerCase().includes(searchTerm) ||
            expert.specialization.toLowerCase().includes(searchTerm)) {
            results.push({
                type: 'expert',
                title: expert.name,
                subtitle: expert.specialization,
                data: expert,
                relevance: calculateExpertRelevance(searchTerm, expert)
            });
        }
    });
    
    return results.sort((a, b) => b.relevance - a.relevance);
}

function calculateRelevance(searchTerm, medicine) {
    let relevance = 0;
    if (medicine.name.toLowerCase().includes(searchTerm)) relevance += 50;
    if (medicine.indications.some(ind => ind.toLowerCase().includes(searchTerm))) relevance += 30;
    if (medicine.description.toLowerCase().includes(searchTerm)) relevance += 20;
    return relevance;
}

function calculateExpertRelevance(searchTerm, expert) {
    let relevance = 0;
    if (expert.name.toLowerCase().includes(searchTerm)) relevance += 60;
    if (expert.specialization.toLowerCase().includes(searchTerm)) relevance += 40;
    return relevance;
}

function displaySearchResults(results) {
    const searchResults = document.getElementById('search-results');
    
    if (results.length === 0) {
        searchResults.innerHTML = '<div class="no-results">No results found. Try different keywords.</div>';
        return;
    }
    
    const resultsHtml = results.slice(0, 8).map(result => `
        <div class="search-result-item" onclick="handleSearchResult('${result.type}', ${result.data.id || 0})">
            <div class="result-icon">
                <i class="fas fa-${getResultIcon(result.type)}"></i>
            </div>
            <div class="result-content">
                <div class="result-title">${result.title}</div>
                <div class="result-subtitle">${result.subtitle}</div>
            </div>
        </div>
    `).join('');
    
    searchResults.innerHTML = `
        <div class="search-results-header">
            <h4>Search Results (${results.length})</h4>
        </div>
        <div class="search-results-list">${resultsHtml}</div>
    `;
}

function getResultIcon(type) {
    const icons = {
        'medicine': 'pills',
        'symptom': 'stethoscope',
        'expert': 'user-md',
        'text': 'book'
    };
    return icons[type] || 'search';
}

function handleSearchResult(type, id) {
    closeSearchModal();
    
    switch(type) {
        case 'medicine':
            showMedicines();
            setTimeout(() => showMedicineDetails(id), 300);
            break;
        case 'expert':
            showExperts();
            setTimeout(() => highlightExpert(id), 300);
            break;
        case 'symptom':
            showSymptomChecker();
            break;
    }
}

function performQuickSearch(term) {
    document.getElementById('global-search').value = term;
    handleGlobalSearch({ target: { value: term } });
}

// Symptom Checker Functions
function setupBodySystemSelection() {
    const bodySystemCards = document.querySelectorAll('.body-system-card');
    bodySystemCards.forEach(card => {
        card.addEventListener('click', function() {
            bodySystemCards.forEach(c => c.classList.remove('selected'));
            this.classList.add('selected');
            selectedBodySystem = this.dataset.system;
            
            // Enable next button
            document.getElementById('next-btn').disabled = false;
        });
    });
}

function setupSymptomHandlers() {
    const symptomSearch = document.getElementById('symptom-search');
    if (symptomSearch) {
        symptomSearch.addEventListener('input', function() {
            const suggestions = getSymptomSuggestions(this.value);
            displaySymptomSuggestions(suggestions);
            filterSymptoms(this.value);
        });
        
        symptomSearch.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const customSymptom = this.value.trim();
                if (customSymptom && !selectedSymptoms.includes(customSymptom)) {
                    addCustomSymptom(customSymptom);
                }
            }
        });
    }
}

function getSymptomSuggestions(input) {
    if (!input || input.length < 2) return [];
    
    const allSymptoms = Object.values(appData.bodySystemsSymptoms).flat();
    return allSymptoms
        .filter(symptom => symptom.toLowerCase().includes(input.toLowerCase()))
        .slice(0, 5);
}

function displaySymptomSuggestions(suggestions) {
    const suggestionsContainer = document.getElementById('symptom-suggestions');
    if (!suggestionsContainer) return;
    
    if (suggestions.length === 0) {
        suggestionsContainer.style.display = 'none';
        return;
    }
    
    suggestionsContainer.innerHTML = suggestions.map(suggestion => `
        <div class="suggestion-item" onclick="selectSuggestion('${suggestion}')">${suggestion}</div>
    `).join('');
    suggestionsContainer.style.display = 'block';
}

function selectSuggestion(suggestion) {
    toggleSymptom(suggestion);
    document.getElementById('symptom-search').value = '';
    document.getElementById('symptom-suggestions').style.display = 'none';
}

function addCustomSymptom(symptom) {
    if (!selectedSymptoms.includes(symptom)) {
        selectedSymptoms.push(symptom);
        updateSelectedSymptoms();
        document.getElementById('symptom-search').value = '';
    }
}

function filterSymptoms(searchTerm) {
    const systemSymptoms = appData.bodySystemsSymptoms[selectedBodySystem] || [];
    let filteredSymptoms = systemSymptoms;
    
    if (searchTerm) {
        filteredSymptoms = systemSymptoms.filter(symptom => 
            symptom.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }
    
    renderSymptoms(filteredSymptoms);
}

function renderSymptoms(symptoms) {
    const symptomsGrid = document.getElementById('symptoms-grid');
    if (!symptomsGrid) return;
    
    symptomsGrid.innerHTML = symptoms.map(symptom => `
        <div class="symptom-item ${selectedSymptoms.includes(symptom) ? 'selected' : ''}" 
             data-symptom="${symptom}" onclick="toggleSymptom('${symptom}')">
            ${symptom}
        </div>
    `).join('');
}

function toggleSymptom(symptom) {
    const symptomElement = document.querySelector(`[data-symptom="${symptom}"]`);
    
    if (selectedSymptoms.includes(symptom)) {
        selectedSymptoms = selectedSymptoms.filter(s => s !== symptom);
        if (symptomElement) symptomElement.classList.remove('selected');
    } else {
        selectedSymptoms.push(symptom);
        if (symptomElement) symptomElement.classList.add('selected');
    }
    
    updateSelectedSymptoms();
}

function updateSelectedSymptoms() {
    const selectedList = document.getElementById('selected-symptoms-list');
    const symptomCount = document.getElementById('symptom-count');
    
    if (!selectedList) return;
    
    selectedList.innerHTML = selectedSymptoms.map(symptom => `
        <span class="selected-symptom-tag">
            ${symptom}
            <span class="remove-symptom" onclick="toggleSymptom('${symptom}')">&times;</span>
        </span>
    `).join('');
    
    if (symptomCount) {
        symptomCount.textContent = selectedSymptoms.length;
    }
}

// Wizard Navigation
function nextStep() {
    if (currentStep < 4) {
        if (!validateStep(currentStep)) {
            showValidationError(currentStep);
            return;
        }
        
        currentStep++;
        updateWizardStep();
        
        if (currentStep === 2 && selectedBodySystem) {
            renderSymptoms(appData.bodySystemsSymptoms[selectedBodySystem] || []);
        }
        
        if (currentStep === 4) {
            startAIAnalysis();
        }
    }
}

function previousStep() {
    if (currentStep > 1) {
        currentStep--;
        updateWizardStep();
    }
}

function validateStep(step) {
    switch(step) {
        case 1:
            return selectedBodySystem !== '';
        case 2:
            return selectedSymptoms.length > 0;
        case 3:
            return document.getElementById('symptom-duration').value !== '';
        default:
            return true;
    }
}

function showValidationError(step) {
    let message = '';
    switch(step) {
        case 1:
            message = 'Please select a body system before proceeding.';
            break;
        case 2:
            message = 'Please select at least one symptom.';
            break;
        case 3:
            message = 'Please specify the duration of your symptoms.';
            break;
    }
    
    // Show toast notification
    showToast(message, 'warning');
}

function updateWizardStep() {
    // Update progress indicators
    document.querySelectorAll('.progress-step').forEach((step, index) => {
        if (index + 1 <= currentStep) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    });
    
    // Update progress bar width
    const progressWidth = ((currentStep - 1) / 3) * 100;
    document.documentElement.style.setProperty('--progress-width', `${progressWidth}%`);
    
    // Show/hide wizard steps
    document.querySelectorAll('.wizard-step').forEach((step, index) => {
        if (index + 1 === currentStep) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    });
    
    // Update navigation buttons
    updateWizardButtons();
}

function updateWizardButtons() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const restartBtn = document.getElementById('restart-btn');
    
    prevBtn.style.display = currentStep === 1 ? 'none' : 'block';
    
    if (currentStep === 4) {
        nextBtn.classList.add('hidden');
        restartBtn.classList.remove('hidden');
    } else {
        nextBtn.classList.remove('hidden');
        restartBtn.classList.add('hidden');
        nextBtn.innerHTML = currentStep === 3 ? 
            'Analyze <i class="fas fa-brain"></i>' : 
            'Next <i class="fas fa-arrow-right"></i>';
    }
}

function updateWizardProgress(step) {
    const progressSteps = document.querySelectorAll('.progress-step');
    progressSteps.forEach((stepEl, index) => {
        if (index + 1 <= step) {
            stepEl.classList.add('active');
        } else {
            stepEl.classList.remove('active');
        }
    });
}

// AI Analysis Functions
function startAIAnalysis() {
    showAnalysisLoading();
    
    // Simulate AI processing time
    setTimeout(() => {
        const diagnosis = performAdvancedAIAnalysis();
        displayAnalysisResults(diagnosis);
    }, 3000);
}

function showAnalysisLoading() {
    const loadingElement = document.getElementById('analysis-loading');
    const resultsElement = document.getElementById('diagnosis-results');
    
    if (loadingElement) loadingElement.classList.remove('hidden');
    if (resultsElement) resultsElement.classList.add('hidden');
}

function performAdvancedAIAnalysis() {
    const analysis = {
        confidence: 0,
        conditions: [],
        medicines: [],
        lifestyle: []
    };
    
    // Advanced rule-based analysis with dosha assessment
    const doshascores = assessDoshaImbalance();
    const conditions = identifyConditions(doshascores);
    const medicines = recommendMedicines(conditions);
    const lifestyle = generateLifestyleRecommendations(conditions, doshascores);
    
    analysis.conditions = conditions;
    analysis.medicines = medicines;
    analysis.lifestyle = lifestyle;
    analysis.confidence = Math.max(...conditions.map(c => c.probability));
    
    return analysis;
}

function assessDoshaImbalance() {
    const scores = { vata: 0, pitta: 0, kapha: 0 };
    
    // Analyze symptoms for dosha patterns
    selectedSymptoms.forEach(symptom => {
        if (['Anxiety', 'Headache', 'Joint pain', 'Dizziness', 'Sleep disorders'].includes(symptom)) {
            scores.vata += 10;
        }
        if (['Heartburn', 'Acidity', 'Skin rash', 'Nausea'].includes(symptom)) {
            scores.pitta += 10;
        }
        if (['Cough', 'Chest congestion', 'Weight gain', 'Bloating'].includes(symptom)) {
            scores.kapha += 10;
        }
    });
    
    return scores;
}

function identifyConditions(doshaScores) {
    const conditions = [];
    
    // System-specific conditions
    if (selectedBodySystem === 'Digestive') {
        conditions.push({
            name: 'Agnimandya (Weak Digestive Fire)',
            probability: 80 + Math.random() * 10,
            description: 'Weakened digestive fire leading to poor digestion and related symptoms.',
            dosha: 'Vata-Pitta',
            ayurvedicName: 'अग्निमान्द्य'
        });
    }
    
    if (selectedBodySystem === 'Nervous') {
        conditions.push({
            name: 'Vatavyadhi (Nervous System Disorder)',
            probability: 75 + Math.random() * 15,
            description: 'Vata dosha imbalance affecting nervous system and mental functions.',
            dosha: 'Vata',
            ayurvedicName: 'वातव्याधि'
        });
    }
    
    // Add more conditions based on symptoms
    if (selectedSymptoms.includes('Joint pain')) {
        conditions.push({
            name: 'Sandhivata (Arthritis)',
            probability: 70 + Math.random() * 20,
            description: 'Joint disorder caused by Vata dosha imbalance.',
            dosha: 'Vata',
            ayurvedicName: 'सन्धिवात'
        });
    }
    
    return conditions.sort((a, b) => b.probability - a.probability);
}

function recommendMedicines(conditions) {
    const recommendedMedicines = [];
    
    conditions.forEach(condition => {
        if (condition.name.includes('Digestive') || condition.name.includes('Agni')) {
            recommendedMedicines.push(appData.medicines.find(m => m.id === 1)); // Triphala
        }
        if (condition.name.includes('Nervous') || condition.name.includes('Vata')) {
            recommendedMedicines.push(appData.medicines.find(m => m.id === 2)); // Ashwagandha
            recommendedMedicines.push(appData.medicines.find(m => m.id === 3)); // Brahmi Ghrita
        }
        if (condition.name.includes('Arthritis') || condition.name.includes('Joint')) {
            recommendedMedicines.push(appData.medicines.find(m => m.id === 4)); // Dashamoolarishta
        }
    });
    
    // Remove duplicates and filter out undefined
    return [...new Set(recommendedMedicines)].filter(m => m);
}

function generateLifestyleRecommendations(conditions, doshaScores) {
    const recommendations = [];
    
    // Dosha-specific recommendations
    if (doshaScores.vata > doshaScores.pitta && doshaScores.vata > doshaScores.kapha) {
        recommendations.push({
            category: 'Diet',
            recommendation: 'Favor warm, cooked, and nourishing foods. Avoid cold and raw foods.',
            icon: 'utensils'
        });
        recommendations.push({
            category: 'Lifestyle',
            recommendation: 'Maintain regular routines, get adequate rest, and practice gentle yoga.',
            icon: 'clock'
        });
    }
    
    if (doshaScores.pitta > doshaScores.vata && doshaScores.pitta > doshaScores.kapha) {
        recommendations.push({
            category: 'Diet',
            recommendation: 'Choose cooling foods, avoid spicy and acidic foods.',
            icon: 'leaf'
        });
        recommendations.push({
            category: 'Lifestyle',
            recommendation: 'Practice moderation, avoid excessive heat and sun exposure.',
            icon: 'sun'
        });
    }
    
    // System-specific recommendations
    if (selectedBodySystem === 'Digestive') {
        recommendations.push({
            category: 'Diet',
            recommendation: 'Eat at regular times, chew food properly, and avoid overeating.',
            icon: 'utensils'
        });
    }
    
    return recommendations;
}

function displayAnalysisResults(analysis) {
    const loadingElement = document.getElementById('analysis-loading');
    const resultsElement = document.getElementById('diagnosis-results');
    
    if (loadingElement) loadingElement.classList.add('hidden');
    if (resultsElement) resultsElement.classList.remove('hidden');
    
    // Update confidence score
    document.getElementById('confidence-score').textContent = `${Math.round(analysis.confidence)}%`;
    
    // Display conditions
    displayConditions(analysis.conditions);
    displayRecommendedMedicines(analysis.medicines);
    displayLifestyleRecommendations(analysis.lifestyle);
}

function displayConditions(conditions) {
    const conditionsContainer = document.getElementById('possible-conditions');
    if (!conditionsContainer) return;
    
    conditionsContainer.innerHTML = `
        <h3>Possible Ayurvedic Conditions</h3>
        ${conditions.map(condition => `
            <div class="condition-item">
                <div class="condition-header">
                    <div class="condition-name">${condition.name}</div>
                    <div class="condition-probability">${Math.round(condition.probability)}% Match</div>
                </div>
                <div class="condition-ayurvedic">${condition.ayurvedicName}</div>
                <div class="condition-dosha">Primary Dosha: <strong>${condition.dosha}</strong></div>
                <div class="condition-description">${condition.description}</div>
            </div>
        `).join('')}
    `;
}

function displayRecommendedMedicines(medicines) {
    const medicinesContainer = document.getElementById('recommended-medicines');
    if (!medicinesContainer) return;
    
    medicinesContainer.innerHTML = `
        <h3>AI-Recommended Medicines</h3>
        <div class="medicines-grid">
            ${medicines.map(medicine => `
                <div class="medicine-card recommended" onclick="showMedicineDetails(${medicine.id})">
                    <div class="recommendation-badge">AI Recommended</div>
                    <div class="medicine-header">
                        <div class="medicine-info">
                            <h4>${medicine.name}</h4>
                            <div class="medicine-brand">${medicine.brand}</div>
                            <span class="medicine-type">${medicine.type}</span>
                        </div>
                        <div class="medicine-price">${medicine.price}</div>
                    </div>
                    <div class="medicine-rating">
                        <div class="rating-stars">${generateStars(medicine.rating)}</div>
                        <span class="rating-text">${medicine.rating} (${medicine.reviews} reviews)</span>
                    </div>
                    <div class="medicine-description">${medicine.description}</div>
                </div>
            `).join('')}
        </div>
    `;
}

function displayLifestyleRecommendations(recommendations) {
    const lifestyleContainer = document.getElementById('lifestyle-recommendations');
    if (!lifestyleContainer) return;
    
    lifestyleContainer.innerHTML = `
        <h3>Personalized Lifestyle Recommendations</h3>
        <div class="lifestyle-grid">
            ${recommendations.map(rec => `
                <div class="lifestyle-item">
                    <div class="lifestyle-icon">
                        <i class="fas fa-${rec.icon}"></i>
                    </div>
                    <div class="lifestyle-content">
                        <h4>${rec.category}</h4>
                        <p>${rec.recommendation}</p>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// Results Tab Functions
function showResultTab(tabName) {
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[onclick="showResultTab('${tabName}')"]`).classList.add('active');
    
    // Update tab content
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    document.getElementById(`${tabName}-tab`).classList.add('active');
    
    currentResultTab = tabName;
}

function restartWizard() {
    currentStep = 1;
    selectedBodySystem = '';
    selectedSymptoms = [];
    symptomDetails = {};
    
    // Reset form
    document.getElementById('symptom-duration').value = '';
    document.getElementById('age-group').value = '';
    document.getElementById('severity-slider').value = 5;
    document.getElementById('severity-value').textContent = '5';
    document.getElementById('additional-info').value = '';
    
    // Clear selections
    document.querySelectorAll('.body-system-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    updateWizardStep();
    updateSelectedSymptoms();
}

// Medicine Database Functions
function setupMedicineFilters() {
    const searchInput = document.getElementById('medicine-search');
    const categoryFilter = document.getElementById('category-filter');
    const brandFilter = document.getElementById('brand-filter');
    const sortFilter = document.getElementById('sort-filter');
    
    if (searchInput) {
        searchInput.addEventListener('input', debounce(filterMedicines, 300));
    }
    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterMedicines);
    }
    if (brandFilter) {
        brandFilter.addEventListener('change', filterMedicines);
    }
    if (sortFilter) {
        sortFilter.addEventListener('change', filterMedicines);
    }
}

function filterMedicines() {
    const searchTerm = document.getElementById('medicine-search')?.value.toLowerCase() || '';
    const categoryFilter = document.getElementById('category-filter')?.value || '';
    const brandFilter = document.getElementById('brand-filter')?.value || '';
    const sortFilter = document.getElementById('sort-filter')?.value || 'rating';
    
    let filtered = appData.medicines.filter(medicine => {
        const matchesSearch = medicine.name.toLowerCase().includes(searchTerm) ||
                             medicine.description.toLowerCase().includes(searchTerm) ||
                             medicine.composition.some(comp => comp.toLowerCase().includes(searchTerm)) ||
                             medicine.indications.some(ind => ind.toLowerCase().includes(searchTerm));
        
        const matchesCategory = !categoryFilter || medicine.category === categoryFilter;
        const matchesBrand = !brandFilter || medicine.brand === brandFilter;
        
        return matchesSearch && matchesCategory && matchesBrand;
    });
    
    // Sort medicines
    filtered.sort((a, b) => {
        switch(sortFilter) {
            case 'rating':
                return b.rating - a.rating;
            case 'price':
                return parseInt(a.price.replace('₹', '')) - parseInt(b.price.replace('₹', ''));
            case 'name':
                return a.name.localeCompare(b.name);
            case 'effectiveness':
                return b.reviews - a.reviews;
            default:
                return 0;
        }
    });
    
    filteredMedicines = filtered;
    renderMedicines();
}

function renderMedicines() {
    const medicinesGrid = document.getElementById('medicines-grid');
    if (!medicinesGrid) return;
    
    if (filteredMedicines.length === 0) {
        medicinesGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>No medicines found</h3>
                <p>Try adjusting your search criteria or filters.</p>
            </div>
        `;
        return;
    }
    
    medicinesGrid.innerHTML = filteredMedicines.map(medicine => `
        <div class="medicine-card" onclick="showMedicineDetails(${medicine.id})">
            <div class="medicine-header">
                <div class="medicine-info">
                    <h3>${medicine.name}</h3>
                    <div class="medicine-sanskrit">${medicine.sanskrit_name}</div>
                    <div class="medicine-brand">${medicine.brand}</div>
                    <span class="medicine-type">${medicine.type}</span>
                </div>
                <div class="medicine-price">${medicine.price}</div>
            </div>
            <div class="medicine-rating">
                <div class="rating-stars">${generateStars(medicine.rating)}</div>
                <span class="rating-text">${medicine.rating} (${medicine.reviews} reviews)</span>
            </div>
            <div class="medicine-description">${medicine.description}</div>
            <div class="medicine-tags">
                ${medicine.indications.slice(0, 3).map(indication => 
                    `<span class="medicine-tag">${indication}</span>`
                ).join('')}
            </div>
            <div class="medicine-availability">
                <span class="availability-status ${getAvailabilityClass(medicine.availability)}">
                    ${medicine.availability}
                </span>
                <button class="btn--sm btn--outline view-details-btn">View Details</button>
            </div>
        </div>
    `).join('');
}

function getAvailabilityClass(availability) {
    switch(availability) {
        case 'In Stock': return 'in-stock';
        case 'Limited Stock': return 'limited';
        case 'Out of Stock': return 'out-of-stock';
        default: return 'in-stock';
    }
}

function showMedicineDetails(medicineId) {
    const medicine = appData.medicines.find(m => m.id === medicineId);
    if (!medicine) return;
    
    // Populate modal with enhanced information
    document.getElementById('medicine-modal-title').textContent = medicine.name;
    document.getElementById('medicine-sanskrit').textContent = medicine.sanskrit_name;
    document.getElementById('medicine-category').textContent = medicine.category;
    document.getElementById('medicine-rating').textContent = medicine.rating;
    document.getElementById('medicine-stars').innerHTML = generateStars(medicine.rating);
    document.getElementById('medicine-reviews').textContent = `${medicine.reviews} reviews`;
    document.getElementById('medicine-classical-ref').textContent = medicine.classicalRef;
    document.getElementById('medicine-dosage').textContent = medicine.dosage;
    
    // Populate properties
    document.getElementById('medicine-properties').innerHTML = medicine.properties.map(prop => 
        `<span class="property-tag">${prop}</span>`
    ).join('');
    
    // Populate composition
    document.getElementById('medicine-composition').innerHTML = medicine.composition.map(comp => 
        `<span class="composition-tag">${comp}</span>`
    ).join('');
    
    // Populate indications
    document.getElementById('medicine-indications').innerHTML = medicine.indications.map(indication => 
        `<span class="indication-tag">${indication}</span>`
    ).join('');
    
    // Populate pharmacological actions
    document.getElementById('medicine-pharmacology').innerHTML = medicine.pharmacology.map(action => 
        `<span class="property-tag">${action}</span>`
    ).join('');
    
    // Populate contraindications
    document.getElementById('medicine-contraindications').innerHTML = medicine.contraindications.map(contra => 
        `<div class="contraindication-item"><i class="fas fa-exclamation-triangle"></i> ${contra}</div>`
    ).join('');
    
    // Show modal
    medicineModal.classList.remove('hidden');
}

function clearAllFilters() {
    document.getElementById('medicine-search').value = '';
    document.getElementById('category-filter').value = '';
    document.getElementById('brand-filter').value = '';
    document.getElementById('sort-filter').value = 'rating';
    filterMedicines();
}

// Expert Consultation Functions
function setupExpertFilters() {
    const filterTabs = document.querySelectorAll('.filter-tab');
    filterTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            filterTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

function filterExperts(specialization) {
    let filtered = appData.experts;
    
    if (specialization !== 'all') {
        filtered = appData.experts.filter(expert => 
            expert.specialization.toLowerCase().includes(specialization.replace('-', ' '))
        );
    }
    
    renderExperts(filtered);
}

function renderExperts(experts = appData.experts) {
    const expertsGrid = document.getElementById('experts-grid');
    if (!expertsGrid) return;
    
    expertsGrid.innerHTML = experts.map(expert => `
        <div class="expert-card" data-expert-id="${expert.id}">
            <div class="expert-header">
                <div class="expert-avatar">
                    ${expert.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div class="expert-info">
                    <h3>${expert.name}</h3>
                    <div class="expert-qualification">${expert.qualification}</div>
                    <div class="expert-experience">${expert.experience} experience</div>
                </div>
            </div>
            <div class="expert-specialization">${expert.specialization}</div>
            <div class="expert-stats">
                <div class="expert-stat">
                    <span class="expert-stat-number">${expert.rating}</span>
                    <span class="expert-stat-label">Rating</span>
                </div>
                <div class="expert-stat">
                    <span class="expert-stat-number">${expert.consultations}</span>
                    <span class="expert-stat-label">Consultations</span>
                </div>
            </div>
            <div class="expert-fee">
                <span class="fee-amount">${expert.fee}</span>
                <div>Consultation Fee</div>
            </div>
            <div class="expert-availability">
                <span class="availability-text available">${expert.availability}</span>
            </div>
            <div class="expert-languages">
                ${expert.languages.map(lang => `<span class="language-tag">${lang}</span>`).join('')}
            </div>
            <button class="btn--primary btn--full-width" onclick="showBookingModal(${expert.id})">
                Book Consultation
            </button>
        </div>
    `).join('');
}

function highlightExpert(expertId) {
    const expertCard = document.querySelector(`[data-expert-id="${expertId}"]`);
    if (expertCard) {
        expertCard.scrollIntoView({ behavior: 'smooth' });
        expertCard.style.boxShadow = '0 0 20px rgba(82, 183, 136, 0.5)';
        setTimeout(() => {
            expertCard.style.boxShadow = '';
        }, 2000);
    }
}

// Booking Functions
function setupBookingHandlers() {
    const dateInput = document.getElementById('consultation-date');
    if (dateInput) {
        dateInput.addEventListener('change', generateTimeSlots);
    }
    
    // Consultation type change handler
    const consultationTypes = document.querySelectorAll('input[name="consultation-type"]');
    consultationTypes.forEach(type => {
        type.addEventListener('change', updateConsultationFee);
    });
}

function showBookingModal(expertId) {
    selectedExpert = appData.experts.find(e => e.id === expertId);
    if (!selectedExpert) return;
    
    bookingStep = 1;
    updateBookingStep();
    
    // Populate expert summary
    document.getElementById('expert-summary').innerHTML = `
        <div class="expert-booking-summary">
            <div class="expert-avatar">${selectedExpert.name.split(' ').map(n => n[0]).join('')}</div>
            <div class="expert-details">
                <h3>${selectedExpert.name}</h3>
                <p>${selectedExpert.qualification}</p>
                <p><strong>${selectedExpert.specialization}</strong></p>
                <div class="expert-rating">
                    <span class="rating-stars">${generateStars(selectedExpert.rating)}</span>
                    <span>${selectedExpert.rating} rating • ${selectedExpert.consultations} consultations</span>
                </div>
            </div>
        </div>
    `;
    
    updateConsultationFee();
    bookingModal.classList.remove('hidden');
}

function updateConsultationFee() {
    const selectedType = document.querySelector('input[name="consultation-type"]:checked');
    if (!selectedType) return;
    
    const fees = {
        'video': 500,
        'audio': 400,
        'chat': 300
    };
    
    const fee = fees[selectedType.value];
    const total = fee + 50; // Platform fee
    
    document.getElementById('consultation-fee').textContent = `₹${fee}`;
    document.getElementById('total-amount').textContent = `₹${total}`;
}

function nextBookingStep() {
    if (bookingStep < 3) {
        if (validateBookingStep(bookingStep)) {
            bookingStep++;
            updateBookingStep();
            
            if (bookingStep === 2) {
                generateTimeSlots();
            }
        }
    }
}

function previousBookingStep() {
    if (bookingStep > 1) {
        bookingStep--;
        updateBookingStep();
    }
}

function validateBookingStep(step) {
    switch(step) {
        case 1:
            return document.querySelector('input[name="consultation-type"]:checked') !== null;
        case 2:
            return selectedTimeSlot !== null;
        default:
            return true;
    }
}

function updateBookingStep() {
    // Show/hide booking steps
    document.querySelectorAll('.booking-step').forEach((step, index) => {
        if (index + 1 === bookingStep) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    });
    
    // Update navigation buttons
    const prevBtn = document.getElementById('booking-prev');
    const nextBtn = document.getElementById('booking-next');
    const confirmBtn = document.getElementById('confirm-booking');
    
    prevBtn.style.display = bookingStep === 1 ? 'none' : 'block';
    
    if (bookingStep === 3) {
        nextBtn.classList.add('hidden');
        confirmBtn.classList.remove('hidden');
    } else {
        nextBtn.classList.remove('hidden');
        confirmBtn.classList.add('hidden');
    }
}

function generateTimeSlots() {
    const selectedDate = document.getElementById('consultation-date').value;
    if (!selectedDate) return;
    
    const timeSlotsContainer = document.getElementById('time-slots');
    if (!timeSlotsContainer) return;
    
    const timeSlots = [
        '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00', '18:00'
    ];
    
    timeSlotsContainer.innerHTML = timeSlots.map(time => `
        <div class="time-slot" onclick="selectTimeSlot('${time}')">${time}</div>
    `).join('');
}

function selectTimeSlot(time) {
    document.querySelectorAll('.time-slot').forEach(slot => {
        slot.classList.remove('selected');
    });
    
    event.target.classList.add('selected');
    selectedTimeSlot = time;
}

function confirmBooking() {
    const consultationType = document.querySelector('input[name="consultation-type"]:checked').value;
    const consultationDate = document.getElementById('consultation-date').value;
    const chiefComplaint = document.getElementById('chief-complaint').value;
    
    // Simulate booking process
    showToast('Consultation booked successfully! You will receive a confirmation email shortly.', 'success');
    bookingModal.classList.add('hidden');
    
    // Reset booking form
    resetBookingForm();
}

function resetBookingForm() {
    bookingStep = 1;
    selectedTimeSlot = null;
    document.getElementById('chief-complaint').value = '';
    document.getElementById('current-medications').value = '';
    document.getElementById('previous-treatment').value = '';
    document.querySelectorAll('input[name="consultation-type"]')[0].checked = true;
}

// Classical Texts Functions
function renderClassicalTexts() {
    const textsGrid = document.getElementById('texts-grid');
    if (!textsGrid) return;
    
    textsGrid.innerHTML = appData.classicalTexts.map(text => `
        <div class="text-card">
            <div class="text-header">
                <div class="text-info">
                    <h3>${text.name}</h3>
                    <div class="text-author">by ${text.author}</div>
                    <div class="text-period">${text.period}</div>
                </div>
                <div class="text-stats">
                    <div><strong>${text.totalVerses}</strong> verses</div>
                    <div><strong>${text.sections.length}</strong> sections</div>
                </div>
            </div>
            <div class="text-description">${text.description}</div>
            <div class="text-focus">
                <strong>Focus:</strong> ${text.focus}
            </div>
            <div class="text-sections">
                ${text.sections.slice(0, 4).map(section => 
                    `<span class="section-tag">${section}</span>`
                ).join('')}
                ${text.sections.length > 4 ? `<span class="section-tag">+${text.sections.length - 4} more</span>` : ''}
            </div>
            <div class="text-actions">
                <button class="btn--outline btn--sm">
                    <i class="fas fa-book-open"></i> Read Text
                </button>
                <button class="btn--outline btn--sm">
                    <i class="fas fa-search"></i> Search Verses
                </button>
            </div>
        </div>
    `).join('');
}

// Testimonials Functions
function renderTestimonials() {
    const testimonialsTrack = document.getElementById('testimonials-track');
    if (!testimonialsTrack) return;
    
    testimonialsTrack.innerHTML = appData.testimonials.map(testimonial => `
        <div class="testimonial-card">
            <div class="testimonial-rating">
                ${generateStars(testimonial.rating)}
            </div>
            <div class="testimonial-review">"${testimonial.review}"</div>
            <div class="testimonial-author">
                <strong>${testimonial.name}</strong>, ${testimonial.age} years
            </div>
            <div class="testimonial-condition">${testimonial.condition}</div>
            <div class="testimonial-duration">${testimonial.duration}</div>
            <div class="testimonial-location">
                <i class="fas fa-map-marker-alt"></i> ${testimonial.location}
            </div>
            <div class="testimonial-medicines">
                <strong>Medicines used:</strong> ${testimonial.medicines.join(', ')}
            </div>
        </div>
    `).join('');
    
    updateTestimonialCarousel();
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % appData.testimonials.length;
    updateTestimonialCarousel();
}

function prevTestimonial() {
    currentTestimonial = currentTestimonial === 0 ? appData.testimonials.length - 1 : currentTestimonial - 1;
    updateTestimonialCarousel();
}

function updateTestimonialCarousel() {
    const track = document.getElementById('testimonials-track');
    if (track) {
        const translateX = -(currentTestimonial * (400 + 24)); // card width + margin
        track.style.transform = `translateX(${translateX}px)`;
    }
}

// Chatbot Functions
function initializeChatbot() {
    // Auto-expand chatbot after 3 seconds
    setTimeout(() => {
        if (!isChatbotExpanded) {
            toggleChatbot();
        }
    }, 3000);
}

function setupChatHandlers() {
    const chatInput = document.getElementById('chat-input');
    if (chatInput) {
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendChatMessage();
            }
        });
    }
}

function toggleChatbot() {
    const chatbotBody = document.getElementById('chatbot-body');
    const toggleIcon = document.getElementById('chatbot-toggle');
    
    if (isChatbotExpanded) {
        chatbotBody.style.display = 'none';
        toggleIcon.classList.remove('fa-chevron-down');
        toggleIcon.classList.add('fa-chevron-up');
    } else {
        chatbotBody.style.display = 'block';
        toggleIcon.classList.remove('fa-chevron-up');
        toggleIcon.classList.add('fa-chevron-down');
    }
    
    isChatbotExpanded = !isChatbotExpanded;
}

function sendChatMessage() {
    const chatInput = document.getElementById('chat-input');
    const message = chatInput.value.trim();
    
    if (!message) return;
    
    addChatMessage(message, 'user');
    chatInput.value = '';
    
    // Show typing indicator
    showTypingIndicator();
    
    // Generate bot response
    setTimeout(() => {
        hideTypingIndicator();
        const response = generateAdvancedBotResponse(message);
        addChatMessage(response.text, 'bot');
        
        // Show quick actions if provided
        if (response.quickActions) {
            showQuickActions(response.quickActions);
        }
    }, 1500);
}

function sendQuickMessage(message) {
    addChatMessage(message, 'user');
    
    setTimeout(() => {
        const response = generateAdvancedBotResponse(message);
        addChatMessage(response.text, 'bot');
    }, 1000);
}

function addChatMessage(message, sender) {
    const chatMessages = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${sender}-message`;
    
    const avatar = sender === 'bot' ? '🤖' : '👤';
    
    messageDiv.innerHTML = `
        <div class="message-avatar">${avatar}</div>
        <div class="message-content">
            <div class="message-text">${message}</div>
            <div class="message-time">${new Date().toLocaleTimeString()}</div>
        </div>
    `;
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    // Store in history
    chatHistory.push({ message, sender, timestamp: new Date() });
}

function generateAdvancedBotResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase();
    
    // Enhanced keyword-based responses with actions
    if (lowerMessage.includes('headache') || lowerMessage.includes('head pain')) {
        return {
            text: "For headaches, Ayurveda suggests checking your Vata dosha balance. Common remedies include Brahmi Ghrita for chronic headaches and Saraswatarishta for stress-related headaches. Would you like me to recommend specific medicines or help you find an expert?",
            quickActions: ['Find medicines for headache', 'Book expert consultation']
        };
    }
    
    if (lowerMessage.includes('digestion') || lowerMessage.includes('stomach') || lowerMessage.includes('acidity')) {
        return {
            text: "Digestive issues often indicate Agni (digestive fire) imbalance. Triphala Churna is our most recommended classical remedy for overall digestive health. For acidity, consider Avipattikar Churna. Shall I show you our symptom checker for personalized recommendations?",
            quickActions: ['View digestive medicines', 'Start symptom checker']
        };
    }
    
    if (lowerMessage.includes('stress') || lowerMessage.includes('anxiety')) {
        return {
            text: "Stress and anxiety are typically Vata-related disorders in Ayurveda. Ashwagandha is highly effective for stress management, while Brahmi Ghrita helps with anxiety and mental clarity. Our AI can provide personalized recommendations based on your specific symptoms.",
            quickActions: ['Find stress medicines', 'Consult mental health expert']
        };
    }
    
    if (lowerMessage.includes('book') || lowerMessage.includes('consultation') || lowerMessage.includes('doctor')) {
        return {
            text: "I can help you book a consultation with our qualified Ayurvedic practitioners. We have experts in various specializations including Panchakarma, Women's Health, and Mental Health. What type of consultation are you looking for?",
            quickActions: ['View all experts', 'Book video consultation']
        };
    }
    
    if (lowerMessage.includes('medicine') || lowerMessage.includes('drug') || lowerMessage.includes('treatment')) {
        return {
            text: "I can help you find the right Ayurvedic medicines from our database of 10,000+ authentic formulations. You can browse by category, search by symptoms, or use our AI-powered symptom checker for personalized recommendations.",
            quickActions: ['Browse medicine database', 'Use symptom checker']
        };
    }
    
    // Default responses with actions
    const defaultResponses = [
        {
            text: "I'm here to help with your Ayurvedic health queries. I can assist with medicine recommendations, symptom analysis, expert consultations, and classical text references. What would you like to explore?",
            quickActions: ['Medicine database', 'Symptom checker', 'Expert consultation']
        },
        {
            text: "Namaste! As your AI Ayurvedic assistant, I can provide personalized health recommendations based on classical texts and modern research. How can I help improve your health today?",
            quickActions: ['Find medicines', 'Health analysis', 'Book consultation']
        }
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

function showTypingIndicator() {
    const chatMessages = document.getElementById('chat-messages');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'chat-message bot-message typing-indicator';
    typingDiv.innerHTML = `
        <div class="message-avatar">🤖</div>
        <div class="message-content">
            <div class="typing-dots">
                <span></span><span></span><span></span>
            </div>
        </div>
    `;
    
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function hideTypingIndicator() {
    const typingIndicator = document.querySelector('.typing-indicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

function showQuickActions(actions) {
    const quickActionsContainer = document.querySelector('.chat-quick-actions');
    if (!quickActionsContainer) return;
    
    quickActionsContainer.innerHTML = actions.map(action => `
        <button class="quick-action" onclick="handleQuickAction('${action}')">${action}</button>
    `).join('');
}

function handleQuickAction(action) {
    const actionMap = {
        'Medicine database': () => showMedicines(),
        'Symptom checker': () => showSymptomChecker(),
        'Expert consultation': () => showExperts(),
        'Find medicines for headache': () => {
            showMedicines();
            document.getElementById('medicine-search').value = 'headache';
            filterMedicines();
        },
        'View digestive medicines': () => {
            showMedicines();
            document.getElementById('category-filter').value = 'Rasayana';
            filterMedicines();
        }
    };
    
    const actionFunction = actionMap[action];
    if (actionFunction) {
        actionFunction();
        sendQuickMessage(action);
    }
}

// Utility Functions
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    return '★'.repeat(fullStars) + 
           (hasHalfStar ? '☆' : '') + 
           '☆'.repeat(emptyStars);
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast--${type}`;
    toast.innerHTML = `
        <div class="toast-content">
            <i class="fas fa-${getToastIcon(type)}"></i>
            <span>${message}</span>
        </div>
        <button class="toast-close" onclick="this.parentElement.remove()">&times;</button>
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('toast--visible');
    }, 100);
    
    setTimeout(() => {
        toast.remove();
    }, 5000);
}

function getToastIcon(type) {
    const icons = {
        'success': 'check-circle',
        'error': 'exclamation-circle',
        'warning': 'exclamation-triangle',
        'info': 'info-circle'
    };
    return icons[type] || 'info-circle';
}

function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.target);
                animateNumber(entry.target, target);
            }
        });
    });
    
    statNumbers.forEach(stat => observer.observe(stat));
}

function animateNumber(element, target) {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current).toLocaleString();
    }, 20);
}

function setupModalHandlers() {
    // Close modals on outside click
    [searchModal, medicineModal, bookingModal].forEach(modal => {
        if (modal) {
            modal.addEventListener('click', function(e) {
                if (e.target === this) {
                    this.classList.add('hidden');
                }
            });
        }
    });
    
    // Close buttons
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', function() {
            this.closest('.search-modal, .medicine-modal, .booking-modal').classList.add('hidden');
        });
    });
}

function setupKeyboardShortcuts() {
    document.addEventListener('keydown', function(e) {
        // Escape key to close modals
        if (e.key === 'Escape') {
            document.querySelectorAll('.search-modal, .medicine-modal, .booking-modal').forEach(modal => {
                modal.classList.add('hidden');
            });
        }
        
        // Ctrl+K to open search
        if (e.ctrlKey && e.key === 'k') {
            e.preventDefault();
            openSearchModal();
        }
    });
}

// Theme Functions
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-color-scheme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-color-scheme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update theme icon
    const themeIcon = document.querySelector('.theme-toggle i');
    if (themeIcon) {
        themeIcon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
}

// Initialize theme
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = savedTheme || (prefersDark ? 'dark' : 'light');
    
    document.documentElement.setAttribute('data-color-scheme', theme);
    
    const themeIcon = document.querySelector('.theme-toggle i');
    if (themeIcon) {
        themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
}

// Additional utility functions for medicine modal actions
function addToFavorites() {
    showToast('Medicine added to favorites!', 'success');
}

function shareMedicine() {
    if (navigator.share) {
        navigator.share({
            title: 'AyurVeda AI Medicine Recommendation',
            text: 'Check out this Ayurvedic medicine recommendation',
            url: window.location.href
        });
    } else {
        navigator.clipboard.writeText(window.location.href);
        showToast('Link copied to clipboard!', 'success');
    }
}

function consultExpert() {
    medicineModal.classList.add('hidden');
    showExperts();
}

// Navigation helper functions
function showSymptomChecker() {
    showSection('symptom-checker');
    updateActiveNav(document.querySelector('[href="#symptom-checker"]'));
}

function showMedicines() {
    showSection('medicines');
    updateActiveNav(document.querySelector('[href="#medicines"]'));
}

function showExperts() {
    showSection('experts');
    updateActiveNav(document.querySelector('[href="#experts"]'));
}

function showTexts() {
    showSection('texts');
    updateActiveNav(document.querySelector('[href="#texts"]'));
}

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', initializeTheme);

// Global error handler
window.addEventListener('error', function(e) {
    console.error('Application error:', e.error);
    showToast('An error occurred. Please refresh the page.', 'error');
});

// Service Worker registration for PWA features
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Service worker would be registered here in production
        console.log('Application ready for service worker registration');
    });
}

// Export functions for global access
window.showSymptomChecker = showSymptomChecker;
window.showMedicines = showMedicines;
window.showExperts = showExperts;
window.showTexts = showTexts;
window.showMedicineDetails = showMedicineDetails;
window.showBookingModal = showBookingModal;
window.toggleSymptom = toggleSymptom;
window.nextStep = nextStep;
window.previousStep = previousStep;
window.restartWizard = restartWizard;
window.showResultTab = showResultTab;
window.nextBookingStep = nextBookingStep;
window.previousBookingStep = previousBookingStep;
window.confirmBooking = confirmBooking;
window.selectTimeSlot = selectTimeSlot;
window.filterExperts = filterExperts;
window.clearAllFilters = clearAllFilters;
window.toggleChatbot = toggleChatbot;
window.sendChatMessage = sendChatMessage;
window.sendQuickMessage = sendQuickMessage;
window.handleQuickAction = handleQuickAction;
window.nextTestimonial = nextTestimonial;
window.prevTestimonial = prevTestimonial;
window.performQuickSearch = performQuickSearch;
window.handleSearchResult = handleSearchResult;
window.selectSuggestion = selectSuggestion;
window.toggleTheme = toggleTheme;
window.addToFavorites = addToFavorites;
window.shareMedicine = shareMedicine;
window.consultExpert = consultExpert;

console.log('AyurVeda AI Application loaded successfully!');