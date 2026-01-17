import { LucideIcon } from "lucide-react-native";

export interface IButtonProps {
    title: string;
    onPress: () => void;
    icon?: LucideIcon;
    bgColor?: string;
}

export interface IInputBox {
    placeholderText: string;
}