import { useDispatch, useSelector } from "react-redux";
import { onCloseDateModal, onOpenDateModal } from "../store";

export const useUiStore = () => {
  const dispatch = useDispatch();
  const { isDateModalOpen } = useSelector((state) => state.ui);

  const OpenDateModal = () => {
    dispatch(onOpenDateModal());
  };

  const CloseDateModal = () => {
    dispatch(onCloseDateModal());
  };

  const toogleDateModal = () => {
    isDateModalOpen ? OpenDateModal() : CloseDateModal();
  };

  return {
    //*Properties
    isDateModalOpen,
    //*Methods
    OpenDateModal,
    CloseDateModal,
    toogleDateModal,
  };
};
