// import { useState } from "react";

const Chair = ({ chair, setChair }) => {
  const posisiKursi = {
    kursiA: [
      { id: 1, chair: "A" },
      { id: 2, chair: "A" },
      { id: 3, chair: "A" },
      { id: 4, chair: "A" },
      { id: 5, chair: "A" },
      { id: 6, chair: "A" },
      { id: 7, chair: "A" },
    ],
    kursiB: [
      { id: 1, chair: "B" },
      { id: 2, chair: "B" },
      { id: 3, chair: "B" },
      { id: 4, chair: "B" },
      { id: 5, chair: "B" },
      { id: 6, chair: "B" },
      { id: 7, chair: "B" },
    ],
    kursiC: [
      { id: 1, chair: "C" },
      { id: 2, chair: "C" },
      { id: 3, chair: "C" },
      { id: 4, chair: "C" },
      { id: 5, chair: "C" },
      { id: 6, chair: "C" },
      { id: 7, chair: "C" },
    ],
    kursiD: [
      { id: 1, chair: "D" },
      { id: 2, chair: "D" },
      { id: 3, chair: "D" },
      { id: 4, chair: "D" },
      { id: 5, chair: "D" },
      { id: 6, chair: "D" },
      { id: 7, chair: "D" },
    ],
    kursiE: [
      { id: 1, chair: "E" },
      { id: 2, chair: "E" },
      { id: 3, chair: "E" },
      { id: 4, chair: "E" },
      { id: 5, chair: "E" },
      { id: 6, chair: "E" },
      { id: 7, chair: "E" },
    ],
    kursiF: [
      { id: 1, chair: "F" },
      { id: 2, chair: "F" },
      { id: 3, chair: "F" },
      { id: 4, chair: "F" },
      { id: 5, chair: "F" },
      { id: 6, chair: "F" },
      { id: 7, chair: "F" },
    ],
    kursiG: [
      { id: 1, chair: "G" },
      { id: 2, chair: "G" },
      { id: 3, chair: "G" },
      { id: 4, chair: "G" },
      { id: 5, chair: "G" },
      { id: 6, chair: "G" },
      { id: 7, chair: "G" },
    ],
  };

  const submitChair = (kursi) => {
    const key = `${kursi.chair}-${kursi.id}`;

    setChair((prev) => {
      const newValue = !prev[key];
      console.log("Clicked:", key, "→", newValue);

      return {
        ...prev,
        [key]: newValue,
      };
    });
  };

  return (
    <section className="flex mt-5 bg-slate-50 pt-4">
      <section className="text-3xl mx-5 pr-2">
        <p className="pb-2">A</p>
        <p className="py-2">B</p>
        <p className="pb-2">C</p>
        <p className="py-1">D</p>
        <p className="py-2">E</p>
        <p className="py-2">F</p>
        <p className="py-1">G</p>
      </section>

      {/* Kursi */}
      <section className="grid grid-rows-7 gap-2">
        {/* ROW A */}
        <div className="flex">
          {posisiKursi.kursiA.map((kursiA) => {
            return (
              <button
                key={kursiA.id}
                className={`w-10 h-10 mr-1 rounded ${
                  chair[`${kursiA.chair}-${kursiA.id}`]
                    ? "bg-slate-600"
                    : "bg-slate-300"
                }`}
                onClick={() => submitChair(kursiA)}
              ></button>
            );
          })}
        </div>

        {/* ROW B */}
        <div className="flex">
          {posisiKursi.kursiB.map((kursiB) => {
            return (
              <button
                key={kursiB.id}
                className={`w-10 h-10 mr-1 rounded ${
                  chair[`${kursiB.chair}-${kursiB.id}`]
                    ? "bg-slate-600"
                    : "bg-slate-300"
                }`}
                onClick={() => submitChair(kursiB)}
              ></button>
            );
          })}
        </div>

        {/* ROW C */}
        <div className="flex">
          {posisiKursi.kursiC.map((kursiC) => {
            return (
              <button
                key={kursiC.id}
                className={`w-10 h-10 mr-1 rounded ${
                  chair[`${kursiC.chair}-${kursiC.id}`]
                    ? "bg-slate-600"
                    : "bg-slate-300"
                }`}
                onClick={() => submitChair(kursiC)}
              ></button>
            );
          })}
        </div>

        {/* ROW D */}
        <div className="flex">
          {posisiKursi.kursiD.map((kursiD) => {
            return (
              <button
                key={kursiD.id}
                className={`w-10 h-10 mr-1 rounded ${
                  chair[`${kursiD.chair}-${kursiD.id}`]
                    ? "bg-slate-600"
                    : "bg-slate-300"
                }`}
                onClick={() => submitChair(kursiD)}
              ></button>
            );
          })}
        </div>

        {/* ROW E */}
        <div className="flex">
          {posisiKursi.kursiE.map((kursiE) => {
            return (
              <button
                key={kursiE.id}
                className={`w-10 h-10 mr-1 rounded ${
                  chair[`${kursiE.chair}-${kursiE.id}`]
                    ? "bg-slate-600"
                    : "bg-slate-300"
                }`}
                onClick={() => submitChair(kursiE)}
              ></button>
            );
          })}
        </div>

        {/* ROW F */}
        <div className="flex">
          {posisiKursi.kursiF.map((kursiF) => {
            return (
              <button
                key={kursiF.id}
                className={`w-10 h-10 mr-1 rounded ${
                  chair[`${kursiF.chair}-${kursiF.id}`]
                    ? "bg-slate-600"
                    : "bg-slate-300"
                }`}
                onClick={() => submitChair(kursiF)}
              ></button>
            );
          })}
        </div>

        {/* ROW G */}
        <div className="flex">
          {posisiKursi.kursiG.map((kursiG) => {
            return (
              <button
                key={kursiG.id}
                className={`w-10 h-10 mr-1 rounded ${
                  chair[`${kursiG.chair}-${kursiG.id}`]
                    ? "bg-slate-600"
                    : "bg-slate-300"
                }`}
                onClick={() => submitChair(kursiG)}
              ></button>
            );
          })}
        </div>
        <section className="flex text-3xl mt-2">
          <p className="px-3">1</p>
          <p className="px-3">2</p>
          <p className="px-4">3</p>
          <p className="px-3">4</p>
          <p className="px-3">5</p>
          <p className="px-4">6</p>
          <p className="px-3">7</p>
        </section>
      </section>
    </section>
  );
};

export default Chair;
