export default function CustomerForm() {
  return (
    <div class="p-4">
      <h1 class="text-2xl mb-4">اطلاعات مشتری و خودرو</h1>
      <form class="space-y-4">
        <div>
          <label>نام:</label>
          <input type="text" class="border p-2 rounded w-full" />
        </div>
        <div>
          <label>نام خانوادگی:</label>
          <input type="text" class="border p-2 rounded w-full" />
        </div>
        <div>
          <label>شماره تماس:</label>
          <input type="text" class="border p-2 rounded w-full" />
        </div>
        <button type="button" class="bg-blue-500 text-white px-4 py-2 rounded">
          ارسال
        </button>
      </form>
    </div>
  );
}