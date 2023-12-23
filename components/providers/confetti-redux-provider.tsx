"use client"
import { useAppDispatch,useAppSelector } from "@/app/redux/hooks";
import ReactConfetti from "react-confetti";
import { RootState } from "@/app/redux/store"; // Replace with the path to your RootState file
import { closeConfetti } from "@/app/redux/slice/confeti-slice";

export const ConfettiProvider = () => {
  const isOpen = useAppSelector((state) => state.confetti.isOpen);
  const dispatch = useAppDispatch();

  if (!isOpen) return null;

  return (
    <ReactConfetti
      className="pointer-events-none z-[100]"
      numberOfPieces={500}
      recycle={false}
      onConfettiComplete={() => {
        dispatch(closeConfetti());
      }}
    />
  );
};
