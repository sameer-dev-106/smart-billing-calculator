// ========================================
// TRANSLATIONS - Multi-language Support
// ========================================
const translations = {
    hindi: {
        shopModalTitle: 'अपने दुकान का नाम दर्ज करें',
        shopSaveBtn: 'सहेजें',
        billModalTitle: 'बिल बनाएं',
        customerPlaceholder: 'ग्राहक का नाम *',
        pehelKaPlaceholder: 'पहले का (वैकल्पिक)',
        jamaPlaceholder: 'जमा (वैकल्पिक)',
        billCreateBtn: 'बिल बनाएं',
        itemCountLabel: 'आइटम:',
        billBtn: 'बिल',
        newBillBtn: 'नया बिल',
        printBillBtn: 'प्रिंट',
        settingsTitle: 'सेटिंग्स',
        languageLabel: 'भाषा चुनें:',
        shopNameLabel: 'दुकान का नाम:',
        updateBtn: 'अपडेट करें',
        closeBtn: 'बंद करें',
        cancelBtn: 'रद्द करें',
        confirmBtn: 'पुष्टि करें',
        kulRakamLabel: 'कुल रकम:',
        pehelKaLabel: 'पहले का:',
        jamaLabel: 'जमा:',
        kulBakayaLabel: 'कुल बकाया:',
        alertEnterShopName: 'कृपया दुकान का नाम दर्ज करें',
        alertDivideByZero: '0 से भाग नहीं कर सकते',
        alertEnterNumber: 'कृपया संख्या दर्ज करें',
        alertAddItems: 'कृपया पहले आइटम जोड़ें',
        alertSkipItemName: "आइटम के नाम छोड़े जा रहे हैं। बिल डिफ़ॉल्ट आइटम नामों के साथ जेनरेट किया जाएगा।",
        alertPressEqualFirst: 'कृपया पहले "=" दबाकर बिल फाइनल करें',
        alertEnterCustomerName: 'कृपया ग्राहक का नाम दर्ज करें',
        alertShopNameUpdated: 'दुकान का नाम अपडेट हो गया',
        alertLanguageUpdated: 'भाषा हिन्दी में बदल दी गई है',
        alertShopNameAndLanguageUpdated: 'दुकान का नाम और भाषा अपडेट हो गई है',
        equalConfirmModalTitle: 'बिल फाइनल करें?',
        equalConfirmModalMsg: `= दबाने पर बिल फाइनल हो जाएगा।<br> बाद में आइटम बदले नहीं जा सकेंगे।`,
        newBillConfirmTitle: 'नया बिल शुरू करें?',
        newBillConfirmMsg: 'मौजूदा बिल साफ हो जाएगा। यह प्रक्रिया वापस नहीं होगी।',
    },
    hinglish: {
        shopModalTitle: 'Apni dukaan ka naam enter karo',
        shopSaveBtn: 'Save karo',
        billModalTitle: 'Bill banao',
        customerPlaceholder: 'Customer ka naam *',
        pehelKaPlaceholder: 'Pehle ka (optional)',
        jamaPlaceholder: 'Jama (optional)',
        billCreateBtn: 'Bill banao',
        itemCountLabel: 'Items:',
        billBtn: 'Bill',
        newBillBtn: 'Naya bill',
        printBillBtn: 'Print',
        settingsTitle: 'Settings',
        languageLabel: 'Language select karo:',
        shopNameLabel: 'Shop ka naam:',
        updateBtn: 'Update karo',
        closeBtn: 'Band karo',
        cancelBtn: 'Cancel karo',
        confirmBtn: 'Confirm karo',
        kulRakamLabel: 'Kul rakam:',
        pehelKaLabel: 'Pehle ka:',
        jamaLabel: 'Jama:',
        kulBakayaLabel: 'Kul bakaya:',
        alertEnterShopName: 'Please shop ka naam dalo',
        alertDivideByZero: 'Zero se divide nahi hota',
        alertEnterNumber: 'Koi number dalo pehle',
        alertAddItems: 'Pehle items add karo',
        alertSkipItemName: "Item names skip ho rahe hain. Bill default item names ke saath banega.",
        alertPressEqualFirst: 'Please pehle "=" dabao phir bill banao',
        alertEnterCustomerName: 'Customer ka naam dalo',
        alertShopNameUpdated: 'Shop ka naam update ho gaya',
        alertLanguageUpdated: 'Language hinglish me update ho gayi',
        alertShopNameAndLanguageUpdated: "Shop name aur language dono update ho gaye",
        equalConfirmModalTitle: 'Bill finalize kare?',
        equalConfirmModalMsg: `= dabane par bill final ho jayega.<br> Baad me items edit nahi ho payenge.`,
        newBillConfirmTitle: 'Naya bill shuru kare?',
        newBillConfirmMsg: 'Current bill clear ho jayega. Ye action undo nahi hoga.',
    },
    english: {
        shopModalTitle: 'Enter Your Shop Name',
        shopSaveBtn: 'Save',
        billModalTitle: 'Create Bill',
        customerPlaceholder: 'Customer Name *',
        pehelKaPlaceholder: 'Previous Balance (optional)',
        jamaPlaceholder: 'Payment (optional)',
        billCreateBtn: 'Create Bill',
        itemCountLabel: 'Items:',
        billBtn: 'Bill',
        newBillBtn: 'New Bill',
        printBillBtn: 'Print',
        settingsTitle: 'Settings',
        languageLabel: 'Choose Language:',
        shopNameLabel: 'Shop Name:',
        updateBtn: 'Update',
        closeBtn: 'Close',
        cancelBtn: 'Cancel',
        confirmBtn: 'Confirm',
        kulRakamLabel: 'Total Amount:',
        pehelKaLabel: 'Previous Balance:',
        jamaLabel: 'Payment:',
        kulBakayaLabel: 'Final Balance:',
        alertEnterShopName: 'Please enter shop name',
        alertDivideByZero: 'Cannot divide by zero',
        alertEnterNumber: 'Enter a number first',
        alertAddItems: 'Please add items first',
        alertSkipItemName: "Item names are being skipped. Bill will be generated with default item names.",
        alertPressEqualFirst: 'Please press "=" first to finalize the bill',
        alertEnterCustomerName: 'Please enter customer name',
        alertShopNameUpdated: 'Shop name updated',
        alertLanguageUpdated: 'Language changed to Engilsh',
        alertShopNameAndLanguageUpdated: "Shop name and language updated",
        equalConfirmModalTitle: 'Finalize Bill?',
        equalConfirmModalMsg: `Pressing = will finalize the bill.<br> Items cannot be edited later.`,
        newBillConfirmTitle: 'Naya bill shuru kare?',
        newBillConfirmMsg: 'Current bill clear ho jayega. Ye action undo nahi hoga.',
    }
};

// ========================================
// DOM ELEMENTS - All elements stored in variables
// ========================================

// Screens
const calculatorScreen = document.querySelector('.calculator-screen');
const billScreen = document.querySelector('.bill-screen');
const historyScreen = document.querySelector('.history-screen');

// Modals
const calcHistoryModal = document.querySelector('.calc-history-modal');
const shopNameModal = document.querySelector('.shop-name-modal');
const billInputModal = document.querySelector('.bill-input-modal');
const settingsModal = document.querySelector('.settings-modal');
const itemNameModal = document.querySelector('.item-name-modal');
const confirmModal = document.querySelector('.confirm-modal');
const infoModal = document.querySelector('.info-modal');

// Display Elements
const shopNameDisplay = document.querySelector('.shop-name-display');
const billShopName = document.querySelector('.bill-shop-name');
const customerBillName = document.querySelector('.customer-name');
const expressionDisplay = document.querySelector('.expression');
const billDateDisplay = document.querySelector('.bill-date');
const billItemsContainer = document.querySelector('.bill-items');
const itemNameList = document.querySelector('.item-name-list');

// Calculator Display Elements
const calcKulRakamValue = document.querySelector('.calc-kul-rakam-value');
const calcItemsValue = document.querySelector('.calc-items-value');
const calcKulRakamLabel = document.querySelector('.calc-kul-rakam-label');
const calcItemsLabel = document.querySelector('.calc-items-label');

// Bill Display Elements
const billItemsValue = document.querySelector('.bill-items-value');
const billItemsLabel = document.querySelector('.bill-items-label');
const kulRakamValue = document.querySelector('.kul-rakam-value');
const pehelKaValue = document.querySelector('.pehel-ka-value');
const jamaValue = document.querySelector('.jama-value');
const kulBakayaValue = document.querySelector('.kul-bakaya-value');
const kulRakamLabel = document.querySelector('.kul-rakam-label');
const pehelKaLabel = document.querySelector('.pehel-ka-label');
const jamaLabel = document.querySelector('.jama-label');
const kulBakayaLabel = document.querySelector('.kul-bakaya-label');

// Input Fields
const shopNameInput = document.querySelector('.shop-name-input');
const customerNameInput = document.querySelector('.customer-name-input');
const pehelKaInput = document.querySelector('.pehel-ka-input');
const jamaInput = document.querySelector('.jama-input');
const languageSelect = document.querySelector('.language-select');
const shopNameEdit = document.querySelector('.shop-name-edit');

// Buttons
const numberButtons = document.querySelectorAll('.calc-btn.num');
const operatorButtons = document.querySelectorAll('.calc-btn.operator');
const equalButton = document.querySelector('.calc-btn.equal');
const clearButton = document.querySelector('.calc-btn.clear');
const deleteButton = document.querySelector('.calc-btn.delete');
const billButton = document.querySelector('.calc-btn.bill');
const saveShopNameButton = document.querySelector('.save-shop-name');
const confirmBillButton = document.querySelector('.confirm-bill');
const cancelBillButton = document.querySelector('.cancel-bill');
const saveItemsBtn = document.querySelector('.save-items-btn');
const skipItemsBtn = document.querySelector('.skip-items-btn');
const newBillButton = document.querySelector('.new-bill-btn');
const settingsButton = document.querySelector('.settings-btn');
const openBillHistoryButton = document.querySelector('.bill-history-btn');
const closeBillHistoryButton = document.querySelector('.close-bill-history');
const openCalcHistoryButton = document.querySelector('.calc-history-btn');
const closeCalcHistoryButton = document.querySelector('.close-calc-history');
const closeSettingsButton = document.querySelector('.close-settings');
const updateSettingsButton = document.querySelector('.update-settings');
const confirmBtn = document.querySelector('.confirm-btn');
const cancelBtn = document.querySelector('.cancel-btn');
const infoOkBtn = document.querySelector('.info-ok-btn');

// Modal Title Elements
const shopModalTitle = document.querySelector('.shop-modal-title');
const billModalTitle = document.querySelector('.bill-modal-title');
const settingsTitle = document.querySelector('.settings-title');
const languageLabel = document.querySelector('.language-label');
const shopNameLabel = document.querySelector('.shop-name-label');
const confirmModalTitle = document.querySelector('.confirm-modal-title');

// Equal Confirm Modal Message
const confirmModalMsg = document.querySelector('.confirm-modal-msg');
const infoMsg = document.querySelector('.info-modal-msg');

// ========================================
// STATE MANAGEMENT
// ========================================
const appState = {
    shopName: "",
    language: "hindi"
    };

const calc = {
    currentNumber: "",
    currentTotal: 0,
    currentOperator: null,
    items: [],
    justCalculated: false
    };

    const OPERATORS = ["+", "-", "×", "÷"];

    // edit expression variables
    let expression = "";
    let newExpression = "";
    let cursoreIndex = 0;

    // Calculator Container
    let calcHistory = [];

    // Bill History Container
    let billHistory = [];

    // LocalStorage key for Calculator history
    const CALC_HISTORY_KEY = "smartBillingCalcHistory";

    // LocalStorage key for BIll history
    const BILL_STORAGE_KEY = "smartBillingBills"


// ========================================
// INITIALIZATION
// ========================================
function init() {
    loadState();
    loadCalcHistory();
    loadBillHistory();

    applyShopName();

    // Show shop name modal if no shop name exists
    if (!appState.shopName) {
        shopNameModal.classList.add('active');
    }

    applyLanguage();
    updateDisplay();
}

// ========================================
// STATE PERSISTENCE
// ========================================
function loadState() {
    try {
        const saved = JSON.parse(localStorage.getItem('smartBillingState')) || { };
        appState.shopName = saved.shopName || "";
        appState.language = saved.language || "hindi";
    } catch (error) {
        console.error('Error loading state:', error);
    }
}

function saveAppState() {
    try {
        localStorage.setItem('smartBillingState', JSON.stringify(appState));
    } catch (error) {
        console.error('Error saving state:', error);
    }
}

function loadCalcHistory() {
    try {
        calcHistory = JSON.parse(
            localStorage.getItem(CALC_HISTORY_KEY)
        ) || [];
    } catch (e) {
        calcHistory = [];
    }
}

function saveCalcHistroy() {
    localStorage.setItem(
        CALC_HISTORY_KEY,
        JSON.stringify(calcHistory)
    );
}

function loadBillHistory() {
    try {
        billHistory = JSON.parse(
            localStorage.getItem(BILL_STORAGE_KEY)
        ) || [];
    } catch (e) {
        billHistory = [];
    }
}

function saveBillHistory() {
    localStorage.setItem(
        BILL_STORAGE_KEY,
        JSON.stringify(billHistory)
    );
}

// ========================================
// SHOP NAME MANAGEMENT
// ========================================
function saveShopName() {
    const name = shopNameInput.value.trim();

    if (!name) {
        openInfoPopup(translations[appState.language].alertEnterShopName);
    return;
    }

    appState.shopName = name;
    saveAppState();
    applyShopName();
    shopNameModal.classList.remove('active');
}

function applyShopName() {
    const name = appState.shopName || "Smart Billing Calculator";
    shopNameDisplay.textContent = name;
    billShopName.textContent = name;
}

// ========================================
// CALCULATOR CORE LOGIC
// ========================================
function applyOperation(a, b, op) {
    b = Number(b);

    switch (op) {
        case "+": return a + b;
        case "-": return a - b;
        case "×": return a * b;
        case "÷":
            if (b === 0) {
                openInfoPopup(translations[appState.language].alertDivideByZero);
                return a;
            }
            return a / b;
        default: return a;
    }
}

function parseExpressionToItems(exre) {
    const items = [];
    let currentNumber = "";
    let currentOp = "";

    for (let i = 0; i < exre.length; i++) {
        const char = exre[i];

        if (OPERATORS.includes(char)) {
            if (currentNumber !== "") {
                items.push({
                    id: items.length + 1,
                    name: "",
                    op: currentOp,
                    value: Number(currentNumber)
                });
                currentNumber = "";
            }

            currentOp = char;
        } else {
            currentNumber += char;
        }
    }

    if (currentNumber !== "") {
        items.push({
            id: items.length + 1,
            name: "",
            op: currentOp,
            value: Number(currentNumber)
        });
    }

    return items;
}

function calculateLiveTotal() {
    if (!expression) return 0;

    const parsedItems = parseExpressionToItems(expression);
    if (parsedItems.length === 0) return 0;

    let total = 0;

    parsedItems.forEach(item => {
        if (item.op === "") {
            total = item.value;
        } else {
            total = applyOperation(
                total,
                item.value,
                item.op
            );
        }
    });

    return total;
}

// ========================================
// CALCULATOR ACTIONS
// ========================================
function appendNumber(num) {
    // Reset after calculation
    if (calc.justCalculated) {
        calc.currentTotal = 0;
        calc.items = [];
        calc.currentOperator = null;
        currentNumber = "";
        calc.justCalculated = false;
        expression = "";
    }

    // Prevent multiple decimal points
    if (num === "." && calc.currentNumber.includes(".")) return;

    calc.currentNumber += num;
    expression += num;
    updateDisplay();
}

function appendOperator(op) {
    // Continue with result after calculation
    if (calc.justCalculated) {
        calc.currentNumber = calc.currentTotal.toString();
        calc.currentTotal = 0;
        calc.items = [];
        calc.justCalculated = false;
        expression = calc.currentNumber;
    }

    // Need at least one number
    if (expression === "") return;
    // if (calc.currentNumber === "" && calc.items.length === 0) return;

    if (calc.currentNumber !== "") {
        // First number becomes total
        if (calc.currentOperator === null) {
            calc.currentTotal = Number(calc.currentNumber);
        } else {
            // Calculate with previous operator
            calc.currentTotal = applyOperation(
                calc.currentTotal,
                calc.currentNumber,
                calc.currentOperator
            );
        }

        // Store this calculation step
        calc.items.push({
            op: calc.currentOperator || "",
            value: Number(calc.currentNumber)
        });

        calc.currentNumber = "";
    }

    const lastChar = expression.slice(-1);

    if (OPERATORS.includes(lastChar)) {
        // same operator → do nothing
        if (lastChar === op) return;

        // different operator → replace
        expression = expression.slice(0, -1) + op;
    } else {
        expression += op;
        
    }

    calc.currentOperator = op;
    calc.justCalculated = false;
    updateDisplay();
}

function calculateEqual() {

    const parsedItems = parseExpressionToItems(expression);

    if (parsedItems.length === 0) return;

    calc.items = parsedItems;
    calc.currentTotal = 0;

// Calculate final result
    calc.items.forEach(item => {
        if (item.op === "") {
            calc.currentTotal = item.value;
        } else {
            calc.currentTotal = applyOperation(
                calc.currentTotal,
                item.value,
                item.op
            );
        }
    })

    calc.currentNumber = "";
    calc.currentOperator = null;
    calc.justCalculated = true;

    newExpression = expression;
    expression = formatNumber(calc.currentTotal);
    updateDisplay(true);

    // ======================
    // SAVE CALCULATOR HISTORY
    // ======================
    const calcHistoryItem = {
        id: "CALC_" + Date.now(),
        experssion: newExpression,
        total: calc.currentTotal,
        itemCount: calc.items.length,
        time: new Date().toLocaleDateString('hi-IN')
    }

    calcHistory.push(calcHistoryItem);
    saveCalcHistroy();
}

function clearAll() {
    calc.currentNumber = "";
    calc.currentTotal = 0;
    calc.currentOperator = null;
    calc.items = [];
    calc.justCalculated = false;
    expression = "";
    updateDisplay();
}

function backspace() {
    if (!expression) return;

    expression = expression.slice(0,-1);

    calc.currentNumber = "";
    calc.currentOperator = null;
    calc.currentTotal = 0;
    calc.justCalculated = false;

    if (!expression) {
        updateDisplay();
        return;
    }

    const parsedItems =parseExpressionToItems(expression);
    calc.items = parsedItems;

    parsedItems.forEach(item => {
        if (item.op === "") {
            calc.currentTotal = item.value;
        } else {
            calc.currentTotal = applyOperation(
                calc.currentTotal,
                item.value,
                item.op
            );
        }
    });

    const lastChar = expression[expression.length - 1];

    if (!OPERATORS.includes(lastChar)) {
        calc.currentNumber = parsedItems[parsedItems.length -1].value.toString();
        calc.items.pop();
    } else {
        calc.currentOperator = lastChar;
    }

    updateDisplay();
}

// ========================================
// RENDER DISPLAY
// ========================================
function renderExpression() {
    expressionDisplay.textContent = expression || "0";
}

function renderBillHistory() {
    const list = document.querySelector('.history-list');
    list.innerHTML = "";
    
    billHistory.forEach(bill => {
        const div = document.createElement('div');
        div.className = "history-item";

        div.innerHTML = `
            <div class="history-name-container">
                <span class="name">${bill.customerName}</span>
                <span>${bill.date} ${bill.time}</span>
            </div>
            <div class="amount">${bill.summary.kulBakaya}</div>
        `;

        list.appendChild(div);
    });
}

function renderCalcHistory() {
    const list = document.querySelector('.calc-history-list');
    list.innerHTML = "";

    calcHistory.forEach(item => {
        const div = document.createElement("div");
        div.className = "calc-history-item";

        div.innerHTML = `
            <div class="calc-history-exp">
                ${item.experssion}
            </div>
            <div class="calc-history-total">
                = ${item.total}
            </div>
        `;

        div.ondblclick = () => {
            expression = item.expression;
            calc.currentTotal = item.total;
            calc.items = parseExpressionToItems(expression);
            calc.justCalculated = true;
            updateDisplay(true);
        };

        list.appendChild(div);
    });
}

// ========================================
// DISPLAY UPDATES
// ========================================
function formatNumber(num) {
    return num % 1 === 0 ? num.toString() : num.toFixed(2);
}

function updateDisplay(isEqual = false) {
    if (isEqual) {
        expressionDisplay.textContent = formatNumber(calc.currentTotal);
    } else {
        expressionDisplay.textContent = expression || "0";
    }

    // Update totals and item count
    if (calc.justCalculated) {
        calcKulRakamValue.textContent = formatNumber(calc.currentTotal);
    } else {
        const liveTotal = calculateLiveTotal();
        calcKulRakamValue.textContent = formatNumber(liveTotal);
    }

    calcItemsValue.textContent = calc.items.filter(i => i.value !== 0).length;

    // Update shop name if not set
    if (!appState.shopName) {
        applyShopName();
    }
}

function openInfoPopup(message) {
    infoMsg.textContent = message;
    infoModal.classList.add('active');
}

function openNewBillConfirm() {
    const t = translations[appState.language];
    confirmModalTitle.textContent = t.newBillConfirmTitle;
    confirmModalMsg.textContent = t.newBillConfirmMsg;

    // RESET first
    confirmBtn.onclick = null;
    cancelBtn.onclick = null;

    // SET new behavior
    confirmBtn.onclick = () => {
        newBill();
        confirmModal.classList.remove('active');
    };

    cancelBtn.onclick = () => {
        confirmModal.classList.remove('active')
    }

    confirmModal.classList.add('active')
}

function equalConfirm() {
    const t = translations[appState.language];
    confirmModalTitle.textConten = t.equalConfirmModalTitle;
    confirmModalMsg.innerHTML = t.equalConfirmModalMsg;

    // RESET first
    confirmBtn.onclick = null;
    cancelBtn.onclick = null;

    // SET new behavior
    confirmBtn.onclick = () => {
        calculateEqual();
        confirmModal.classList.remove('active');
    };

    cancelBtn.onclick = () => {
        confirmModal.classList.remove('active')
    }

    confirmModal.classList.add('active')
}

// ========================================
// ITEMS NAME MANAGEMENT
// ========================================
function openItemNameScreen() {
    itemNameList.innerHTML = "";

    calc.items.forEach((item, index) => {
        const row = document.createElement("div");
        row.className = "item-name-row";

        row.innerHTML = `
            <div class="input-container-box">
                <span>${index + 1}.</span>
                <input 
                    class="item-name-input"
                    type="text"
                    placeholder="Item name"
                    data-index="${index}"
                    value="${item.name || ""}"
                >
            </div>
            <span>${item.op} ${formatNumber(item.value)}</span>
        `;

        itemNameList.appendChild(row);
    });

    itemNameModal.classList.add("active");
}

function saveItemNames() {
    const inputs = document.querySelectorAll('.item-name-input')

    inputs.forEach(input => {
        const index = Number(input.dataset.index);
        calc.items[index].name = input.value.trim();
    });
}

// ========================================
// BILL MANAGEMENT
// ========================================
function openBillModal() {
    if (calc.currentNumber !== "") {
        openInfoPopup(translations[appState.language].alertPressEqualFirst);
        return;
    }
    
    if (calc.items.length === 0) {
        openInfoPopup(translations[appState.language].alertAddItems);
        return;
    }
    
    billInputModal.classList.add('active');
}

function createBill() {
    const customerName = customerNameInput.value.trim();

    const pehelKa = parseFloat(pehelKaInput.value) || 0;
    const jama = parseFloat(jamaInput.value) || 0;
    const kulRakam = calc.currentTotal;
    const kulBakaya = kulRakam + pehelKa - jama;

    // Update bill header
    billShopName.textContent = appState.shopName;
    customerBillName.textContent = customerName;

    // Set date and time
    const now = new Date();
    const dateStr = now.toLocaleDateString('hi-IN');
    const timeStr = now.toLocaleTimeString('hi-IN');
    billDateDisplay.textContent = `${dateStr} ${timeStr}`;

    // Generate bill items HTML
    let itemHtml = "";
    calc.items.forEach((item, i) => {
        const itemName = item.name && item.name.length > 0 ? item.name : `Item ${i + 1}`;
    itemHtml += `
        <div class="bill-item">
            <div class="bill-item-name">
                <span class="item-number">${i + 1}.</span>
                <span class="item-name">${itemName}</span>
            </div>
            <span class="item-amount">${item.op} ${formatNumber(item.value)}</span>
        </div>
        `;
    });
    billItemsContainer.innerHTML = itemHtml;

    // Update item count
    billItemsValue.textContent = calc.items.filter(i => i.value !== 0).length;

    // Update summary
    kulRakamValue.textContent = formatNumber(kulRakam);
    pehelKaValue.textContent = formatNumber(pehelKa);
    jamaValue.textContent = formatNumber(jama);
    kulBakayaValue.textContent = formatNumber(kulBakaya);

    // ======================
    // SAVE BILL TO HISTORY
    // ======================
    const billObject = {
        id: "BILL_" + Date.now(),

        date: dateStr,
        time: timeStr,

        shop: {
            shopName: appState.shopName
        },

        customerName: customerName,

        items: calc.items.map(item => ({
            name: item.name || "",
            op: item.op,
            value: item.value
        })),

        summary: {
            kulRakam: kulRakam,
            pehelKa: pehelKa,
            jama: jama,
            kulBakaya: kulBakaya
        }
    };
    billHistory.push(billObject);
    saveBillHistory();

    // Switch to bill screen
    billInputModal.classList.remove('active');
    calculatorScreen.classList.remove('active');
    billScreen.classList.add('active');
}

function newBill() {
    // Clear inputs
    customerNameInput.value = '';
    pehelKaInput.value = '';
    jamaInput.value = '';

    // Reset calculator
    clearAll();
    expression = "";

    // Switch to calculator screen
    billScreen.classList.remove('active');
    calculatorScreen.classList.add('active');
}

// ========================================
// BILL HISTORY MANAGEMENT
// ========================================
function openBillHistory() {
    renderBillHistory();
    calculatorScreen.classList.remove('active');
    billScreen.classList.remove('active');
    settingsModal.classList.remove('active');
    historyScreen.classList.add('active');
}

function closeBillHistory() {
    historyScreen.classList.remove('active')
    calculatorScreen.classList.add('active')
}

function openCalcHistory() {
    renderCalcHistory();
    settingsModal.classList.remove('active');
    calcHistoryModal.classList.add('active');
}

function closeCalcHistory() {
    calcHistoryModal.classList.remove('active')
}

// ========================================
// SETTINGS MANAGEMENT
// ========================================
function openSettings() {
    shopNameEdit.value = appState.shopName;
    languageSelect.value = appState.language;
    settingsModal.classList.add('active');
}

function closeSettings() {
    settingsModal.classList.remove('active');
}

function updateSettings() {
    const prevName = appState.shopName;
    const prevLanguage = appState.language;

    const newName = shopNameEdit.value.trim();
    const newLanguage = languageSelect.value;

    const nameChanged = newName !== "" && newName !== prevName;
    const languageChanged = newLanguage !== prevLanguage;

    if (!nameChanged && !languageChanged) {
        settingsModal.classList.remove('active');
        return;
    }

    // Apply change
    if (nameChanged) {
        appState.shopName = newName;
        applyShopName();
    }

    if (languageChanged) {
        appState.language = newLanguage;
        applyLanguage();
    }

    saveAppState();
    settingsModal.classList.remove('active');

    if (nameChanged && languageChanged) {
        openInfoPopup(translations[appState.language].alertShopNameAndLanguageUpdated);
        return;
    }

    if (nameChanged) {
        openInfoPopup(translations[appState.language].alertShopNameUpdated)
        return;
    }

    if (languageChanged) {
        openInfoPopup(translations[appState.language].alertLanguageUpdated);
        return;
    }
}


// ========================================
// LANGUAGE MANAGEMENT
// ========================================
function applyLanguage() {
    const t = translations[appState.language];

    // Modal titles
    shopModalTitle.textContent = t.shopModalTitle;
    billModalTitle.textContent = t.billModalTitle;
    settingsTitle.textContent = t.settingsTitle;

    // Labels
    calcKulRakamLabel.textContent = t.kulRakamLabel;
    calcItemsLabel.textContent = t.itemCountLabel;
    billItemsLabel.textContent = t.itemCountLabel;
    kulRakamLabel.textContent = t.kulRakamLabel;
    pehelKaLabel.textContent = t.pehelKaLabel;
    jamaLabel.textContent = t.jamaLabel;
    kulBakayaLabel.textContent = t.kulBakayaLabel;
    languageLabel.textContent = t.languageLabel;
    shopNameLabel.textContent = t.shopNameLabel;

    // Placeholders
    customerNameInput.placeholder = t.customerPlaceholder;
    pehelKaInput.placeholder = t.pehelKaPlaceholder;
    jamaInput.placeholder = t.jamaPlaceholder;

    // Confrim Modal Buttons
    confirmBtn.textContent = t.confirmBtn;
    cancelBtn.textContent = t.cancelBtn;

    // Buttons
    saveShopNameButton.textContent = t.shopSaveBtn;
    confirmBillButton.textContent = t.billCreateBtn;
    cancelBillButton.textContent = t.cancelBtn;
    newBillButton.textContent = t.newBillBtn;
    updateSettingsButton.textContent = t.updateBtn;
    closeSettingsButton.textContent = t.closeBtn;
    billButton.textContent = t.billBtn;
    document.querySelector('.print-btn').textContent = t.printBillBtn;

    updateDisplay();
}

// ========================================
// EVENT LISTENERS
// ========================================

// Number buttons
numberButtons.forEach(btn => {
    btn.addEventListener('click', () => appendNumber(btn.value));
});

// Operator buttons
operatorButtons.forEach(btn => {
    btn.addEventListener('click', () => appendOperator(btn.value));
});

// Popup button
infoOkBtn.addEventListener('click', () => {
    infoModal.classList.remove('active');
});

// Calculator control buttons
equalButton.addEventListener('click', () => {
    if (!expression) {
        openInfoPopup(translations[appState.language].alertEnterNumber);
        return
    }

    const lastChar = expression.slice(-1)

    if (OPERATORS.includes(lastChar)){
        openInfoPopup(translations[appState.language].alertEnterNumber);
        return;
    } 

    equalConfirm();
});

clearButton.addEventListener('click', clearAll);
deleteButton.addEventListener('click', backspace);

// Shop name
saveShopNameButton.addEventListener('click', saveShopName);

// Item input name
saveItemsBtn.addEventListener("click", () => {
    saveItemNames();
    itemNameModal.classList.remove("active")
    createBill();
});

skipItemsBtn.addEventListener("click", () => {
    openInfoPopup(translations[appState.language].alertSkipItemName);

    infoOkBtn.onclick = () => {
        infoModal.classList.remove("active");
        itemNameModal.classList.remove("active");
        createBill();
    }
})

// Bill creation
billButton.addEventListener('click', openBillModal);
confirmBillButton.addEventListener('click', () => {
    const customerName = customerNameInput.value.trim();

    if (!customerName) {
        openInfoPopup(translations[appState.language].alertEnterCustomerName);
        return;
    }

    billInputModal.classList.remove('active');
    openItemNameScreen();
});
cancelBillButton.addEventListener('click', () => {
    billInputModal.classList.remove('active');
});
newBillButton.addEventListener('click', openNewBillConfirm);

// Calculator history 
openCalcHistoryButton.addEventListener('click', openCalcHistory);
closeCalcHistoryButton.addEventListener('click', closeCalcHistory);

// Bill history 
openBillHistoryButton.addEventListener('click', openBillHistory);
closeBillHistoryButton.addEventListener('click', closeBillHistory);

// Settings
settingsButton.addEventListener('click', openSettings);
closeSettingsButton.addEventListener('click', closeSettings);
updateSettingsButton.addEventListener('click', updateSettings);

// Initialize app
init();
