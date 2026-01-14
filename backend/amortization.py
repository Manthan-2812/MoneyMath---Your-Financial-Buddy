import numpy as np
import pandas as pd

def calculate_yearly_amortization(principal, annual_rate, years):
    monthly_rate = annual_rate / (12 * 100)
    months = years * 12

    emi = principal * monthly_rate * (1 + monthly_rate) ** months / (
        (1 + monthly_rate) ** months - 1
    )

    yearly_table = []
    balance = principal

    total_interest_all = 0
    total_principal_all = 0

    for year in range(1, years + 1):
        starting_balance = balance
        interest_paid = 0
        principal_paid = 0

        for _ in range(12):
            interest = balance * monthly_rate
            principal_component = emi - interest
            balance -= principal_component

            interest_paid += interest
            principal_paid += principal_component

        total_interest_all += interest_paid
        total_principal_all += principal_paid

        yearly_table.append({
            "year": year,
            "starting_balance": round(starting_balance, 2),
            "total_principal": round(principal_paid, 2),
            "total_interest": round(interest_paid, 2),
            "yearly_emi": round(emi * 12, 2),
            "ending_balance": round(balance if balance > 0 else 0, 2),
        })

    return {
        "emi": round(emi, 2),
        "summary": {
            "emi": round(emi, 2),
            "total_principal": round(total_principal_all, 2),
            "total_interest": round(total_interest_all, 2),
            "total_payment": round((emi * months), 2),
        },
        "table": yearly_table,
    }
