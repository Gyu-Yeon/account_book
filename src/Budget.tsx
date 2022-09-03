import React, { useState } from "react";

export function Budget() {
  return (
    <div className="budget">
      <div className="incomeOutcome">
        <div className="income">수입</div>
        <div className="outcome">지출</div>
      </div>
      <div className="balance">현금잔액</div>
    </div>
  );
}
