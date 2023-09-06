import { Button } from "@mui/material";
import { styled } from "styled-components";

export const PrimaryButton = styled(Button)`
                                background-color: rgba(30,136,229,1) !important;
                                                                    
                                text-align: left !important;
                                line-height: 20px !important;
                                border-radius: 8px !important;
                                
                                color: #E3F2FD !important;
                                font-size: 14px !important;
                                font-weight: 500 !important;
                                font-style: normal !important;
                                letter-spacing: 0px !important;
                                box-shadow: none !important;
                                text-transform: none !important;
                            `

export const SecondaryButton = styled(PrimaryButton)`
                                background-color: #E3F2FD !important;
                                color: rgba(30,136,229,1) !important;      
                            `