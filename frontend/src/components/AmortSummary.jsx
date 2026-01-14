import { CardContainer, CardBody, CardItem } from "./ui/3d-card";
import { formatCurrency } from "@/lib/utils";

export default function AmortSummary({ summary }) {
  if (!summary) return null;

  return (
    <CardContainer containerClassName="py-10">
      <CardBody className="bg-white/70 rounded-2xl p-8 border border-emerald-200 shadow-sm max-w-xl w-full mx-auto">
        <CardItem translateZ={40}>
          <h3 className="text-3xl font-bold text-emerald-900 mb-5 text-center">
            Loan Summary
          </h3>
        </CardItem>

        <CardItem translateZ={30}>
          <div className="space-y-4 text-emerald-800 text-lg">
            <p>
              Monthly EMI: <b>{formatCurrency(summary.emi)}</b>
            </p>
            <p>
              Total Principal: <b>{formatCurrency(summary.total_principal)}</b>
            </p>
            <p>
              Total Interest: <b>{formatCurrency(summary.total_interest)}</b>
            </p>
            <p>
              Total Payment: <b>{formatCurrency(summary.total_payment)}</b>
            </p>
          </div>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
