import { Dialog, Transition } from "@headlessui/react";
import { CalculatorIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Fragment, useState } from "react";
import Iitem from "./Iitem";
import { ItemProps } from "..";

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const items: ItemProps[] = [
    { title: "1d", subTitle: "0.91%" },
    { title: "7d", subTitle: "6.37%" },
    { title: "30d", subTitle: "27.33%" },
    { title: "365d(APR)", subTitle: "332.53%" },
  ];

  return (
    <>
      <div className="flex items-center justify-center">
        <button type="button" onClick={openModal} className="">
          <CalculatorIcon className="w-5" />
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-base mb-1 font-medium leading-6 text-gray-900"
                  >
                    <div className="flex flex-row justify-between">
                      <div> ROI</div>
                      <div>
                        <XMarkIcon
                          className="w-6 cursor-pointer"
                          onClick={closeModal}
                        />
                      </div>
                    </div>
                  </Dialog.Title>
                  <div className="p-8 rounded-lg bg-[#f7f7f7]">
                    <div className="flex flex-row justify-between">
                      <div className="text-sm text-[#333333] font-semibold">
                        TIMEFRAME
                      </div>
                      <div className="font-semibold text-sm text-[#333333]">
                        ROI
                      </div>
                    </div>

                    {items?.map((item: ItemProps, index) => (
                      <Iitem
                        key={index}
                        title={item.title}
                        subTitle={item.subTitle}
                      />
                    ))}
                  </div>

                  <div className="mt-4 text-xs text-[#909DB4]">
                    Calculated based on current rates. Compounding 1x
                    daily.Rates are estimates provided for your convenience
                    only,and by no means represent guaranteed returns.
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
