import { generateDatesFromYearBeginning } from "../utis/generate-dates-from-year-beginning";
import { HabbitDay } from "./HabbitDay";

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

const summaryDates = generateDatesFromYearBeginning();
const minimumSummaryDatesSizes = 18 * 7;
const amountOfDatesToFill = minimumSummaryDatesSizes - summaryDates.length;

export function SummaryTabel() {
  return (
    <div className="w-full flex">
      <div className="grid grid-rows-7 grid-flow-row gap-3">
        {weekDays.map((weekDay, i) => {
          return (
            <div
              key={i}
              className="text-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center"
            >
              {weekDay}
            </div>
          )
        })}
      </div>

      <div className="grid grid-rows-7 grid-flow-col gap-3">
        {summaryDates.map(date => {
          return <HabbitDay key={date.toString()} />
        })}

        {amountOfDatesToFill > 0 && Array.from({ length: amountOfDatesToFill }).map((_, i) => {
          return (
            <div key={i} className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed" />
          )
        })}
      </div>

    </div>
  );
}