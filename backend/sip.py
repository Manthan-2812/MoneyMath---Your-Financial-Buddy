import numpy as np


def calculate_sip_constant(monthly_amount: float, annual_rate: float, years: int):
  """
  Constant-rate SIP projection.

  monthly_amount: SIP contribution in rupees (per month)
  annual_rate: expected annual rate of return in percent (e.g. 12 for 12%)
  years: investment horizon in years
  """
  # Convert yearly rate (e.g. 12%) to an effective monthly rate
  # using (1 + R)^(1/12) - 1 as in your numpy example,
  # so results align with calculators like Groww.
  annual_decimal = annual_rate / 100.0
  monthly_rate = (1 + annual_decimal) ** (1 / 12) - 1
  total_months = years * 12

  def future_value_sip(p, r, n):
    # p: monthly amount, r: monthly rate, n: number of months
    if r == 0:
      return p * n
    return p * ((1 + r) ** n - 1) / r * (1 + r)

  yearly_balances = []
  for year in range(0, years + 1):
    months = year * 12
    balance = future_value_sip(monthly_amount, monthly_rate, months) if months > 0 else 0.0
    yearly_balances.append(
      {
        "year": year,
        "balance": round(balance, 2),
      }
    )

  amount_invested = monthly_amount * total_months
  corpus = yearly_balances[-1]["balance"]

  return {
    "summary": {
      "amount_invested": round(amount_invested, 2),
      "annual_rate": annual_rate,
      "corpus": round(corpus, 2),
    },
    "yearly_balances": yearly_balances,
  }


def calculate_sip_range(
  monthly_amount: float, min_rate: float, max_rate: float, years: int, base_rate: float = 12.0
):
  """
  Variable-rate SIP projection compared to a fixed base rate (default 12%).

  min_rate / max_rate: yearly rate range in percent.
  """
  rng = np.random.default_rng()

  # Fixed 12% (or provided base_rate) path using constant formula
  fixed_result = calculate_sip_constant(monthly_amount, base_rate, years)
  fixed_path = fixed_result["yearly_balances"]
  fixed_corpus = fixed_result["summary"]["corpus"]

  # Variable yearly rates sampled within [min_rate, max_rate] (percent → decimal)
  yearly_rates = rng.uniform(min_rate, max_rate, size=years) / 100.0

  balances = [0.0]
  current_val = 0.0

  for t in range(1, years + 1):
    yearly_rate = yearly_rates[t - 1]
    monthly_rate = (1 + yearly_rate) ** (1 / 12) - 1

    for _ in range(12):
      current_val += monthly_amount
      current_val *= 1 + monthly_rate

    balances.append(round(current_val, 2))

  variable_path = [
    {"year": 0, "balance": 0.0, "yearly_rate": 0.0}
  ]
  for year in range(1, years + 1):
    variable_path.append(
      {
        "year": year,
        "balance": balances[year],
        "yearly_rate": round(yearly_rates[year - 1] * 100, 4),
      }
    )

  amount_invested = monthly_amount * years * 12
  variable_corpus = balances[-1]

  return {
    "summary": {
      "amount_invested": round(amount_invested, 2),
      "base_rate": base_rate,
      "min_rate": min_rate,
      "max_rate": max_rate,
      "fixed_corpus": round(fixed_corpus, 2),
      "variable_corpus": round(variable_corpus, 2),
    },
    "fixed_path": fixed_path,
    "variable_path": variable_path,
  }


