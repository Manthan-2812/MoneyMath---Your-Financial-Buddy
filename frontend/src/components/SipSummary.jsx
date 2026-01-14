import { CardContainer, CardBody, CardItem } from "./ui/3d-card";
import { formatCurrency } from "@/lib/utils";

export default function SipSummary({ summary }) {
  if (!summary) return null;

  return (
    <CardContainer containerClassName="py-10">
      <CardBody className="bg-white/70 rounded-2xl p-8 border border-emerald-200 shadow-sm max-w-xl w-full mx-auto">
        <CardItem translateZ={40}>
          <h3 className="text-3xl font-bold text-emerald-900 mb-5 text-center">
            SIP Summary
          </h3>
        </CardItem>

        <CardItem translateZ={30}>
          <div className="space-y-4 text-emerald-800 text-lg">
            <p>
              Amount invested till end of tenure:{" "}
              <b>{formatCurrency(summary.amount_invested)}</b>
            </p>
            <p>
              Yearly rate of return: <b>{summary.annual_rate}%</b>
            </p>
            <p>
              Corpus amount at the end of tenure:{" "}
              <b>{formatCurrency(summary.corpus)}</b>
            </p>
          </div>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}


