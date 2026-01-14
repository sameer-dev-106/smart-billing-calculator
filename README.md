# Smart Billing Calculator

🔗 Live App:  
https://sameer-dev-106.github.io/smart-billing-calculator/

A mobile-first smart billing calculator built for small shopkeepers.

This app solves the biggest problem of normal calculators:  
you cannot verify what items were added to reach the final total.

Smart Billing Calculator separates calculation and billing so every shopkeeper  
can confidently generate a correct and transparent bill.

---

## 🧠 What this app does

Normal calculators only show one final number.  
In real shops this causes:
- mistakes
- confusion
- arguments
- no way to verify the bill

Smart Billing Calculator fixes this by:
- tracking each entered value as a bill item
- using a real calculator engine internally
- showing a full bill before printing
- supporting previous balance (pehle ka) and payment (jama)
- preventing accidental actions using confirmation popups
- saving user preferences using localStorage

---

## 📱 App Flow

### 1️⃣ First Time Setup
User enters shop name, which is saved permanently.

---

### 2️⃣ Calculator Mode
User enters numbers like a real physical calculator.

The screen shows:
- live expression
- running total (Kul Rakam)
- item count

Totals update naturally as operators are used,  
just like calculators used in real shops.

---

### 3️⃣ Safe Finalization
- Pressing `=` asks for confirmation before finalizing the bill
- Accidental key presses do not lock the bill
- Users are clearly informed before starting a new bill

---

### 4️⃣ Create Bill
When user clicks **Bill**, a form opens asking:
- Customer Name (required)
- Pehle ka (optional)
- Jama (optional)

Billing is blocked unless calculation is finalized correctly.

---

### 5️⃣ Bill Mode
The app shows a receipt-style bill with:
- shop name
- date and time
- customer name
- item list (operators and values)
- total amount
- previous balance
- payment
- final balance

Only the item list scrolls.  
The summary section always stays visible and print-safe.

---

## 🌐 Language Support

The app supports:
- Hindi
- Hinglish
- English

Language can be changed from the Settings screen.  
The selected language is saved in localStorage.

---

## 💾 Data Storage

The app uses localStorage to save:
- Shop name
- Selected language

Calculation data stays in memory so users can freely  
start new bills without old data mixing.

---

## 🛠 Tech Stack

- HTML
- CSS
- Vanilla JavaScript
- LocalStorage

This version is planned to be converted into React later.

---

## 🎯 Project Goal

To build a real shop-ready billing calculator that:
- behaves like a physical calculator
- prevents calculation mistakes
- makes billing transparent
- works smoothly on any phone
- feels like a real product, not a demo

---

## 📦 Project Status

### ✅ Completed
- Calculator engine
- Expression-based input system
- Strong backspace handling
- Safe equal confirmation flow
- Common confirm and alert popup system
- Bill generation
- Language system
- Print-friendly bill layout
- Responsive mobile-first UI

### 🔜 Planned
- Bill item delete
- Item name support
- Quantity and price-based billing
- Bill history
- Daily totals
- Export and print improvements
- React version

---

## 👤 Author

Sameer

Built to solve a real shop problem,  
not just to show code.
