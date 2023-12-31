import React from "react"
import { PrimaryButton, SecondaryButton } from "./custom-button.style"

export type OnClickType = React.MouseEventHandler<HTMLButtonElement> | undefined
export enum ButtonVariants {
    "PRIMARY" = "PRIMARY",
    "SECONDARY" = "SECONDARY"
}
export type ButtonsType = {
    [key in ButtonVariants]: (children: React.ReactNode, onClick: OnClickType) => JSX.Element
}
export interface ICustomButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode,
    type?: ButtonVariants
}
const buttons: ButtonsType = {
    [ButtonVariants.PRIMARY]: (children: React.ReactNode, onClick: OnClickType) => <PrimaryButton data-testid="custom-btn" variant="contained" onClick={onClick}>{children}</PrimaryButton>,
    [ButtonVariants.SECONDARY]: (children: React.ReactNode, onClick: OnClickType) => <SecondaryButton data-testid="custom-btn" variant="contained" onClick={onClick}>{children}</SecondaryButton>
}
const CustomButton = (props: ICustomButtonProps) => {
    const {children, type, onClick} = props;

    const button = type != null ? buttons[type](children, onClick): buttons[ButtonVariants.PRIMARY](children, onClick);
    return (
        button
    )
}
export default CustomButton