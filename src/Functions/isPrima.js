import React from "react";

export const isPrima = (nilai) => {
  let pembagi = 0;
  for (let i = 1; i <= nilai; i++) {
    if (nilai % i == 0) {
      pembagi++;
    }
  }
  if (pembagi == 2) {
    return "Mati tahun ini";
  } else {
    return "";
  }
};
