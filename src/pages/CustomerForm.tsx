import { createSignal } from "solid-js";
import { useNavigate } from "@solidjs/router";

export default function CustomerForm() {
  const navigate = useNavigate();

  const [customer, setCustomer] = createSignal({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    licensePlate: { part1: "", letter: "", part2: "", part3: "" },
    carColor: "",
    mileage: "",
    admissionDate: "",
    entryDate: "",
    carModel: "",
  });

  const handleInputChange = (field, value) => {
    setCustomer({ ...customer(), [field]: value });
  };

  const handleLicensePlateChange = (part, value) => {
    setCustomer({
      ...customer(),
      licensePlate: { ...customer().licensePlate, [part]: value },
    });
  };

  const handleSubmit = () => {
    console.log(customer());
    navigate("/services");
  };

  return (
    <div class="p-4">
      <h1 class="text-2xl mb-4">اطلاعات مشتری و خودرو</h1>
      <form class="space-y-4">
        <div>
          <label>نام:</label>
          <input
            type="text"
            class="border p-2 rounded w-full"
            value={customer().firstName}
            onInput={(e) => handleInputChange("firstName", e.target.value)}
          />
        </div>
        <div>
          <label>نام خانوادگی:</label>
          <input
            type="text"
            class="border p-2 rounded w-full"
            value={customer().lastName}
            onInput={(e) => handleInputChange("lastName", e.target.value)}
          />
        </div>
        <div>
          <label>شماره تماس:</label>
          <input
            type="text"
            class="border p-2 rounded w-full"
            value={customer().phoneNumber}
            onInput={(e) => handleInputChange("phoneNumber", e.target.value)}
          />
        </div>
        <div>
          <label>پلاک خودرو:</label>
          <div class="flex space-x-2">
            <input
              type="text"
              class="border p-2 rounded w-12"
              placeholder="00"
              value={customer().licensePlate.part1}
              onInput={(e) =>
                handleLicensePlateChange("part1", e.target.value)
              }
            />
            <input
              type="text"
              class="border p-2 rounded w-12"
              placeholder="حرف"
              value={customer().licensePlate.letter}
              onInput={(e) =>
                handleLicensePlateChange("letter", e.target.value)
              }
            />
            <input
              type="text"
              class="border p-2 rounded w-16"
              placeholder="000"
              value={customer().licensePlate.part2}
              onInput={(e) =>
                handleLicensePlateChange("part2", e.target.value)
              }
            />
            <input
              type="text"
              class="border p-2 rounded w-12"
              placeholder="ایران"
              value={customer().licensePlate.part3}
              onInput={(e) =>
                handleLicensePlateChange("part3", e.target.value)
              }
            />
          </div>
        </div>
        <div>
          <label>رنگ خودرو:</label>
          <input
            type="text"
            class="border p-2 rounded w-full"
            value={customer().carColor}
            onInput={(e) => handleInputChange("carColor", e.target.value)}
          />
        </div>
        <div>
          <label>کارکرد کیلومتر:</label>
          <input
            type="number"
            class="border p-2 rounded w-full"
            value={customer().mileage}
            onInput={(e) => handleInputChange("mileage", e.target.value)}
          />
        </div>
        <div>
          <label>تاریخ پذیرش:</label>
          <input
            type="date"
            class="border p-2 rounded w-full"
            value={customer().admissionDate}
            onInput={(e) =>
              handleInputChange("admissionDate", e.target.value)
            }
          />
        </div>
        <div>
          <label>تاریخ ورود خودرو:</label>
          <input
            type="date"
            class="border p-2 rounded w-full"
            value={customer().entryDate}
            onInput={(e) => handleInputChange("entryDate", e.target.value)}
          />
        </div>
        <div>
          <label>نوع و مدل خودرو:</label>
          <input
            type="text"
            class="border p-2 rounded w-full"
            value={customer().carModel}
            onInput={(e) => handleInputChange("carModel", e.target.value)}
          />
        </div>
        <div class="flex justify-between mt-4">
          <button
            type="button"
            class="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleSubmit}
          >
            ادامه
          </button>
        </div>
      </form>
    </div>
  );
}