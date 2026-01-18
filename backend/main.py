from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from amortization import calculate_yearly_amortization
from sip import calculate_sip_constant, calculate_sip_range

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class LoanInput(BaseModel):
    loan_amount: float
    annual_rate: float
    years: int

# This checks to ensure that inputs are in this NUMBER format only 
class SIPInput(BaseModel):
    sip_amount: float
    annual_rate: float
    years: int


class SIPRangeInput(BaseModel):
    sip_amount: float
    min_rate: float
    max_rate: float
    years: int


@app.post("/amortization")
def amortization(data: LoanInput):
    return calculate_yearly_amortization(
        data.loan_amount,
        data.annual_rate,
        data.years,
    )


@app.post("/sip")
def sip_projection(data: SIPInput):
    return calculate_sip_constant(
        data.sip_amount,
        data.annual_rate,
        data.years,
    )


@app.post("/sip-range")
def sip_range_projection(data: SIPRangeInput):
    return calculate_sip_range(
        data.sip_amount,
        data.min_rate,
        data.max_rate,
        data.years,
    )
