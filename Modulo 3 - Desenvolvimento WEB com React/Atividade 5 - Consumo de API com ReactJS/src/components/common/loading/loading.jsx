import React from "react";
import "./loading.css";

export default function Loading() {
  return (
    <div className="loading">
      <div className="spinner"></div>
      <span>Carregando...</span>
    </div>
  );
}
