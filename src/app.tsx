import { Routes, Route } from "@solidjs/router";
import CustomerForm from "./pages/CustomerForm";
import ServiceSelection from "./pages/ServiceSelection";
import InvoicePreview from "./pages/InvoicePreview";

export default function App() {
  return (
    <div dir="rtl" class="font-sans">
      <Routes>
        <Route path="/" component={CustomerForm} />
        <Route path="/services" component={ServiceSelection} />
        <Route path="/invoice" component={InvoicePreview} />
      </Routes>
    </div>
  );
}