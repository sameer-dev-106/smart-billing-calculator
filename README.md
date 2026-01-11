# Smart Billing Calculator

A mobile-first smart billing calculator built for small shopkeepers.
This app solves the biggest problem of normal calculators:
you cannot verify what items were added to reach the final total.

This project separates calculation and billing so every shopkeeper
can confidently generate a correct bill.

---

## 🧠 What this app does

Normal calculators only show one final number.
In real shops this causes:
- mistakes
- confusion
- arguments
- no way to verify the bill

Smart Billing Calculator fixes this by:
- tracking each added value as an item
- showing a full bill
- supporting previous balance (pehle ka) and payment (jama)
- working even after page reload using localStorage

---

## 📱 App Flow

1. **First time setup**  
   User enters shop name which is saved permanently.

2. **Calculator Mode**  
   User enters numbers like a normal calculator.  
   The screen shows:
   - current expression  
   - total amount  
   - item count  

3. **Create Bill**  
   When user clicks Bill, a form opens asking:
   - Customer Name (required)
   - Pehle ka (optional)
   - Jama (optional)

4. **Bill Mode**  
   The app shows a receipt-style bill with:
   - shop name  
   - date and time  
   - customer name  
   - item list  
   - total  
   - previous balance  
   - payment  
   - final balance  

Only the item list scrolls.  
The summary always stays visible.

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
- Current calculation and bill state  

This prevents data loss if the page reloads.

---

## 🛠 Tech Stack

- HTML  
- CSS  
- Vanilla JavaScript  
- LocalStorage  

This version will later be converted to React.

---

## 🎯 Project Goal

To create a real shop-ready billing calculator that:
- prevents calculation mistakes  
- makes billing transparent  
- works on any phone  
- feels like a real app, not a demo  

---

## 📦 Project Status

- UI and design completed  
- Screens and modals built  
- JavaScript logic in progress  

Future plans:
- React version  
- Bill history  
- Export or print bill  
- PWA offline support  

---

## 👤 Author

**Sameer**

Built with a real problem in mind, not just for demo purposes.