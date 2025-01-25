import { Router, Route } from "@solidjs/router";
import CustomerForm from "./pages/CustomerForm";
// import ServiceSelection from "./pages/ServiceSelection";
// import InvoicePreview from "./pages/InvoicePreview";

export default function App() {
  return (
    <Router>
      <div dir="rtl" class="font-sans">
        <Route path="/" component={CustomerForm} />
        {/* <Route path="/services" component={ServiceSelection} />
        <Route path="/invoice" component={InvoicePreview} /> */}
      </div>
    </Router>
  );
}