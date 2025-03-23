import { MdDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
const Item = ({ item }) => {
  const [count, setCount] = useState(item.quantity);
  const [isVisible, setIsVisible] = useState(true);
  const remove = () => {
    setIsVisible(false);
  };
  const check = () => {
    if (count == 1) {
      setIsVisible(false);
    } else {
      setCount(count - 1);
    }
  };
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="flex flex-row bg-gray-300 rounded-lg shadow-lg h-40 p-2"
          initial={{
            x: 0,
            opacity: 1,
            filter: "blur(10px)",
          }}
          animate={{
            x: 0,
            opacity: 1,
            filter: "blur(0px)",
          }}
          exit={{
            x: -650,
            opacity: 0.5,
            filter: "blur(10px)",
          }}
          transition={{
            duration: 0.2,
          }}
        >
          <div className="flex items-center justify-center w-1/6">
            {/*image*/}
            <img
              src={item.product_pic}
              alt={item.name}
              className="w-24 rounded-md shadow-lg"
            />
          </div>
          <div className="w-5/6 flex flex-col p-3 gap-2">
            {/*info_box*/}
            <div className="flex flex-col items-start">
              <div className="flex flex-row gap-10">
                <span className="hover:underline cursor-pointer hover:text-blue-400 font-heading text-lg">
                  {item.info}
                </span>
                {/* Basic Info */}
                <div className="flex flex-row border-2 border-slate-400 rounded-lg gap-2 items-center px-4 py-1 shadow-md hover:text-blue-200">
                  {/* counter */}
                  <FaMinus
                    size={18}
                    className="cursor-pointer text-blue-400 hover:text-slate-500"
                    onClick={check}
                  />
                  <div className="text-xl font-semibold px-4 text-gray-900">
                    {count}
                  </div>
                  <FaPlus
                    size={18}
                    className="cursor-pointer text-blue-400 hover:text-slate-500"
                    onClick={() => setCount(count + 1)}
                  />
                </div>
              </div>
              <div className="opacity-50 text-sm font-subhead">
                Size: {item.size}
              </div>
              <div className="text-md font-semibold font-subhead ">
                <span className="text-green-700">Price:  </span>
                ₹{count * item.price}
              </div>
            </div>
            <div className="flex w-full justify-end">
              <motion.span
                whileTap={{ scale: 1.2 }}
                whileHover={{ scale: 1.1 }}
                exit={{ scale: 1.5, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MdDelete
                  size={25}
                  className="text-red-600 cursor-pointer hover:text-black"
                  onClick={remove}
                />
              </motion.span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default Item;
