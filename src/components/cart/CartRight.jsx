import ButtonDef from "../ui/ButtonDef";
const CartRight = () => {
  let pp = 10000;
  let disc = 900;
  return (
    <div className="w-1/2 flex flex-col p-4 overflow-hidden h-screen bg-gray-200">
      <div className="w-full flex items-start text-2xl font-heading font-semibold border-b-2 border-gray-600">
        <h1>PRICE DETAILS</h1>
      </div>
      <ol className="flex flex-col gap-6 py-5 ">
        <li>
          <div className="flex flex-row gap-56 text-lg font-subhead w-full">
            <div className="w-1/2 flex justify-start px-5 font-semibold">
              Original Price
                 
            </div>
            <div className="w-1/2 flex justify-start">₹{pp}</div>
          </div>
        </li>
        <li>
          <div className="flex flex-row gap-56 text-lg font-subhead">
            <div className="w-1/2 flex justify-start px-5 text-red-500 font-semibold">
              GST(18%)
            </div>
            <div className="w-1/2 flex justify-start">₹{0.18 * pp}</div>
          </div>
        </li>
        <li>
          <div className="flex flex-row gap-56 text-lg font-subhead">
            <div className="w-1/2 flex justify-start px-5 text-green-500 font-semibold">
              Discount
            </div>
            <div className="w-1/2 flex justify-start">₹{disc}</div>
          </div>
        </li>
        <li>
          <div className="flex flex-row gap-56 text-lg font-subhead border-y-2 border-gray-300 border-dashed ">
            <div className="w-1/2 flex justify-start px-5 font-semibold">
              Total Price
            </div>
            <div className="w-1/2 flex justify-start">
              {pp + 0.18 * pp - disc}
            </div>
          </div>
        </li>
      </ol>
      <div className="w-full flex justify-end px-10">
        <ButtonDef
          text="Pay"
          className="flex w-1/6 justify-center bg-violet-950 text-gray-200 hover:bg-gray-200 hover:text-violet-950 transition-all duration-75 hover:shadow-lg shadow-blue-800"
        />
      </div>
    </div>
  );
};
export default CartRight;
