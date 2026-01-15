# 📊 MoneyMath – Financial Calculators & Visual Analytics

MoneyMath is a full-stack financial web application designed to simplify complex financial calculations using real-world logic from banking and investment systems. The platform currently includes a Loan Amortization Calculator and a SIP (Systematic Investment Plan) Calculator, along with visual insights to help users better understand long-term financial outcomes.

This project focuses on combining financial mathematics, data modeling, and modern web development to deliver a clean, intuitive, and educational user experience.

## 🚀 Features

### 🏦 Loan Amortization Calculator

- Monthly EMI calculation
- Year-wise amortization schedule
- Accurate principal and interest breakup
- Ending balance tracking
- Banking-style repayment logic
- Downloadable amortization table

### � SIP (Systematic Investment Plan) Calculator

- Monthly SIP investment calculation
- Corpus value at maturity
- Demonstrates the power of compounding
- Assumes a constant CAGR (e.g., 12% as per standard long-term equity assumptions)
- Year-wise growth visualization

### �📊 Data Visualization

- Line charts showing growth trends over time
- Principal vs interest comparison
- Clear, readable financial graphs for better interpretation

### 📋 Summary Cards

- Key financial metrics at a glance:
  - Monthly EMI
  - Total principal invested
  - Total interest earned/paid
  - Final maturity value
- Designed for quick understanding without digging into tables

### 🎨 UI & UX

- Clean, modern, and responsive design
- Smooth layout with structured sections
- Focus on clarity, readability, and usability
- Built to resemble real-world financial tools

### 📋 Loan Summary Card
- **Monthly EMI**
- **Total principal paid**
- **Total interest paid**
- **Total loan repayment amount**

### 📥 Download Support
- **Export complete amortization data for offline reference** (Excel download)

### 🎨 Modern UI/UX
- **Clean, responsive design**
- **Smooth layout and structured presentation**
- **Focused on clarity and usability**

---

## 🛠 Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Chart libraries for visualization

### Backend
- FastAPI
- Python
- NumPy
- Pandas

### Architecture
- REST-based frontend–backend communication
- Server-side financial calculations for accuracy
- Stateless API design

---

## 🎯 Purpose of the Project

The goal of MoneyMath is to:

- **Translate financial formulas into practical, real-world tools**
- **Help users understand loan repayments and long-term investments**
- **Demonstrate applied financial mathematics using technology**
- **Serve as a portfolio-ready FinTech project**

This project is intended for students, learners, and anyone interested in understanding finance beyond just surface-level numbers.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+)
- Python (3.8+)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/moneymath.git
   cd moneymath
   ```

2. **Set up the backend**
   ```bash
   cd backend
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   uvicorn main:app --reload
   ```

3. **Set up the frontend**
   ```bash
   cd ../frontend
   npm install
   npm run dev
   ```

4. **Open your browser** to `http://localhost:5173`

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 👤 Author

**Manthan Parekh**  
AI & Data Science student with a strong interest in finance and financial engineering, focused on building practical tools that connect mathematical models with real-world financial systems.
