import React from "react"
import { PrimaryButton, SecondaryButton } from "./custom-button.style"


export enum ButtonVariants {
    "PRIMARY" = "PRIMARY",
    "SECONDARY" = "SECONDARY"
}
export type TButtons = {
    [key in ButtonVariants]: (children: React.ReactNode) => React.ReactNode
}
export interface ICustomButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode,
    type?: ButtonVariants
}
const buttons = {
    [ButtonVariants.PRIMARY]: (children: React.ReactNode) => <PrimaryButton variant="contained">{children}</PrimaryButton>,
    [ButtonVariants.SECONDARY]: (children: React.ReactNode) => <SecondaryButton variant="contained">{children}</SecondaryButton>
}
const CustomButton = (props: ICustomButtonProps) => {
    const {children, type} = props;

    const button = type != null ? buttons[type](children): buttons[ButtonVariants.PRIMARY](children);
    return (
        button
    )
}
export default CustomButton