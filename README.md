# Smart Billing Calculator

🔗 Live App:  
https://sameer-dev-106.github.io/smart-billing-calculator/

A mobile-first smart billing calculator built for small shopkeepers.  
This app solves the biggest problem of normal calculators:  
you cannot verify what items were added to reach the final total.

This project separates calculation and billing so every shopkeeper  
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
- preventing data loss using localStorage

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

Totals update when operators are pressed,  
just like a real calculator used in shops.

---

### 3️⃣ Create Bill
When user clicks **Bill**, a form opens asking:
- Customer Name (required)
- Pehle ka (optional)
- Jama (optional)

---

### 4️⃣ Bill Mode
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
The summary section always stays visible.

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
- UI and modals
- Calculator engine
- Expression-based input system
- Strong backspace handling
- Operator and equal handling
- Bill generation
- Language system
- Print-friendly bill layout

### 🔜 Planned
- Live total preview while typing
- Bill history
- Daily totals
- Export and print improvements
- React version

---

## 👤 Author

Sameer

Built to solve a real shop problem,  
not just to show code.
