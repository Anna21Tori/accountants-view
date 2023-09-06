import { Card, CardHeader } from "@mui/material";
import { styled } from "styled-components";

export const CardItemHeader = styled(CardHeader)`
                            
                            padding: 24px !important;

                            .MuiCardHeader-content {
                                display: flex;
                                flex-direction: column-reverse;
                                width: fit-content;
                            }

                            .MuiCardHeader-subheader {
                                font-size: 16px;
                                color: #54585C;
                                font-weight: 400;
                                line-height: 1.5;
                                letter-spacing: 0px;
                                font-family: "Roboto";
                                width: fit-content;
                            }

                            .MuiCardHeader-title {
                                font-size: 24px;
                                color: #000000;
                                font-weight: 700;
                                line-height: 32px;
                                font-style: normal;
                                letter-spacing: 0px;
                                font-family: "Roboto";
                                width: fit-content;
                            }

                            .MuiAvatar-root {
                                border-radius: 8px;
                            }
                        `
export const CardItemContainer = styled(Card)`

                            border-radius: 16px !important;
                            
                            .MuiCardContent-root {
                                padding: 24px !important;
                                padding-top: 0 !important;
                            }
                        `