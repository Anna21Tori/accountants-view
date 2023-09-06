import { styled } from "styled-components";

export const DetailsContainer = styled.div<{$type: string}>`
                                        display: flex;
                                        flex-direction: column;
                                        margin-bottom: 24px;
                                        p {
                                            margin: 0;
                                            padding: 0;
                                        }

                                        .title {
                                            font-size: 14px;
                                            line-height: 20px;
                                            font-weight: 400;
                                            color: #54585C
                                        }

                                        .value {
                                            font-size: 16px;
                                            line-height: 24px;
                                            font-weight: 400;
                                            color: #000000;
                                            text-decoration: ${props => props.$type === "EMAIL" ? "underline" : "none"}
                                        }
                                `