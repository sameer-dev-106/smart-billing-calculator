# Smart Billing Calculator

🔗 **Live App:**  
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
- saving bills and calculations locally for reference

---

## 📱 App Flow

### 1️⃣ First Time Setup
User enters shop name, which is saved permanently on the device.

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

### 3️⃣ Calculator History
After pressing `=`, each calculation is saved automatically.

- History shows expressions like `20+30-10`
- Final result is clearly visible
- History opens in a dedicated modal
- Old calculations can be restored back into the calculator
- History can be cleared safely with confirmation

This helps users quickly reuse or verify calculations.

---

### 4️⃣ Safe Finalization
- Pressing `=` asks for confirmation before finalizing the calculation
- Accidental key presses do not lock the bill
- Users are clearly informed before starting a new bill

---

### 5️⃣ Create Bill
When user clicks **Bill**, a form opens asking:
- Customer Name (required)
- Pehle ka (optional)
- Jama (optional)

Billing is blocked unless calculation is finalized correctly.

---

### 6️⃣ Item Name (Optional but Recommended)
Before generating the final bill, the user is asked to optionally  
add names for each bill item.

- Each calculated item is shown with its amount
- User can enter item names in a dedicated screen
- Additional items can be added if required
- Items can be skipped safely with clear confirmation
- Default item names are applied automatically if skipped

This ensures clean bills without forcing extra work.

---

### 7️⃣ Bill Mode
The app shows a receipt-style bill with:
- shop name
- date and time
- customer name
- item list (item name, operator, value)
- total amount
- previous balance
- payment
- final balance

Only the item list scrolls.  
The summary section always stays visible and print-safe.

---

### 8️⃣ Bill History
Every finalized bill is saved automatically.

- Bills are stored locally on the device
- Bill History opens as a separate screen
- Each entry shows customer name, date, and final amount
- Old bills can be reviewed anytime
- Bills are locked to prevent accidental changes

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
- Bill history
- Calculator history

Calculator resets for new bills,  
but history remains available for reference.

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
- Calculator history with restore support
- Bill history with persistent storage
- Bill history safe open confirmation
- Clear history with confirm and success feedback
- Step-by-step bill creation flow
- Optional item name support
- Add item support in item screen
- Default item name fallback system
- Bill item delete with recalculation
- Bill generation
- Language system (Hindi, Hinglish, English)
- Print-friendly bill layout
- Responsive mobile-first UI

---

### 🔜 Planned
- Single bill delete from history
- Bill history search (customer name / number)
- Quantity and price-based billing
- Daily totals and reports
- Invoice layout and QR payment support
- Bill sharing via WhatsApp
- Shop owner profile and UPI setup
- First-time app onboarding flow
- Bill sharing via WhatsApp
- React version

---

## 👤 Author

**Sameer**

Built to solve a real shop problem,  
not just to show code.

🔗 Live Demo:  
https://sameer-dev-106.github.io/smart-billing-calculator/
