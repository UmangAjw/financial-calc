const getCostOfEquityCapital = () => {
  let cost_of_equity_capital_ele = document.getElementById(
    "cost_of_equity_capital_input"
  );
  let risk_free_rate_ele = document.getElementById("risk_free_rate_input");
  let market_risk_premium_ele = document.getElementById(
    "market_risk_premium_input"
  );
  let company_beta_ele = document.getElementById("company_beta_input");

  let company_beta = parseFloat(company_beta_ele.value);
  let risk_free_rate = parseFloat(risk_free_rate_ele.value);
  let market_risk_premium = parseFloat(market_risk_premium_ele.value);

  cost_of_equity_capital_ele.value = (
    risk_free_rate +
    company_beta * market_risk_premium
  ).toFixed(2);
};

const resetCostOfEquityCapital = () => {
  let cost_of_equity_capital_ele = document.getElementById(
    "cost_of_equity_capital_input"
  );
  let risk_free_rate_ele = document.getElementById("risk_free_rate_input");
  let market_risk_premium_ele = document.getElementById(
    "market_risk_premium_input"
  );
  let company_beta_ele = document.getElementById("company_beta_input");

  cost_of_equity_capital_ele.value = "";
  risk_free_rate_ele.value = "";
  market_risk_premium_ele.value = "";
  company_beta_ele.value = "";
};

const getCostOfDebt = () => {
  let company_outstanding_bonds_ele = document.getElementById(
    "company_outstanding_bonds_input"
  );
  let marginal_tax_rate_ele = document.getElementById(
    "marginal_tax_rate_input"
  );
  let cost_of_debt_ele = document.getElementById("cost_of_debt_input");

  let company_outstanding_bonds = parseFloat(
    company_outstanding_bonds_ele.value
  );
  let marginal_tax_rate = parseFloat(marginal_tax_rate_ele.value);

  console.log(company_outstanding_bonds, marginal_tax_rate);

  cost_of_debt_ele.value = (
    company_outstanding_bonds *
    (1 - marginal_tax_rate / 100)
  ).toFixed(2);
};

const resetCostOfDebt = () => {
  let company_outstanding_bonds_ele = document.getElementById(
    "company_outstanding_bonds_input"
  );
  let marginal_tax_rate_ele = document.getElementById(
    "marginal_tax_rate_input"
  );
  let cost_of_debt_ele = document.getElementById("cost_of_debt_input");

  company_outstanding_bonds_ele.value = "";
  marginal_tax_rate_ele.value = "";
  cost_of_debt_ele.value = "";
};

const getWACC = () => {
  let equity_weight_ele = document.getElementById("equity_weight_input");
  let debt_weight_ele = document.getElementById("debt_weight_input");
  let wacc_ele = document.getElementById("wacc_input");
  let cost_of_equity_capital_ele = document.getElementById(
    "cost_of_equity_capital_input"
  );
  let cost_of_debt_ele = document.getElementById("cost_of_debt_input");

  let equity_weight = parseFloat(equity_weight_ele.value);
  let debt_weight = parseFloat(debt_weight_ele.value);

  wacc_ele.value = (
    equity_weight * cost_of_equity_capital_ele.value +
    debt_weight * cost_of_debt_ele.value
  ).toFixed(2);
};

const resetWACC = () => {
  let equity_weight_ele = document.getElementById("equity_weight_input");
  let debt_weight_ele = document.getElementById("debt_weight_input");
  let wacc_ele = document.getElementById("wacc_input");

  equity_weight_ele.value = "";
  debt_weight_ele.value = "";
  wacc_ele.value = "";
};

const getFutureValue = () => {
  let present_value_ele = document.getElementById("present_value_input");
  let rate_ele = document.getElementById("rate_input");
  let time_ele = document.getElementById("time_input");

  let present_value = parseFloat(present_value_ele.value);
  let rate = parseFloat(rate_ele.value);
  let time = parseFloat(time_ele.value);

  future_value_input.value = (present_value * (1 + rate / 100) ** time).toFixed(
    2
  );
};

const resetFutureValue = () => {
  let present_value_ele = document.getElementById("present_value_input");
  let rate_ele = document.getElementById("rate_input");
  let time_ele = document.getElementById("time_input");
  let future_value_ele = document.getElementById("future_value_input");

  present_value_ele.value = "";
  rate_ele.value = "";
  time_ele.value = "";
  future_value_ele.value = "";
};

const getPresentValue = () => {
  let future_value_pv_ele = document.getElementById("future_value_pv_input");
  let rate_pv_ele = document.getElementById("rate_pv_input");
  let time_pv_ele = document.getElementById("time_pv_input");

  let future_value_pv = parseFloat(future_value_pv_ele.value);
  let rate_pv = parseFloat(rate_pv_ele.value);
  let time_pv = parseFloat(time_pv_ele.value);

  present_value_pv_input.value = (
    future_value_pv *
    (1 + rate_pv / 100) ** -time_pv
  ).toFixed(2);
};
const resetPresentValue = () => {
  let future_value_pv_ele = document.getElementById("future_value_pv_input");
  let rate_pv_ele = document.getElementById("rate_pv_input");
  let time_pv_ele = document.getElementById("time_pv_input");
  let present_value_pv_ele = document.getElementById("present_value_pv_input");
  future_value_pv_ele.value = "";
  rate_pv_ele.value = "";
  time_pv_ele.value = "";
  present_value_pv_ele.value = "";
};

const getPresentValuePerpetuity = () => {
  let pmt_pv_perpetuity_ele = document.getElementById(
    "pmt_pv_perpetuity_input"
  );
  let rate_pv_perpetuity_ele = document.getElementById(
    "rate_pv_perpetuity_input"
  );

  let pmt_pv_perpetuity = parseFloat(pmt_pv_perpetuity_ele.value);
  let rate_pv_perpetuity = parseFloat(rate_pv_perpetuity_ele.value);

  pv_perpetuity_input.value = (
    pmt_pv_perpetuity *
    (1 / (rate_pv_perpetuity / 100))
  ).toFixed(2);
};

const resetPresentValuePerpetuity = () => {
  let pmt_pv_perpetuity_ele = document.getElementById(
    "pmt_pv_perpetuity_input"
  );
  let rate_pv_perpetuity_ele = document.getElementById(
    "rate_pv_perpetuity_input"
  );
  let pv_perpetuity_ele = document.getElementById("pv_perpetuity_input");

  pmt_pv_perpetuity_ele.value = "";
  rate_pv_perpetuity_ele.value = "";
  pv_perpetuity_ele.value = "";
};

const getPresentValueGrowingPerpetuity = () => {
  let pmt_pv_growing_perpetuity_ele = document.getElementById(
    "pmt_pv_growing_perpetuity_input"
  );
  let rate_pv_growing_perpetuity_ele = document.getElementById(
    "rate_pv_growing_perpetuity_input"
  );
  let growth_pv_growing_perpetuity_ele = document.getElementById(
    "growth_pv_growing_perpetuity_input"
  );

  let pmt_pv_growing_perpetuity = parseFloat(
    pmt_pv_growing_perpetuity_ele.value
  );
  let rate_pv_growing_perpetuity = parseFloat(
    rate_pv_growing_perpetuity_ele.value
  );
  let growth_pv_growing_perpetuity = parseFloat(
    growth_pv_growing_perpetuity_ele.value
  );

  pv_growing_perpetuity_input.value = (
    pmt_pv_growing_perpetuity *
    (1 /
      (rate_pv_growing_perpetuity / 100 - growth_pv_growing_perpetuity / 100))
  ).toFixed(2);
};

const resetPresentValueGrowingPerpetuity = () => {
  let pmt_pv_growing_perpetuity_ele = document.getElementById(
    "pmt_pv_growing_perpetuity_input"
  );
  let rate_pv_growing_perpetuity_ele = document.getElementById(
    "rate_pv_growing_perpetuity_input"
  );
  let growth_pv_growing_perpetuity_ele = document.getElementById(
    "growth_pv_growing_perpetuity_input"
  );
  let pv_growing_perpetuity_ele = document.getElementById(
    "pv_growing_perpetuity_input"
  );

  pmt_pv_growing_perpetuity_ele.value = "";
  rate_pv_growing_perpetuity_ele.value = "";
  growth_pv_growing_perpetuity_ele.value = "";
  pv_growing_perpetuity_ele.value = "";
};

const getPresentValueRegularAnuuity = () => {
  let pmt_pv_regular_annuity_ele = document.getElementById(
    "pmt_pv_regular_annuity_input"
  );
  let rate_pv_regular_annuity_ele = document.getElementById(
    "rate_pv_regular_annuity_input"
  );
  let time_pv_regular_annuity_ele = document.getElementById(
    "time_pv_regular_annuity_input"
  );

  let pmt_pv_regular_annuity = parseFloat(pmt_pv_regular_annuity_ele.value);
  let rate_pv_regular_annuity = parseFloat(rate_pv_regular_annuity_ele.value);
  let time_pv_regular_annuity = parseFloat(time_pv_regular_annuity_ele.value);

  pv_regular_annuity_input.value = (
    pmt_pv_regular_annuity *
    ((1 - (1 + rate_pv_regular_annuity / 100) ** -time_pv_regular_annuity) /
      (rate_pv_regular_annuity / 100))
  ).toFixed(2);
};

const resetPresentValueRegularAnnuity = () => {
  let pmt_pv_regular_annuity_ele = document.getElementById(
    "pmt_pv_regular_annuity_input"
  );
  let rate_pv_regular_annuity_ele = document.getElementById(
    "rate_pv_regular_annuity_input"
  );
  let time_pv_regular_annuity_ele = document.getElementById(
    "time_pv_regular_annuity_input"
  );
  let pv_regular_annuity_ele = document.getElementById(
    "pv_regular_annuity_input"
  );

  pmt_pv_regular_annuity_ele.value = "";
  rate_pv_regular_annuity_ele.value = "";
  time_pv_regular_annuity_ele.value = "";
  pv_regular_annuity_ele.value = "";
};

const getFutureValueRegularAnuuity = () => {
  let pmt_fv_regular_annuity_ele = document.getElementById(
    "pmt_fv_regular_annuity_input"
  );
  let rate_fv_regular_annuity_ele = document.getElementById(
    "rate_fv_regular_annuity_input"
  );
  let time_fv_regular_annuity_ele = document.getElementById(
    "time_fv_regular_annuity_input"
  );

  let pmt_fv_regular_annuity = parseFloat(pmt_fv_regular_annuity_ele.value);
  let rate_fv_regular_annuity = parseFloat(rate_fv_regular_annuity_ele.value);
  let time_fv_regular_annuity = parseFloat(time_fv_regular_annuity_ele.value);

  fv_regular_annuity_input.value = (
    pmt_fv_regular_annuity *
    (((1 + rate_fv_regular_annuity / 100) ** time_fv_regular_annuity - 1) /
      (rate_fv_regular_annuity / 100))
  ).toFixed(2);
};

const resetFutureValueRegularAnnuity = () => {
  let pmt_fv_regular_annuity_ele = document.getElementById(
    "pmt_fv_regular_annuity_input"
  );
  let rate_fv_regular_annuity_ele = document.getElementById(
    "rate_fv_regular_annuity_input"
  );
  let time_fv_regular_annuity_ele = document.getElementById(
    "time_fv_regular_annuity_input"
  );
  let fv_regular_annuity_ele = document.getElementById(
    "fv_regular_annuity_input"
  );

  pmt_fv_regular_annuity_ele.value = "";
  rate_fv_regular_annuity_ele.value = "";
  time_fv_regular_annuity_ele.value = "";
  fv_regular_annuity_ele.value = "";
};

const getPresentValueAnuuityDue = () => {
  let pmt_pv_annuity_due_ele = document.getElementById(
    "pmt_pv_annuity_due_input"
  );
  let rate_pv_annuity_due_ele = document.getElementById(
    "rate_pv_annuity_due_input"
  );
  let time_pv_annuity_due_ele = document.getElementById(
    "time_pv_annuity_due_input"
  );

  let pmt_pv_annuity_due = parseFloat(pmt_pv_annuity_due_ele.value);
  let rate_pv_annuity_due = parseFloat(rate_pv_annuity_due_ele.value);
  let time_pv_annuity_due = parseFloat(time_pv_annuity_due_ele.value);

  pv_annuity_due_input.value = (
    pmt_pv_annuity_due *
    (((1 - (1 + rate_pv_annuity_due / 100) ** -time_pv_annuity_due) /
      (rate_pv_annuity_due / 100)) *
      (1 + rate_pv_annuity_due / 100))
  ).toFixed(2);
};

const resetPresntValueAnnuityDue = () => {
  let pmt_pv_annuity_due_ele = document.getElementById(
    "pmt_pv_annuity_due_input"
  );
  let rate_pv_annuity_due_ele = document.getElementById(
    "rate_pv_annuity_due_input"
  );
  let time_pv_annuity_due_ele = document.getElementById(
    "time_pv_annuity_due_input"
  );
  let pv_annuity_due_ele = document.getElementById("pv_annuity_due_input");

  pmt_pv_annuity_due_ele.value = "";
  rate_pv_annuity_due_ele.value = "";
  time_pv_annuity_due_ele.value = "";
  pv_annuity_due_ele.value = "";
};

const getFutureValueAnuuityDue = () => {
  let pmt_fv_annuity_due_ele = document.getElementById(
    "pmt_fv_annuity_due_input"
  );
  let rate_fv_annuity_due_ele = document.getElementById(
    "rate_fv_annuity_due_input"
  );
  let time_fv_annuity_due_ele = document.getElementById(
    "time_fv_annuity_due_input"
  );

  let pmt_fv_annuity_due = parseFloat(pmt_fv_annuity_due_ele.value);
  let rate_fv_annuity_due = parseFloat(rate_fv_annuity_due_ele.value);
  let time_fv_annuity_due = parseFloat(time_fv_annuity_due_ele.value);

  fv_annuity_due_input.value = (
    pmt_fv_annuity_due *
    ((((1 + rate_fv_annuity_due / 100) ** time_fv_annuity_due - 1) /
      (rate_fv_annuity_due / 100)) *
      (1 + rate_fv_annuity_due / 100))
  ).toFixed(2);
};

const resetFutureValueAnnuityDue = () => {
  let pmt_fv_annuity_due_ele = document.getElementById(
    "pmt_fv_annuity_due_input"
  );
  let rate_fv_annuity_due_ele = document.getElementById(
    "rate_fv_annuity_due_input"
  );
  let time_fv_annuity_due_ele = document.getElementById(
    "time_fv_annuity_due_input"
  );
  let fv_annuity_due_ele = document.getElementById("fv_annuity_due_input");

  pmt_fv_annuity_due_ele.value = "";
  rate_fv_annuity_due_ele.value = "";
  time_fv_annuity_due_ele.value = "";
  fv_annuity_due_ele.value = "";
};

const getBondPrice = () => {
  let annual_coupon_rate_ele = document.getElementById(
    "annual_coupon_rate_input"
  );
  let annual_facevalue_ele = document.getElementById("annual_facevalue_input");
  let annual_ytm_ele = document.getElementById("annual_ytm_input");
  let annual_numberOfPeriods_ele = document.getElementById(
    "annual_numberOfPeriods_input"
  );
  //let annual_pvifa_ele = document.getElementById("annual_pvifa_input");

  let annual_coupon_rate = parseFloat(annual_coupon_rate_ele.value);
  let annual_facevalue = parseFloat(annual_facevalue_ele.value);
  let annual_ytm = parseFloat(annual_ytm_ele.value);
  let annual_numberOfPeriods = parseFloat(annual_numberOfPeriods_ele.value);
  //let annual_pvifa = parseFloat(annual_pvifa_ele.value);

  annual_bondPrice_input.value = (
    (annual_coupon_rate / 100) *
      annual_facevalue *
      pv_regular_annuity_input.value +
    annual_facevalue / (1 + annual_ytm / 100) ** annual_numberOfPeriods
  ).toFixed(2);
};

const resetBondPrice = () => {
  let annual_coupon_rate_ele = document.getElementById(
    "annual_coupon_rate_input"
  );
  let annual_facevalue_ele = document.getElementById("annual_facevalue_input");
  let annual_ytm_ele = document.getElementById("annual_ytm_input");
  let annual_numberOfPeriods_ele = document.getElementById(
    "annual_numberOfPeriods_input"
  );
  let annual_bondPrice_ele = document.getElementById("annual_bondPrice_input");

  annual_coupon_rate_ele.value = "";
  annual_facevalue_ele.value = "";
  annual_ytm_ele.value = "";
  annual_numberOfPeriods_ele.value = "";
  annual_bondPrice_ele.value = "";
};

const getSemiBondPrice = () => {
  let semi_annual_coupon_rate_ele = document.getElementById(
    "semi_annual_coupon_rate_input"
  );
  let semi_annual_facevalue_ele = document.getElementById(
    "semi_annual_facevalue_input"
  );
  let semi_annual_ytm_ele = document.getElementById("semi_annual_ytm_input");
  let semi_annual_numberOfPeriods_ele = document.getElementById(
    "semi_annual_numberOfPeriods_input"
  );

  let semi_annual_coupon_rate =
    parseFloat(semi_annual_coupon_rate_ele.value) / 2;
  let semi_annual_facevalue = parseFloat(semi_annual_facevalue_ele.value);
  let semi_annual_ytm = parseFloat(semi_annual_ytm_ele.value) / 2;
  let semi_annual_numberOfPeriods =
    parseFloat(semi_annual_numberOfPeriods_ele.value) * 2;

  semi_annual_bondPrice_input.value = (
    (semi_annual_coupon_rate / 100) *
      semi_annual_facevalue *
      pv_regular_annuity_input.value +
    semi_annual_facevalue /
      (1 + semi_annual_ytm / 100) ** semi_annual_numberOfPeriods
  ).toFixed(2);
};

const resetSemiBondPrice = () => {
  let semi_annual_coupon_rate_ele = document.getElementById(
    "semi_annual_coupon_rate_input"
  );
  let semi_annual_facevalue_ele = document.getElementById(
    "semi_annual_facevalue_input"
  );
  let semi_annual_ytm_ele = document.getElementById("semi_annual_ytm_input");
  let semi_annual_numberOfPeriods_ele = document.getElementById(
    "semi_annual_numberOfPeriods_input"
  );
  let semi_annual_bondPrice_ele = document.getElementById(
    "semi_annual_bondPrice_input"
  );

  semi_annual_coupon_rate_ele.value = "";
  semi_annual_facevalue_ele.value = "";
  semi_annual_ytm_ele.value = "";
  semi_annual_numberOfPeriods_ele.value = "";
  semi_annual_bondPrice_ele.value = "";
};
