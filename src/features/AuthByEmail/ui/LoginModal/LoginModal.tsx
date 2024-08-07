import { Modal } from "shared/ui/Modal/Modal";
import cn from "classnames";
import { LoginForm } from "../LoginForm/LoginForm";

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    collapsed: boolean;
    onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => (
    <Modal className={cn("", {}, [className])} isOpen={isOpen} onClose={onClose} lazy>
        <LoginForm />
    </Modal>
);
