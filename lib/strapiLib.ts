/**
 * DOCUMENTATION
 * 1.0.0
 * DO NOT MODIFY - This file has been generated using oazapfts.
 * See https://www.npmjs.com/package/oazapfts
 */
import * as Oazapfts from "oazapfts/lib/runtime";
import * as QS from "oazapfts/lib/runtime/query";
export const defaults: Oazapfts.RequestOpts = {
    baseUrl: "http://localhost:1337",
};
const oazapfts = Oazapfts.runtime(defaults);
export const servers = {
    developmentServer: "http://localhost:1337",
    stagingServer: "YOUR_STAGING_SERVER",
    productionServer: "YOUR_PRODUCTION_SERVER"
};
export type AboutListResponse = {
    data?: {
        id?: string;
        attributes?: {
            title?: string;
            avatar?: {
                data?: {
                    id?: string;
                    attributes?: {
                        name?: string;
                        alternativeText?: string;
                        caption?: string;
                        width?: number;
                        height?: number;
                        formats?: any;
                        hash?: string;
                        ext?: string;
                        mime?: string;
                        size?: number;
                        url?: string;
                        previewUrl?: string;
                        provider?: string;
                        provider_metadata?: any;
                        related?: {
                            data?: {
                                id?: string;
                                attributes?: {};
                            }[];
                        };
                        folder?: {
                            data?: {
                                id?: string;
                                attributes?: {
                                    name?: string;
                                    pathId?: number;
                                    parent?: {
                                        data?: {
                                            id?: string;
                                            attributes?: {};
                                        };
                                    };
                                    children?: {
                                        data?: {
                                            id?: string;
                                            attributes?: {};
                                        }[];
                                    };
                                    files?: {
                                        data?: {
                                            id?: string;
                                            attributes?: {
                                                name?: string;
                                                alternativeText?: string;
                                                caption?: string;
                                                width?: number;
                                                height?: number;
                                                formats?: any;
                                                hash?: string;
                                                ext?: string;
                                                mime?: string;
                                                size?: number;
                                                url?: string;
                                                previewUrl?: string;
                                                provider?: string;
                                                provider_metadata?: any;
                                                related?: {
                                                    data?: {
                                                        id?: string;
                                                        attributes?: {};
                                                    }[];
                                                };
                                                folder?: {
                                                    data?: {
                                                        id?: string;
                                                        attributes?: {};
                                                    };
                                                };
                                                folderPath?: string;
                                                createdAt?: string;
                                                updatedAt?: string;
                                                createdBy?: {
                                                    data?: {
                                                        id?: string;
                                                        attributes?: {
                                                            firstname?: string;
                                                            lastname?: string;
                                                            username?: string;
                                                            email?: string;
                                                            resetPasswordToken?: string;
                                                            registrationToken?: string;
                                                            isActive?: boolean;
                                                            roles?: {
                                                                data?: {
                                                                    id?: string;
                                                                    attributes?: {
                                                                        name?: string;
                                                                        code?: string;
                                                                        description?: string;
                                                                        users?: {
                                                                            data?: {
                                                                                id?: string;
                                                                                attributes?: {};
                                                                            }[];
                                                                        };
                                                                        permissions?: {
                                                                            data?: {
                                                                                id?: string;
                                                                                attributes?: {
                                                                                    action?: string;
                                                                                    subject?: string;
                                                                                    properties?: any;
                                                                                    conditions?: any;
                                                                                    role?: {
                                                                                        data?: {
                                                                                            id?: string;
                                                                                            attributes?: {};
                                                                                        };
                                                                                    };
                                                                                    createdAt?: string;
                                                                                    updatedAt?: string;
                                                                                    createdBy?: {
                                                                                        data?: {
                                                                                            id?: string;
                                                                                            attributes?: {};
                                                                                        };
                                                                                    };
                                                                                    updatedBy?: {
                                                                                        data?: {
                                                                                            id?: string;
                                                                                            attributes?: {};
                                                                                        };
                                                                                    };
                                                                                };
                                                                            }[];
                                                                        };
                                                                        createdAt?: string;
                                                                        updatedAt?: string;
                                                                        createdBy?: {
                                                                            data?: {
                                                                                id?: string;
                                                                                attributes?: {};
                                                                            };
                                                                        };
                                                                        updatedBy?: {
                                                                            data?: {
                                                                                id?: string;
                                                                                attributes?: {};
                                                                            };
                                                                        };
                                                                    };
                                                                }[];
                                                            };
                                                            blocked?: boolean;
                                                            preferedLanguage?: string;
                                                            createdAt?: string;
                                                            updatedAt?: string;
                                                            createdBy?: {
                                                                data?: {
                                                                    id?: string;
                                                                    attributes?: {};
                                                                };
                                                            };
                                                            updatedBy?: {
                                                                data?: {
                                                                    id?: string;
                                                                    attributes?: {};
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                                updatedBy?: {
                                                    data?: {
                                                        id?: string;
                                                        attributes?: {};
                                                    };
                                                };
                                            };
                                        }[];
                                    };
                                    path?: string;
                                    createdAt?: string;
                                    updatedAt?: string;
                                    createdBy?: {
                                        data?: {
                                            id?: string;
                                            attributes?: {};
                                        };
                                    };
                                    updatedBy?: {
                                        data?: {
                                            id?: string;
                                            attributes?: {};
                                        };
                                    };
                                };
                            };
                        };
                        folderPath?: string;
                        createdAt?: string;
                        updatedAt?: string;
                        createdBy?: {
                            data?: {
                                id?: string;
                                attributes?: {};
                            };
                        };
                        updatedBy?: {
                            data?: {
                                id?: string;
                                attributes?: {};
                            };
                        };
                    };
                };
            };
            discription?: string;
            createdAt?: string;
            updatedAt?: string;
            publishedAt?: string;
            createdBy?: {
                data?: {
                    id?: string;
                    attributes?: {
                        firstname?: string;
                        lastname?: string;
                        username?: string;
                        email?: string;
                        resetPasswordToken?: string;
                        registrationToken?: string;
                        isActive?: boolean;
                        roles?: {
                            data?: {
                                id?: string;
                                attributes?: {
                                    name?: string;
                                    code?: string;
                                    description?: string;
                                    users?: {
                                        data?: {
                                            id?: string;
                                            attributes?: {};
                                        }[];
                                    };
                                    permissions?: {
                                        data?: {
                                            id?: string;
                                            attributes?: {
                                                action?: string;
                                                subject?: string;
                                                properties?: any;
                                                conditions?: any;
                                                role?: {
                                                    data?: {
                                                        id?: string;
                                                        attributes?: {};
                                                    };
                                                };
                                                createdAt?: string;
                                                updatedAt?: string;
                                                createdBy?: {
                                                    data?: {
                                                        id?: string;
                                                        attributes?: {};
                                                    };
                                                };
                                                updatedBy?: {
                                                    data?: {
                                                        id?: string;
                                                        attributes?: {};
                                                    };
                                                };
                                            };
                                        }[];
                                    };
                                    createdAt?: string;
                                    updatedAt?: string;
                                    createdBy?: {
                                        data?: {
                                            id?: string;
                                            attributes?: {};
                                        };
                                    };
                                    updatedBy?: {
                                        data?: {
                                            id?: string;
                                            attributes?: {};
                                        };
                                    };
                                };
                            }[];
                        };
                        blocked?: boolean;
                        preferedLanguage?: string;
                        createdAt?: string;
                        updatedAt?: string;
                        createdBy?: {
                            data?: {
                                id?: string;
                                attributes?: {};
                            };
                        };
                        updatedBy?: {
                            data?: {
                                id?: string;
                                attributes?: {};
                            };
                        };
                    };
                };
            };
            updatedBy?: {
                data?: {
                    id?: string;
                    attributes?: {};
                };
            };
        };
    }[];
    meta?: {
        pagination?: {
            page?: number;
            pageSize?: number;
            pageCount?: number;
            total?: number;
        };
    };
};
export type Error = {
    data?: (object | any[]) | null;
    error: {
        status?: number;
        name?: string;
        message?: string;
        details?: object;
    };
};
export type AboutRequest = {
    data: {
        title?: string;
        avatar?: number | string;
        discription?: string;
    };
};
export type AboutResponse = {
    data?: {
        id?: string;
        attributes?: {
            title?: string;
            avatar?: {
                data?: {
                    id?: string;
                    attributes?: {
                        name?: string;
                        alternativeText?: string;
                        caption?: string;
                        width?: number;
                        height?: number;
                        formats?: any;
                        hash?: string;
                        ext?: string;
                        mime?: string;
                        size?: number;
                        url?: string;
                        previewUrl?: string;
                        provider?: string;
                        provider_metadata?: any;
                        related?: {
                            data?: {
                                id?: string;
                                attributes?: {};
                            }[];
                        };
                        folder?: {
                            data?: {
                                id?: string;
                                attributes?: {
                                    name?: string;
                                    pathId?: number;
                                    parent?: {
                                        data?: {
                                            id?: string;
                                            attributes?: {};
                                        };
                                    };
                                    children?: {
                                        data?: {
                                            id?: string;
                                            attributes?: {};
                                        }[];
                                    };
                                    files?: {
                                        data?: {
                                            id?: string;
                                            attributes?: {
                                                name?: string;
                                                alternativeText?: string;
                                                caption?: string;
                                                width?: number;
                                                height?: number;
                                                formats?: any;
                                                hash?: string;
                                                ext?: string;
                                                mime?: string;
                                                size?: number;
                                                url?: string;
                                                previewUrl?: string;
                                                provider?: string;
                                                provider_metadata?: any;
                                                related?: {
                                                    data?: {
                                                        id?: string;
                                                        attributes?: {};
                                                    }[];
                                                };
                                                folder?: {
                                                    data?: {
                                                        id?: string;
                                                        attributes?: {};
                                                    };
                                                };
                                                folderPath?: string;
                                                createdAt?: string;
                                                updatedAt?: string;
                                                createdBy?: {
                                                    data?: {
                                                        id?: string;
                                                        attributes?: {
                                                            firstname?: string;
                                                            lastname?: string;
                                                            username?: string;
                                                            email?: string;
                                                            resetPasswordToken?: string;
                                                            registrationToken?: string;
                                                            isActive?: boolean;
                                                            roles?: {
                                                                data?: {
                                                                    id?: string;
                                                                    attributes?: {
                                                                        name?: string;
                                                                        code?: string;
                                                                        description?: string;
                                                                        users?: {
                                                                            data?: {
                                                                                id?: string;
                                                                                attributes?: {};
                                                                            }[];
                                                                        };
                                                                        permissions?: {
                                                                            data?: {
                                                                                id?: string;
                                                                                attributes?: {
                                                                                    action?: string;
                                                                                    subject?: string;
                                                                                    properties?: any;
                                                                                    conditions?: any;
                                                                                    role?: {
                                                                                        data?: {
                                                                                            id?: string;
                                                                                            attributes?: {};
                                                                                        };
                                                                                    };
                                                                                    createdAt?: string;
                                                                                    updatedAt?: string;
                                                                                    createdBy?: {
                                                                                        data?: {
                                                                                            id?: string;
                                                                                            attributes?: {};
                                                                                        };
                                                                                    };
                                                                                    updatedBy?: {
                                                                                        data?: {
                                                                                            id?: string;
                                                                                            attributes?: {};
                                                                                        };
                                                                                    };
                                                                                };
                                                                            }[];
                                                                        };
                                                                        createdAt?: string;
                                                                        updatedAt?: string;
                                                                        createdBy?: {
                                                                            data?: {
                                                                                id?: string;
                                                                                attributes?: {};
                                                                            };
                                                                        };
                                                                        updatedBy?: {
                                                                            data?: {
                                                                                id?: string;
                                                                                attributes?: {};
                                                                            };
                                                                        };
                                                                    };
                                                                }[];
                                                            };
                                                            blocked?: boolean;
                                                            preferedLanguage?: string;
                                                            createdAt?: string;
                                                            updatedAt?: string;
                                                            createdBy?: {
                                                                data?: {
                                                                    id?: string;
                                                                    attributes?: {};
                                                                };
                                                            };
                                                            updatedBy?: {
                                                                data?: {
                                                                    id?: string;
                                                                    attributes?: {};
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                                updatedBy?: {
                                                    data?: {
                                                        id?: string;
                                                        attributes?: {};
                                                    };
                                                };
                                            };
                                        }[];
                                    };
                                    path?: string;
                                    createdAt?: string;
                                    updatedAt?: string;
                                    createdBy?: {
                                        data?: {
                                            id?: string;
                                            attributes?: {};
                                        };
                                    };
                                    updatedBy?: {
                                        data?: {
                                            id?: string;
                                            attributes?: {};
                                        };
                                    };
                                };
                            };
                        };
                        folderPath?: string;
                        createdAt?: string;
                        updatedAt?: string;
                        createdBy?: {
                            data?: {
                                id?: string;
                                attributes?: {};
                            };
                        };
                        updatedBy?: {
                            data?: {
                                id?: string;
                                attributes?: {};
                            };
                        };
                    };
                };
            };
            discription?: string;
            createdAt?: string;
            updatedAt?: string;
            publishedAt?: string;
            createdBy?: {
                data?: {
                    id?: string;
                    attributes?: {
                        firstname?: string;
                        lastname?: string;
                        username?: string;
                        email?: string;
                        resetPasswordToken?: string;
                        registrationToken?: string;
                        isActive?: boolean;
                        roles?: {
                            data?: {
                                id?: string;
                                attributes?: {
                                    name?: string;
                                    code?: string;
                                    description?: string;
                                    users?: {
                                        data?: {
                                            id?: string;
                                            attributes?: {};
                                        }[];
                                    };
                                    permissions?: {
                                        data?: {
                                            id?: string;
                                            attributes?: {
                                                action?: string;
                                                subject?: string;
                                                properties?: any;
                                                conditions?: any;
                                                role?: {
                                                    data?: {
                                                        id?: string;
                                                        attributes?: {};
                                                    };
                                                };
                                                createdAt?: string;
                                                updatedAt?: string;
                                                createdBy?: {
                                                    data?: {
                                                        id?: string;
                                                        attributes?: {};
                                                    };
                                                };
                                                updatedBy?: {
                                                    data?: {
                                                        id?: string;
                                                        attributes?: {};
                                                    };
                                                };
                                            };
                                        }[];
                                    };
                                    createdAt?: string;
                                    updatedAt?: string;
                                    createdBy?: {
                                        data?: {
                                            id?: string;
                                            attributes?: {};
                                        };
                                    };
                                    updatedBy?: {
                                        data?: {
                                            id?: string;
                                            attributes?: {};
                                        };
                                    };
                                };
                            }[];
                        };
                        blocked?: boolean;
                        preferedLanguage?: string;
                        createdAt?: string;
                        updatedAt?: string;
                        createdBy?: {
                            data?: {
                                id?: string;
                                attributes?: {};
                            };
                        };
                        updatedBy?: {
                            data?: {
                                id?: string;
                                attributes?: {};
                            };
                        };
                    };
                };
            };
            updatedBy?: {
                data?: {
                    id?: string;
                    attributes?: {};
                };
            };
        };
    };
    meta?: object;
};
export type CatagoryListResponse = {
    data?: {
        id?: string;
        attributes?: {
            name?: string;
            discription?: string;
            url?: string;
            createdAt?: string;
            updatedAt?: string;
            publishedAt?: string;
            createdBy?: {
                data?: {
                    id?: string;
                    attributes?: {
                        firstname?: string;
                        lastname?: string;
                        username?: string;
                        email?: string;
                        resetPasswordToken?: string;
                        registrationToken?: string;
                        isActive?: boolean;
                        roles?: {
                            data?: {
                                id?: string;
                                attributes?: {
                                    name?: string;
                                    code?: string;
                                    description?: string;
                                    users?: {
                                        data?: {
                                            id?: string;
                                            attributes?: {};
                                        }[];
                                    };
                                    permissions?: {
                                        data?: {
                                            id?: string;
                                            attributes?: {
                                                action?: string;
                                                subject?: string;
                                                properties?: any;
                                                conditions?: any;
                                                role?: {
                                                    data?: {
                                                        id?: string;
                                                        attributes?: {};
                                                    };
                                                };
                                                createdAt?: string;
                                                updatedAt?: string;
                                                createdBy?: {
                                                    data?: {
                                                        id?: string;
                                                        attributes?: {};
                                                    };
                                                };
                                                updatedBy?: {
                                                    data?: {
                                                        id?: string;
                                                        attributes?: {};
                                                    };
                                                };
                                            };
                                        }[];
                                    };
                                    createdAt?: string;
                                    updatedAt?: string;
                                    createdBy?: {
                                        data?: {
                                            id?: string;
                                            attributes?: {};
                                        };
                                    };
                                    updatedBy?: {
                                        data?: {
                                            id?: string;
                                            attributes?: {};
                                        };
                                    };
                                };
                            }[];
                        };
                        blocked?: boolean;
                        preferedLanguage?: string;
                        createdAt?: string;
                        updatedAt?: string;
                        createdBy?: {
                            data?: {
                                id?: string;
                                attributes?: {};
                            };
                        };
                        updatedBy?: {
                            data?: {
                                id?: string;
                                attributes?: {};
                            };
                        };
                    };
                };
            };
            updatedBy?: {
                data?: {
                    id?: string;
                    attributes?: {};
                };
            };
        };
    }[];
    meta?: {
        pagination?: {
            page?: number;
            pageSize?: number;
            pageCount?: number;
            total?: number;
        };
    };
};
export type CatagoryRequest = {
    data: {
        name?: string;
        discription?: string;
        url: string;
    };
};
export type CatagoryResponse = {
    data?: {
        id?: string;
        attributes?: {
            name?: string;
            discription?: string;
            url?: string;
            createdAt?: string;
            updatedAt?: string;
            publishedAt?: string;
            createdBy?: {
                data?: {
                    id?: string;
                    attributes?: {
                        firstname?: string;
                        lastname?: string;
                        username?: string;
                        email?: string;
                        resetPasswordToken?: string;
                        registrationToken?: string;
                        isActive?: boolean;
                        roles?: {
                            data?: {
                                id?: string;
                                attributes?: {
                                    name?: string;
                                    code?: string;
                                    description?: string;
                                    users?: {
                                        data?: {
                                            id?: string;
                                            attributes?: {};
                                        }[];
                                    };
                                    permissions?: {
                                        data?: {
                                            id?: string;
                                            attributes?: {
                                                action?: string;
                                                subject?: string;
                                                properties?: any;
                                                conditions?: any;
                                                role?: {
                                                    data?: {
                                                        id?: string;
                                                        attributes?: {};
                                                    };
                                                };
                                                createdAt?: string;
                                                updatedAt?: string;
                                                createdBy?: {
                                                    data?: {
                                                        id?: string;
                                                        attributes?: {};
                                                    };
                                                };
                                                updatedBy?: {
                                                    data?: {
                                                        id?: string;
                                                        attributes?: {};
                                                    };
                                                };
                                            };
                                        }[];
                                    };
                                    createdAt?: string;
                                    updatedAt?: string;
                                    createdBy?: {
                                        data?: {
                                            id?: string;
                                            attributes?: {};
                                        };
                                    };
                                    updatedBy?: {
                                        data?: {
                                            id?: string;
                                            attributes?: {};
                                        };
                                    };
                                };
                            }[];
                        };
                        blocked?: boolean;
                        preferedLanguage?: string;
                        createdAt?: string;
                        updatedAt?: string;
                        createdBy?: {
                            data?: {
                                id?: string;
                                attributes?: {};
                            };
                        };
                        updatedBy?: {
                            data?: {
                                id?: string;
                                attributes?: {};
                            };
                        };
                    };
                };
            };
            updatedBy?: {
                data?: {
                    id?: string;
                    attributes?: {};
                };
            };
        };
    };
    meta?: object;
};
export type FeedbackListResponse = {
    data?: {
        id?: string;
        attributes?: {
            name?: string;
            email?: string;
            message?: string;
            ipAddress?: string;
            createdAt?: string;
            updatedAt?: string;
            publishedAt?: string;
            createdBy?: {
                data?: {
                    id?: string;
                    attributes?: {
                        firstname?: string;
                        lastname?: string;
                        username?: string;
                        email?: string;
                        resetPasswordToken?: string;
                        registrationToken?: string;
                        isActive?: boolean;
                        roles?: {
                            data?: {
                                id?: string;
                                attributes?: {
                                    name?: string;
                                    code?: string;
                                    description?: string;
                                    users?: {
                                        data?: {
                                            id?: string;
                                            attributes?: {};
                                        }[];
                                    };
                                    permissions?: {
                                        data?: {
                                            id?: string;
                                            attributes?: {
                                                action?: string;
                                                subject?: string;
                                                properties?: any;
                                                conditions?: any;
                                                role?: {
                                                    data?: {
                                                        id?: string;
                                                        attributes?: {};
                                                    };
                                                };
                                                createdAt?: string;
                                                updatedAt?: string;
                                                createdBy?: {
                                                    data?: {
                                                        id?: string;
                                                        attributes?: {};
                                                    };
                                                };
                                                updatedBy?: {
                                                    data?: {
                                                        id?: string;
                                                        attributes?: {};
                                                    };
                                                };
                                            };
                                        }[];
                                    };
                                    createdAt?: string;
                                    updatedAt?: string;
                                    createdBy?: {
                                        data?: {
                                            id?: string;
                                            attributes?: {};
                                        };
                                    };
                                    updatedBy?: {
                                        data?: {
                                            id?: string;
                                            attributes?: {};
                                        };
                                    };
                                };
                            }[];
                        };
                        blocked?: boolean;
                        preferedLanguage?: string;
                        createdAt?: string;
                        updatedAt?: string;
                        createdBy?: {
                            data?: {
                                id?: string;
                                attributes?: {};
                            };
                        };
                        updatedBy?: {
                            data?: {
                                id?: string;
                                attributes?: {};
                            };
                        };
                    };
                };
            };
            updatedBy?: {
                data?: {
                    id?: string;
                    attributes?: {};
                };
            };
        };
    }[];
    meta?: {
        pagination?: {
            page?: number;
            pageSize?: number;
            pageCount?: number;
            total?: number;
        };
    };
};
export type FeedbackRequest = {
    data: {
        name?: string;
        email?: string;
        message?: string;
        ipAddress?: string;
    };
};
export type FeedbackResponse = {
    data?: {
        id?: string;
        attributes?: {
            name?: string;
            email?: string;
            message?: string;
            ipAddress?: string;
            createdAt?: string;
            updatedAt?: string;
            publishedAt?: string;
            createdBy?: {
                data?: {
                    id?: string;
                    attributes?: {
                        firstname?: string;
                        lastname?: string;
                        username?: string;
                        email?: string;
                        resetPasswordToken?: string;
                        registrationToken?: string;
                        isActive?: boolean;
                        roles?: {
                            data?: {
                                id?: string;
                                attributes?: {
                                    name?: string;
                                    code?: string;
                                    description?: string;
                                    users?: {
                                        data?: {
                                            id?: string;
                                            attributes?: {};
                                        }[];
                                    };
                                    permissions?: {
                                        data?: {
                                            id?: string;
                                            attributes?: {
                                                action?: string;
                                                subject?: string;
                                                properties?: any;
                                                conditions?: any;
                                                role?: {
                                                    data?: {
                                                        id?: string;
                                                        attributes?: {};
                                                    };
                                                };
                                                createdAt?: string;
                                                updatedAt?: string;
                                                createdBy?: {
                                                    data?: {
                                                        id?: string;
                                                        attributes?: {};
                                                    };
                                                };
                                                updatedBy?: {
                                                    data?: {
                                                        id?: string;
                                                        attributes?: {};
                                                    };
                                                };
                                            };
                                        }[];
                                    };
                                    createdAt?: string;
                                    updatedAt?: string;
                                    createdBy?: {
                                        data?: {
                                            id?: string;
                                            attributes?: {};
                                        };
                                    };
                                    updatedBy?: {
                                        data?: {
                                            id?: string;
                                            attributes?: {};
                                        };
                                    };
                                };
                            }[];
                        };
                        blocked?: boolean;
                        preferedLanguage?: string;
                        createdAt?: string;
                        updatedAt?: string;
                        createdBy?: {
                            data?: {
                                id?: string;
                                attributes?: {};
                            };
                        };
                        updatedBy?: {
                            data?: {
                                id?: string;
                                attributes?: {};
                            };
                        };
                    };
                };
            };
            updatedBy?: {
                data?: {
                    id?: string;
                    attributes?: {};
                };
            };
        };
    };
    meta?: object;
};
export type PortfolioMessageListResponse = {
    data?: {
        id?: string;
        attributes?: {
            name?: string;
            email?: string;
            message?: string;
            createdAt?: string;
            updatedAt?: string;
            publishedAt?: string;
            createdBy?: {
                data?: {
                    id?: string;
                    attributes?: {
                        firstname?: string;
                        lastname?: string;
                        username?: string;
                        email?: string;
                        resetPasswordToken?: string;
                        registrationToken?: string;
                        isActive?: boolean;
                        roles?: {
                            data?: {
                                id?: string;
                                attributes?: {
                                    name?: string;
                                    code?: string;
                                    description?: string;
                                    users?: {
                                        data?: {
                                            id?: string;
                                            attributes?: {};
                                        }[];
                                    };
                                    permissions?: {
                                        data?: {
                                            id?: string;
                                            attributes?: {
                                                action?: string;
                                                subject?: string;
                                                properties?: any;
                                                conditions?: any;
                                                role?: {
                                                    data?: {
                                                        id?: string;
                                                        attributes?: {};
                                                    };
                                                };
                                                createdAt?: string;
                                                updatedAt?: string;
                                                createdBy?: {
                                                    data?: {
                                                        id?: string;
                                                        attributes?: {};
                                                    };
                                                };
                                                updatedBy?: {
                                                    data?: {
                                                        id?: string;
                                                        attributes?: {};
                                                    };
                                                };
                                            };
                                        }[];
                                    };
                                    createdAt?: string;
                                    updatedAt?: string;
                                    createdBy?: {
                                        data?: {
                                            id?: string;
                                            attributes?: {};
                                        };
                                    };
                                    updatedBy?: {
                                        data?: {
                                            id?: string;
                                            attributes?: {};
                                        };
                                    };
                                };
                            }[];
                        };
                        blocked?: boolean;
                        preferedLanguage?: string;
                        createdAt?: string;
                        updatedAt?: string;
                        createdBy?: {
                            data?: {
                                id?: string;
                                attributes?: {};
                            };
                        };
                        updatedBy?: {
                            data?: {
                                id?: string;
                                attributes?: {};
                            };
                        };
                    };
                };
            };
            updatedBy?: {
                data?: {
                    id?: string;
                    attributes?: {};
                };
            };
        };
    }[];
    meta?: {
        pagination?: {
            page?: number;
            pageSize?: number;
            pageCount?: number;
            total?: number;
        };
    };
};
export type PortfolioMessageRequest = {
    data: {
        name: string;
        email: string;
        message: string;
    };
};
export type PortfolioMessageResponse = {
    data?: {
        id?: string;
        attributes?: {
            name?: string;
            email?: string;
            message?: string;
            createdAt?: string;
            updatedAt?: string;
            publishedAt?: string;
            createdBy?: {
                data?: {
                    id?: string;
                    attributes?: {
                        firstname?: string;
                        lastname?: string;
                        username?: string;
                        email?: string;
                        resetPasswordToken?: string;
                        registrationToken?: string;
                        isActive?: boolean;
                        roles?: {
                            data?: {
                                id?: string;
                                attributes?: {
                                    name?: string;
                                    code?: string;
                                    description?: string;
                                    users?: {
                                        data?: {
                                            id?: string;
                                            attributes?: {};
                                        }[];
                                    };
                                    permissions?: {
                                        data?: {
                                            id?: string;
                                            attributes?: {
                                                action?: string;
                                                subject?: string;
                                                properties?: any;
                                                conditions?: any;
                                                role?: {
                                                    data?: {
                                                        id?: string;
                                                        attributes?: {};
                                                    };
                                                };
                                                createdAt?: string;
                                                updatedAt?: string;
                                                createdBy?: {
                                                    data?: {
                                                        id?: string;
                                                        attributes?: {};
                                                    };
                                                };
                                                updatedBy?: {
                                                    data?: {
                                                        id?: string;
                                                        attributes?: {};
                                                    };
                                                };
                                            };
                                        }[];
                                    };
                                    createdAt?: string;
                                    updatedAt?: string;
                                    createdBy?: {
                                        data?: {
                                            id?: string;
                                            attributes?: {};
                                        };
                                    };
                                    updatedBy?: {
                                        data?: {
                                            id?: string;
                                            attributes?: {};
                                        };
                                    };
                                };
                            }[];
                        };
                        blocked?: boolean;
                        preferedLanguage?: string;
                        createdAt?: string;
                        updatedAt?: string;
                        createdBy?: {
                            data?: {
                                id?: string;
                                attributes?: {};
                            };
                        };
                        updatedBy?: {
                            data?: {
                                id?: string;
                                attributes?: {};
                            };
                        };
                    };
                };
            };
            updatedBy?: {
                data?: {
                    id?: string;
                    attributes?: {};
                };
            };
        };
    };
    meta?: object;
};
export type PostListResponse = {
    data?: {
        id?: string;
        attributes?: {
            Images?: {
                data?: {
                    id?: string;
                    attributes?: {
                        name?: string;
                        alternativeText?: string;
                        caption?: string;
                        width?: number;
                        height?: number;
                        formats?: any;
                        hash?: string;
                        ext?: string;
                        mime?: string;
                        size?: number;
                        url?: string;
                        previewUrl?: string;
                        provider?: string;
                        provider_metadata?: any;
                        related?: {
                            data?: {
                                id?: string;
                                attributes?: {};
                            }[];
                        };
                        folder?: {
                            data?: {
                                id?: string;
                                attributes?: {
                                    name?: string;
                                    pathId?: number;
                                    parent?: {
                                        data?: {
                                            id?: string;
                                            attributes?: {};
                                        };
                                    };
                                    children?: {
                                        data?: {
                                            id?: string;
                                            attributes?: {};
                                        }[];
                                    };
                                    files?: {
                                        data?: {
                                            id?: string;
                                            attributes?: {
                                                name?: string;
                                                alternativeText?: string;
                                                caption?: string;
                                                width?: number;
                                                height?: number;
                                                formats?: any;
                                                hash?: string;
                                                ext?: string;
                                                mime?: string;
                                                size?: number;
                                                url?: string;
                                                previewUrl?: string;
                                                provider?: string;
                                                provider_metadata?: any;
                                                related?: {
                                                    data?: {
                                                        id?: string;
                                                        attributes?: {};
                                                    }[];
                                                };
                                                folder?: {
                                                    data?: {
                                                        id?: string;
                                                        attributes?: {};
                                                    };
                                                };
                                                folderPath?: string;
                                                createdAt?: string;
                                                updatedAt?: string;
                                                createdBy?: {
                                                    data?: {
                                                        id?: string;
                                                        attributes?: {
                                                            firstname?: string;
                                                            lastname?: string;
                                                            username?: string;
                                                            email?: string;
                                                            resetPasswordToken?: string;
                                                            registrationToken?: string;
                                                            isActive?: boolean;
                                                            roles?: {
                                                                data?: {
                                                                    id?: string;
                                                                    attributes?: {
                                                                        name?: string;
                                                                        code?: string;
                                                                        description?: string;
                                                                        users?: {
                                                                            data?: {
                                                                                id?: string;
                                                                                attributes?: {};
                                                                            }[];
                                                                        };
                                                                        permissions?: {
                                                                            data?: {
                                                                                id?: string;
                                                                                attributes?: {
                                                                                    action?: string;
                                                                                    subject?: string;
                                                                                    properties?: any;
                                                                                    conditions?: any;
                                                                                    role?: {
                                                                                        data?: {
                                                                                            id?: string;
                                                                                            attributes?: {};
                                                                                        };
                                                                                    };
                                                                                    createdAt?: string;
                                                                                    updatedAt?: string;
                                                                                    createdBy?: {
                                                                                        data?: {
                                                                                            id?: string;
                                                                                            attributes?: {};
                                                                                        };
                                                                                    };
                                                                                    updatedBy?: {
                                                                                        data?: {
                                                                                            id?: string;
                                                                                            attributes?: {};
                                                                                        };
                                                                                    };
                                                                                };
                                                                            }[];
                                                                        };
                                                                        createdAt?: string;
                                                                        updatedAt?: string;
                                                                        createdBy?: {
                                                                            data?: {
                                                                                id?: string;
                                                                                attributes?: {};
                                                                            };
                                                                        };
                                                                        updatedBy?: {
                                                                            data?: {
                                                                                id?: string;
                                                                                attributes?: {};
                                                                            };
                                                                        };
                                                                    };
                                                                }[];
                                                            };
                                                            blocked?: boolean;
                                                            preferedLanguage?: string;
                                                            createdAt?: string;
                                                            updatedAt?: string;
                                                            createdBy?: {
                                                                data?: {
                                                                    id?: string;
                                                                    attributes?: {};
                                                                };
                                                            };
                                                            updatedBy?: {
                                                                data?: {
                                                                    id?: string;
                                                                    attributes?: {};
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                                updatedBy?: {
                                                    data?: {
                                                        id?: string;
                                                        attributes?: {};
                                                    };
                                                };
                                            };
                                        }[];
                                    };
                                    path?: string;
                                    createdAt?: string;
                                    updatedAt?: string;
                                    createdBy?: {
                                        data?: {
                                            id?: string;
                                            attributes?: {};
                                        };
                                    };
                                    updatedBy?: {
                                        data?: {
                                            id?: string;
                                            attributes?: {};
                                        };
                                    };
                                };
                            };
                        };
                        folderPath?: string;
                        createdAt?: string;
                        updatedAt?: string;
                        createdBy?: {
                            data?: {
                                id?: string;
                                attributes?: {};
                            };
                        };
                        updatedBy?: {
                            data?: {
                                id?: string;
                                attributes?: {};
                            };
                        };
                    };
                }[];
            };
            title?: string;
            discription?: string;
            catagory?: {
                data?: {
                    id?: string;
                    attributes?: {
                        name?: string;
                        discription?: string;
                        url?: string;
                        createdAt?: string;
                        updatedAt?: string;
                        publishedAt?: string;
                        createdBy?: {
                            data?: {
                                id?: string;
                                attributes?: {
                                    firstname?: string;
                                    lastname?: string;
                                    username?: string;
                                    email?: string;
                                    resetPasswordToken?: string;
                                    registrationToken?: string;
                                    isActive?: boolean;
                                    roles?: {
                                        data?: {
                                            id?: string;
                                            attributes?: {
                                                name?: string;
                                                code?: string;
                                                description?: string;
                                                users?: {
                                                    data?: {
                                                        id?: string;
                                                        attributes?: {};
                                                    }[];
                                                };
                                                permissions?: {
                                                    data?: {
                                                        id?: string;
                                                        attributes?: {
                                                            action?: string;
                                                            subject?: string;
                                                            properties?: any;
                                                            conditions?: any;
                                                            role?: {
                                                                data?: {
                                                                    id?: string;
                                                                    attributes?: {};
                                                                };
                                                            };
                                                            createdAt?: string;
                                                            updatedAt?: string;
                                                            createdBy?: {
                                                                data?: {
                                                                    id?: string;
                                                                    attributes?: {};
                                                                };
                                                            };
                                                            updatedBy?: {
                                                                data?: {
                                                                    id?: string;
                                                                    attributes?: {};
                                                                };
                                                            };
                                                        };
                                                    }[];
                                                };
                                                createdAt?: string;
                                                updatedAt?: string;
                                                createdBy?: {
                                                    data?: {
                                                        id?: string;
                                                        attributes?: {};
                                                    };
                                                };
                                                updatedBy?: {
                                                    data?: {
                                                        id?: string;
                                                        attributes?: {};
                                                    };
                                                };
                                            };
                                        }[];
                                    };
                                    blocked?: boolean;
                                    preferedLanguage?: string;
                                    createdAt?: string;
                                    updatedAt?: string;
                                    createdBy?: {
                                        data?: {
                                            id?: string;
                                            attributes?: {};
                                        };
                                    };
                                    updatedBy?: {
                                        data?: {
                                            id?: string;
                                            attributes?: {};
                                        };
                                    };
                                };
                            };
                        };
                        updatedBy?: {
                            data?: {
                                id?: string;
                                attributes?: {};
                            };
                        };
                    };
                };
            };
            createdAt?: string;
            updatedAt?: string;
            publishedAt?: string;
            createdBy?: {
                data?: {
                    id?: string;
                    attributes?: {};
                };
            };
            updatedBy?: {
                data?: {
                    id?: string;
                    attributes?: {};
                };
            };
        };
    }[];
    meta?: {
        pagination?: {
            page?: number;
            pageSize?: number;
            pageCount?: number;
            total?: number;
        };
    };
};
export type PostRequest = {
    data: {
        Images: (number | string)[];
        title: string;
        discription?: string;
        catagory?: number | string;
    };
};
export type PostResponse = {
    data?: {
        id?: string;
        attributes?: {
            Images?: {
                data?: {
                    id?: string;
                    attributes?: {
                        name?: string;
                        alternativeText?: string;
                        caption?: string;
                        width?: number;
                        height?: number;
                        formats?: any;
                        hash?: string;
                        ext?: string;
                        mime?: string;
                        size?: number;
                        url?: string;
                        previewUrl?: string;
                        provider?: string;
                        provider_metadata?: any;
                        related?: {
                            data?: {
                                id?: string;
                                attributes?: {};
                            }[];
                        };
                        folder?: {
                            data?: {
                                id?: string;
                                attributes?: {
                                    name?: string;
                                    pathId?: number;
                                    parent?: {
                                        data?: {
                                            id?: string;
                                            attributes?: {};
                                        };
                                    };
                                    children?: {
                                        data?: {
                                            id?: string;
                                            attributes?: {};
                                        }[];
                                    };
                                    files?: {
                                        data?: {
                                            id?: string;
                                            attributes?: {
                                                name?: string;
                                                alternativeText?: string;
                                                caption?: string;
                                                width?: number;
                                                height?: number;
                                                formats?: any;
                                                hash?: string;
                                                ext?: string;
                                                mime?: string;
                                                size?: number;
                                                url?: string;
                                                previewUrl?: string;
                                                provider?: string;
                                                provider_metadata?: any;
                                                related?: {
                                                    data?: {
                                                        id?: string;
                                                        attributes?: {};
                                                    }[];
                                                };
                                                folder?: {
                                                    data?: {
                                                        id?: string;
                                                        attributes?: {};
                                                    };
                                                };
                                                folderPath?: string;
                                                createdAt?: string;
                                                updatedAt?: string;
                                                createdBy?: {
                                                    data?: {
                                                        id?: string;
                                                        attributes?: {
                                                            firstname?: string;
                                                            lastname?: string;
                                                            username?: string;
                                                            email?: string;
                                                            resetPasswordToken?: string;
                                                            registrationToken?: string;
                                                            isActive?: boolean;
                                                            roles?: {
                                                                data?: {
                                                                    id?: string;
                                                                    attributes?: {
                                                                        name?: string;
                                                                        code?: string;
                                                                        description?: string;
                                                                        users?: {
                                                                            data?: {
                                                                                id?: string;
                                                                                attributes?: {};
                                                                            }[];
                                                                        };
                                                                        permissions?: {
                                                                            data?: {
                                                                                id?: string;
                                                                                attributes?: {
                                                                                    action?: string;
                                                                                    subject?: string;
                                                                                    properties?: any;
                                                                                    conditions?: any;
                                                                                    role?: {
                                                                                        data?: {
                                                                                            id?: string;
                                                                                            attributes?: {};
                                                                                        };
                                                                                    };
                                                                                    createdAt?: string;
                                                                                    updatedAt?: string;
                                                                                    createdBy?: {
                                                                                        data?: {
                                                                                            id?: string;
                                                                                            attributes?: {};
                                                                                        };
                                                                                    };
                                                                                    updatedBy?: {
                                                                                        data?: {
                                                                                            id?: string;
                                                                                            attributes?: {};
                                                                                        };
                                                                                    };
                                                                                };
                                                                            }[];
                                                                        };
                                                                        createdAt?: string;
                                                                        updatedAt?: string;
                                                                        createdBy?: {
                                                                            data?: {
                                                                                id?: string;
                                                                                attributes?: {};
                                                                            };
                                                                        };
                                                                        updatedBy?: {
                                                                            data?: {
                                                                                id?: string;
                                                                                attributes?: {};
                                                                            };
                                                                        };
                                                                    };
                                                                }[];
                                                            };
                                                            blocked?: boolean;
                                                            preferedLanguage?: string;
                                                            createdAt?: string;
                                                            updatedAt?: string;
                                                            createdBy?: {
                                                                data?: {
                                                                    id?: string;
                                                                    attributes?: {};
                                                                };
                                                            };
                                                            updatedBy?: {
                                                                data?: {
                                                                    id?: string;
                                                                    attributes?: {};
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                                updatedBy?: {
                                                    data?: {
                                                        id?: string;
                                                        attributes?: {};
                                                    };
                                                };
                                            };
                                        }[];
                                    };
                                    path?: string;
                                    createdAt?: string;
                                    updatedAt?: string;
                                    createdBy?: {
                                        data?: {
                                            id?: string;
                                            attributes?: {};
                                        };
                                    };
                                    updatedBy?: {
                                        data?: {
                                            id?: string;
                                            attributes?: {};
                                        };
                                    };
                                };
                            };
                        };
                        folderPath?: string;
                        createdAt?: string;
                        updatedAt?: string;
                        createdBy?: {
                            data?: {
                                id?: string;
                                attributes?: {};
                            };
                        };
                        updatedBy?: {
                            data?: {
                                id?: string;
                                attributes?: {};
                            };
                        };
                    };
                }[];
            };
            title?: string;
            discription?: string;
            catagory?: {
                data?: {
                    id?: string;
                    attributes?: {
                        name?: string;
                        discription?: string;
                        url?: string;
                        createdAt?: string;
                        updatedAt?: string;
                        publishedAt?: string;
                        createdBy?: {
                            data?: {
                                id?: string;
                                attributes?: {
                                    firstname?: string;
                                    lastname?: string;
                                    username?: string;
                                    email?: string;
                                    resetPasswordToken?: string;
                                    registrationToken?: string;
                                    isActive?: boolean;
                                    roles?: {
                                        data?: {
                                            id?: string;
                                            attributes?: {
                                                name?: string;
                                                code?: string;
                                                description?: string;
                                                users?: {
                                                    data?: {
                                                        id?: string;
                                                        attributes?: {};
                                                    }[];
                                                };
                                                permissions?: {
                                                    data?: {
                                                        id?: string;
                                                        attributes?: {
                                                            action?: string;
                                                            subject?: string;
                                                            properties?: any;
                                                            conditions?: any;
                                                            role?: {
                                                                data?: {
                                                                    id?: string;
                                                                    attributes?: {};
                                                                };
                                                            };
                                                            createdAt?: string;
                                                            updatedAt?: string;
                                                            createdBy?: {
                                                                data?: {
                                                                    id?: string;
                                                                    attributes?: {};
                                                                };
                                                            };
                                                            updatedBy?: {
                                                                data?: {
                                                                    id?: string;
                                                                    attributes?: {};
                                                                };
                                                            };
                                                        };
                                                    }[];
                                                };
                                                createdAt?: string;
                                                updatedAt?: string;
                                                createdBy?: {
                                                    data?: {
                                                        id?: string;
                                                        attributes?: {};
                                                    };
                                                };
                                                updatedBy?: {
                                                    data?: {
                                                        id?: string;
                                                        attributes?: {};
                                                    };
                                                };
                                            };
                                        }[];
                                    };
                                    blocked?: boolean;
                                    preferedLanguage?: string;
                                    createdAt?: string;
                                    updatedAt?: string;
                                    createdBy?: {
                                        data?: {
                                            id?: string;
                                            attributes?: {};
                                        };
                                    };
                                    updatedBy?: {
                                        data?: {
                                            id?: string;
                                            attributes?: {};
                                        };
                                    };
                                };
                            };
                        };
                        updatedBy?: {
                            data?: {
                                id?: string;
                                attributes?: {};
                            };
                        };
                    };
                };
            };
            createdAt?: string;
            updatedAt?: string;
            publishedAt?: string;
            createdBy?: {
                data?: {
                    id?: string;
                    attributes?: {};
                };
            };
            updatedBy?: {
                data?: {
                    id?: string;
                    attributes?: {};
                };
            };
        };
    };
    meta?: object;
};
export type UploadFileListResponse = {
    data?: {
        id?: string;
        attributes?: {
            name?: string;
            alternativeText?: string;
            caption?: string;
            width?: number;
            height?: number;
            formats?: any;
            hash?: string;
            ext?: string;
            mime?: string;
            size?: number;
            url?: string;
            previewUrl?: string;
            provider?: string;
            provider_metadata?: any;
            related?: {
                data?: {
                    id?: string;
                    attributes?: {};
                }[];
            };
            folder?: {
                data?: {
                    id?: string;
                    attributes?: {
                        name?: string;
                        pathId?: number;
                        parent?: {
                            data?: {
                                id?: string;
                                attributes?: {};
                            };
                        };
                        children?: {
                            data?: {
                                id?: string;
                                attributes?: {};
                            }[];
                        };
                        files?: {
                            data?: {
                                id?: string;
                                attributes?: {
                                    name?: string;
                                    alternativeText?: string;
                                    caption?: string;
                                    width?: number;
                                    height?: number;
                                    formats?: any;
                                    hash?: string;
                                    ext?: string;
                                    mime?: string;
                                    size?: number;
                                    url?: string;
                                    previewUrl?: string;
                                    provider?: string;
                                    provider_metadata?: any;
                                    related?: {
                                        data?: {
                                            id?: string;
                                            attributes?: {};
                                        }[];
                                    };
                                    folder?: {
                                        data?: {
                                            id?: string;
                                            attributes?: {};
                                        };
                                    };
                                    folderPath?: string;
                                    createdAt?: string;
                                    updatedAt?: string;
                                    createdBy?: {
                                        data?: {
                                            id?: string;
                                            attributes?: {
                                                firstname?: string;
                                                lastname?: string;
                                                username?: string;
                                                email?: string;
                                                resetPasswordToken?: string;
                                                registrationToken?: string;
                                                isActive?: boolean;
                                                roles?: {
                                                    data?: {
                                                        id?: string;
                                                        attributes?: {
                                                            name?: string;
                                                            code?: string;
                                                            description?: string;
                                                            users?: {
                                                                data?: {
                                                                    id?: string;
                                                                    attributes?: {};
                                                                }[];
                                                            };
                                                            permissions?: {
                                                                data?: {
                                                                    id?: string;
                                                                    attributes?: {
                                                                        action?: string;
                                                                        subject?: string;
                                                                        properties?: any;
                                                                        conditions?: any;
                                                                        role?: {
                                                                            data?: {
                                                                                id?: string;
                                                                                attributes?: {};
                                                                            };
                                                                        };
                                                                        createdAt?: string;
                                                                        updatedAt?: string;
                                                                        createdBy?: {
                                                                            data?: {
                                                                                id?: string;
                                                                                attributes?: {};
                                                                            };
                                                                        };
                                                                        updatedBy?: {
                                                                            data?: {
                                                                                id?: string;
                                                                                attributes?: {};
                                                                            };
                                                                        };
                                                                    };
                                                                }[];
                                                            };
                                                            createdAt?: string;
                                                            updatedAt?: string;
                                                            createdBy?: {
                                                                data?: {
                                                                    id?: string;
                                                                    attributes?: {};
                                                                };
                                                            };
                                                            updatedBy?: {
                                                                data?: {
                                                                    id?: string;
                                                                    attributes?: {};
                                                                };
                                                            };
                                                        };
                                                    }[];
                                                };
                                                blocked?: boolean;
                                                preferedLanguage?: string;
                                                createdAt?: string;
                                                updatedAt?: string;
                                                createdBy?: {
                                                    data?: {
                                                        id?: string;
                                                        attributes?: {};
                                                    };
                                                };
                                                updatedBy?: {
                                                    data?: {
                                                        id?: string;
                                                        attributes?: {};
                                                    };
                                                };
                                            };
                                        };
                                    };
                                    updatedBy?: {
                                        data?: {
                                            id?: string;
                                            attributes?: {};
                                        };
                                    };
                                };
                            }[];
                        };
                        path?: string;
                        createdAt?: string;
                        updatedAt?: string;
                        createdBy?: {
                            data?: {
                                id?: string;
                                attributes?: {};
                            };
                        };
                        updatedBy?: {
                            data?: {
                                id?: string;
                                attributes?: {};
                            };
                        };
                    };
                };
            };
            folderPath?: string;
            createdAt?: string;
            updatedAt?: string;
            createdBy?: {
                data?: {
                    id?: string;
                    attributes?: {};
                };
            };
            updatedBy?: {
                data?: {
                    id?: string;
                    attributes?: {};
                };
            };
        };
    }[];
    meta?: {
        pagination?: {
            page?: number;
            pageSize?: number;
            pageCount?: number;
            total?: number;
        };
    };
};
export type UploadFileResponse = {
    data?: {
        id?: string;
        attributes?: {
            name?: string;
            alternativeText?: string;
            caption?: string;
            width?: number;
            height?: number;
            formats?: any;
            hash?: string;
            ext?: string;
            mime?: string;
            size?: number;
            url?: string;
            previewUrl?: string;
            provider?: string;
            provider_metadata?: any;
            related?: {
                data?: {
                    id?: string;
                    attributes?: {};
                }[];
            };
            folder?: {
                data?: {
                    id?: string;
                    attributes?: {
                        name?: string;
                        pathId?: number;
                        parent?: {
                            data?: {
                                id?: string;
                                attributes?: {};
                            };
                        };
                        children?: {
                            data?: {
                                id?: string;
                                attributes?: {};
                            }[];
                        };
                        files?: {
                            data?: {
                                id?: string;
                                attributes?: {
                                    name?: string;
                                    alternativeText?: string;
                                    caption?: string;
                                    width?: number;
                                    height?: number;
                                    formats?: any;
                                    hash?: string;
                                    ext?: string;
                                    mime?: string;
                                    size?: number;
                                    url?: string;
                                    previewUrl?: string;
                                    provider?: string;
                                    provider_metadata?: any;
                                    related?: {
                                        data?: {
                                            id?: string;
                                            attributes?: {};
                                        }[];
                                    };
                                    folder?: {
                                        data?: {
                                            id?: string;
                                            attributes?: {};
                                        };
                                    };
                                    folderPath?: string;
                                    createdAt?: string;
                                    updatedAt?: string;
                                    createdBy?: {
                                        data?: {
                                            id?: string;
                                            attributes?: {
                                                firstname?: string;
                                                lastname?: string;
                                                username?: string;
                                                email?: string;
                                                resetPasswordToken?: string;
                                                registrationToken?: string;
                                                isActive?: boolean;
                                                roles?: {
                                                    data?: {
                                                        id?: string;
                                                        attributes?: {
                                                            name?: string;
                                                            code?: string;
                                                            description?: string;
                                                            users?: {
                                                                data?: {
                                                                    id?: string;
                                                                    attributes?: {};
                                                                }[];
                                                            };
                                                            permissions?: {
                                                                data?: {
                                                                    id?: string;
                                                                    attributes?: {
                                                                        action?: string;
                                                                        subject?: string;
                                                                        properties?: any;
                                                                        conditions?: any;
                                                                        role?: {
                                                                            data?: {
                                                                                id?: string;
                                                                                attributes?: {};
                                                                            };
                                                                        };
                                                                        createdAt?: string;
                                                                        updatedAt?: string;
                                                                        createdBy?: {
                                                                            data?: {
                                                                                id?: string;
                                                                                attributes?: {};
                                                                            };
                                                                        };
                                                                        updatedBy?: {
                                                                            data?: {
                                                                                id?: string;
                                                                                attributes?: {};
                                                                            };
                                                                        };
                                                                    };
                                                                }[];
                                                            };
                                                            createdAt?: string;
                                                            updatedAt?: string;
                                                            createdBy?: {
                                                                data?: {
                                                                    id?: string;
                                                                    attributes?: {};
                                                                };
                                                            };
                                                            updatedBy?: {
                                                                data?: {
                                                                    id?: string;
                                                                    attributes?: {};
                                                                };
                                                            };
                                                        };
                                                    }[];
                                                };
                                                blocked?: boolean;
                                                preferedLanguage?: string;
                                                createdAt?: string;
                                                updatedAt?: string;
                                                createdBy?: {
                                                    data?: {
                                                        id?: string;
                                                        attributes?: {};
                                                    };
                                                };
                                                updatedBy?: {
                                                    data?: {
                                                        id?: string;
                                                        attributes?: {};
                                                    };
                                                };
                                            };
                                        };
                                    };
                                    updatedBy?: {
                                        data?: {
                                            id?: string;
                                            attributes?: {};
                                        };
                                    };
                                };
                            }[];
                        };
                        path?: string;
                        createdAt?: string;
                        updatedAt?: string;
                        createdBy?: {
                            data?: {
                                id?: string;
                                attributes?: {};
                            };
                        };
                        updatedBy?: {
                            data?: {
                                id?: string;
                                attributes?: {};
                            };
                        };
                    };
                };
            };
            folderPath?: string;
            createdAt?: string;
            updatedAt?: string;
            createdBy?: {
                data?: {
                    id?: string;
                    attributes?: {};
                };
            };
            updatedBy?: {
                data?: {
                    id?: string;
                    attributes?: {};
                };
            };
        };
    };
    meta?: object;
};
export type UsersPermissionsPermissionsTree = {
    [key: string]: {
        controllers?: {
            [key: string]: {
                [key: string]: {
                    enabled?: boolean;
                    policy?: string;
                };
            };
        };
    };
};
export type UsersPermissionsRole = {
    id?: number;
    name?: string;
    description?: string;
    "type"?: string;
    createdAt?: any;
    updatedAt?: any;
};
export type UsersPermissionsUser = {
    id?: number;
    username?: string;
    email?: string;
    provider?: string;
    confirmed?: boolean;
    blocked?: boolean;
    createdAt?: any;
    updatedAt?: any;
};
export type UsersPermissionsUserRegistration = {
    jwt?: string;
    user?: UsersPermissionsUser;
};
export function getAbout({ sort, paginationWithCount, paginationPage, paginationPageSize, paginationStart, paginationLimit, fields, populate }: {
    sort?: string;
    paginationWithCount?: boolean;
    paginationPage?: number;
    paginationPageSize?: number;
    paginationStart?: number;
    paginationLimit?: number;
    fields?: string;
    populate?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: AboutListResponse;
    } | {
        status: 400;
        data: Error;
    } | {
        status: 401;
        data: Error;
    } | {
        status: 403;
        data: Error;
    } | {
        status: 404;
        data: Error;
    } | {
        status: 500;
        data: Error;
    }>(`/about${QS.query(QS.form({
        sort,
        "pagination[withCount]": paginationWithCount,
        "pagination[page]": paginationPage,
        "pagination[pageSize]": paginationPageSize,
        "pagination[start]": paginationStart,
        "pagination[limit]": paginationLimit,
        fields,
        populate
    }))}`, {
        ...opts
    });
}
export function putAbout(aboutRequest: AboutRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: AboutResponse;
    } | {
        status: 400;
        data: Error;
    } | {
        status: 401;
        data: Error;
    } | {
        status: 403;
        data: Error;
    } | {
        status: 404;
        data: Error;
    } | {
        status: 500;
        data: Error;
    }>("/about", oazapfts.json({
        ...opts,
        method: "PUT",
        body: aboutRequest
    }));
}
export function deleteAbout(opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: number;
    } | {
        status: 400;
        data: Error;
    } | {
        status: 401;
        data: Error;
    } | {
        status: 403;
        data: Error;
    } | {
        status: 404;
        data: Error;
    } | {
        status: 500;
        data: Error;
    }>("/about", {
        ...opts,
        method: "DELETE"
    });
}
export function getCatagories({ sort, paginationWithCount, paginationPage, paginationPageSize, paginationStart, paginationLimit, fields, populate }: {
    sort?: string;
    paginationWithCount?: boolean;
    paginationPage?: number;
    paginationPageSize?: number;
    paginationStart?: number;
    paginationLimit?: number;
    fields?: string;
    populate?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: CatagoryListResponse;
    } | {
        status: 400;
        data: Error;
    } | {
        status: 401;
        data: Error;
    } | {
        status: 403;
        data: Error;
    } | {
        status: 404;
        data: Error;
    } | {
        status: 500;
        data: Error;
    }>(`/catagories${QS.query(QS.form({
        sort,
        "pagination[withCount]": paginationWithCount,
        "pagination[page]": paginationPage,
        "pagination[pageSize]": paginationPageSize,
        "pagination[start]": paginationStart,
        "pagination[limit]": paginationLimit,
        fields,
        populate
    }))}`, {
        ...opts
    });
}
export function postCatagories(catagoryRequest: CatagoryRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: CatagoryResponse;
    } | {
        status: 400;
        data: Error;
    } | {
        status: 401;
        data: Error;
    } | {
        status: 403;
        data: Error;
    } | {
        status: 404;
        data: Error;
    } | {
        status: 500;
        data: Error;
    }>("/catagories", oazapfts.json({
        ...opts,
        method: "POST",
        body: catagoryRequest
    }));
}
export function getCatagoriesById(id: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: CatagoryResponse;
    } | {
        status: 400;
        data: Error;
    } | {
        status: 401;
        data: Error;
    } | {
        status: 403;
        data: Error;
    } | {
        status: 404;
        data: Error;
    } | {
        status: 500;
        data: Error;
    }>(`/catagories/${id}`, {
        ...opts
    });
}
export function putCatagoriesById(id: string, catagoryRequest: CatagoryRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: CatagoryResponse;
    } | {
        status: 400;
        data: Error;
    } | {
        status: 401;
        data: Error;
    } | {
        status: 403;
        data: Error;
    } | {
        status: 404;
        data: Error;
    } | {
        status: 500;
        data: Error;
    }>(`/catagories/${id}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: catagoryRequest
    }));
}
export function deleteCatagoriesById(id: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: number;
    } | {
        status: 400;
        data: Error;
    } | {
        status: 401;
        data: Error;
    } | {
        status: 403;
        data: Error;
    } | {
        status: 404;
        data: Error;
    } | {
        status: 500;
        data: Error;
    }>(`/catagories/${id}`, {
        ...opts,
        method: "DELETE"
    });
}
export function getFeedbacks({ sort, paginationWithCount, paginationPage, paginationPageSize, paginationStart, paginationLimit, fields, populate }: {
    sort?: string;
    paginationWithCount?: boolean;
    paginationPage?: number;
    paginationPageSize?: number;
    paginationStart?: number;
    paginationLimit?: number;
    fields?: string;
    populate?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: FeedbackListResponse;
    } | {
        status: 400;
        data: Error;
    } | {
        status: 401;
        data: Error;
    } | {
        status: 403;
        data: Error;
    } | {
        status: 404;
        data: Error;
    } | {
        status: 500;
        data: Error;
    }>(`/feedbacks${QS.query(QS.form({
        sort,
        "pagination[withCount]": paginationWithCount,
        "pagination[page]": paginationPage,
        "pagination[pageSize]": paginationPageSize,
        "pagination[start]": paginationStart,
        "pagination[limit]": paginationLimit,
        fields,
        populate
    }))}`, {
        ...opts
    });
}
export function postFeedbacks(feedbackRequest: FeedbackRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: FeedbackResponse;
    } | {
        status: 400;
        data: Error;
    } | {
        status: 401;
        data: Error;
    } | {
        status: 403;
        data: Error;
    } | {
        status: 404;
        data: Error;
    } | {
        status: 500;
        data: Error;
    }>("/feedbacks", oazapfts.json({
        ...opts,
        method: "POST",
        body: feedbackRequest
    }));
}
export function getFeedbacksById(id: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: FeedbackResponse;
    } | {
        status: 400;
        data: Error;
    } | {
        status: 401;
        data: Error;
    } | {
        status: 403;
        data: Error;
    } | {
        status: 404;
        data: Error;
    } | {
        status: 500;
        data: Error;
    }>(`/feedbacks/${id}`, {
        ...opts
    });
}
export function putFeedbacksById(id: string, feedbackRequest: FeedbackRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: FeedbackResponse;
    } | {
        status: 400;
        data: Error;
    } | {
        status: 401;
        data: Error;
    } | {
        status: 403;
        data: Error;
    } | {
        status: 404;
        data: Error;
    } | {
        status: 500;
        data: Error;
    }>(`/feedbacks/${id}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: feedbackRequest
    }));
}
export function deleteFeedbacksById(id: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: number;
    } | {
        status: 400;
        data: Error;
    } | {
        status: 401;
        data: Error;
    } | {
        status: 403;
        data: Error;
    } | {
        status: 404;
        data: Error;
    } | {
        status: 500;
        data: Error;
    }>(`/feedbacks/${id}`, {
        ...opts,
        method: "DELETE"
    });
}
export function getPortfolioMessages({ sort, paginationWithCount, paginationPage, paginationPageSize, paginationStart, paginationLimit, fields, populate }: {
    sort?: string;
    paginationWithCount?: boolean;
    paginationPage?: number;
    paginationPageSize?: number;
    paginationStart?: number;
    paginationLimit?: number;
    fields?: string;
    populate?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: PortfolioMessageListResponse;
    } | {
        status: 400;
        data: Error;
    } | {
        status: 401;
        data: Error;
    } | {
        status: 403;
        data: Error;
    } | {
        status: 404;
        data: Error;
    } | {
        status: 500;
        data: Error;
    }>(`/portfolio-messages${QS.query(QS.form({
        sort,
        "pagination[withCount]": paginationWithCount,
        "pagination[page]": paginationPage,
        "pagination[pageSize]": paginationPageSize,
        "pagination[start]": paginationStart,
        "pagination[limit]": paginationLimit,
        fields,
        populate
    }))}`, {
        ...opts
    });
}
export function postPortfolioMessages(portfolioMessageRequest: PortfolioMessageRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: PortfolioMessageResponse;
    } | {
        status: 400;
        data: Error;
    } | {
        status: 401;
        data: Error;
    } | {
        status: 403;
        data: Error;
    } | {
        status: 404;
        data: Error;
    } | {
        status: 500;
        data: Error;
    }>("/portfolio-messages", oazapfts.json({
        ...opts,
        method: "POST",
        body: portfolioMessageRequest
    }));
}
export function getPortfolioMessagesById(id: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: PortfolioMessageResponse;
    } | {
        status: 400;
        data: Error;
    } | {
        status: 401;
        data: Error;
    } | {
        status: 403;
        data: Error;
    } | {
        status: 404;
        data: Error;
    } | {
        status: 500;
        data: Error;
    }>(`/portfolio-messages/${id}`, {
        ...opts
    });
}
export function putPortfolioMessagesById(id: string, portfolioMessageRequest: PortfolioMessageRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: PortfolioMessageResponse;
    } | {
        status: 400;
        data: Error;
    } | {
        status: 401;
        data: Error;
    } | {
        status: 403;
        data: Error;
    } | {
        status: 404;
        data: Error;
    } | {
        status: 500;
        data: Error;
    }>(`/portfolio-messages/${id}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: portfolioMessageRequest
    }));
}
export function deletePortfolioMessagesById(id: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: number;
    } | {
        status: 400;
        data: Error;
    } | {
        status: 401;
        data: Error;
    } | {
        status: 403;
        data: Error;
    } | {
        status: 404;
        data: Error;
    } | {
        status: 500;
        data: Error;
    }>(`/portfolio-messages/${id}`, {
        ...opts,
        method: "DELETE"
    });
}
export function getPosts({ sort, paginationWithCount, paginationPage, paginationPageSize, paginationStart, paginationLimit, fields, populate }: {
    sort?: string;
    paginationWithCount?: boolean;
    paginationPage?: number;
    paginationPageSize?: number;
    paginationStart?: number;
    paginationLimit?: number;
    fields?: string;
    populate?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: PostListResponse;
    } | {
        status: 400;
        data: Error;
    } | {
        status: 401;
        data: Error;
    } | {
        status: 403;
        data: Error;
    } | {
        status: 404;
        data: Error;
    } | {
        status: 500;
        data: Error;
    }>(`/posts${QS.query(QS.form({
        sort,
        "pagination[withCount]": paginationWithCount,
        "pagination[page]": paginationPage,
        "pagination[pageSize]": paginationPageSize,
        "pagination[start]": paginationStart,
        "pagination[limit]": paginationLimit,
        fields,
        populate
    }))}`, {
        ...opts
    });
}
export function postPosts(postRequest: PostRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: PostResponse;
    } | {
        status: 400;
        data: Error;
    } | {
        status: 401;
        data: Error;
    } | {
        status: 403;
        data: Error;
    } | {
        status: 404;
        data: Error;
    } | {
        status: 500;
        data: Error;
    }>("/posts", oazapfts.json({
        ...opts,
        method: "POST",
        body: postRequest
    }));
}
export function getPostsById(id: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: PostResponse;
    } | {
        status: 400;
        data: Error;
    } | {
        status: 401;
        data: Error;
    } | {
        status: 403;
        data: Error;
    } | {
        status: 404;
        data: Error;
    } | {
        status: 500;
        data: Error;
    }>(`/posts/${id}`, {
        ...opts
    });
}
export function putPostsById(id: string, postRequest: PostRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: PostResponse;
    } | {
        status: 400;
        data: Error;
    } | {
        status: 401;
        data: Error;
    } | {
        status: 403;
        data: Error;
    } | {
        status: 404;
        data: Error;
    } | {
        status: 500;
        data: Error;
    }>(`/posts/${id}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: postRequest
    }));
}
export function deletePostsById(id: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: number;
    } | {
        status: 400;
        data: Error;
    } | {
        status: 401;
        data: Error;
    } | {
        status: 403;
        data: Error;
    } | {
        status: 404;
        data: Error;
    } | {
        status: 500;
        data: Error;
    }>(`/posts/${id}`, {
        ...opts,
        method: "DELETE"
    });
}
export function getUploadFiles({ sort, paginationWithCount, paginationPage, paginationPageSize, paginationStart, paginationLimit, fields, populate }: {
    sort?: string;
    paginationWithCount?: boolean;
    paginationPage?: number;
    paginationPageSize?: number;
    paginationStart?: number;
    paginationLimit?: number;
    fields?: string;
    populate?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: UploadFileListResponse;
    } | {
        status: 400;
        data: Error;
    } | {
        status: 401;
        data: Error;
    } | {
        status: 403;
        data: Error;
    } | {
        status: 404;
        data: Error;
    } | {
        status: 500;
        data: Error;
    }>(`/upload/files${QS.query(QS.form({
        sort,
        "pagination[withCount]": paginationWithCount,
        "pagination[page]": paginationPage,
        "pagination[pageSize]": paginationPageSize,
        "pagination[start]": paginationStart,
        "pagination[limit]": paginationLimit,
        fields,
        populate
    }))}`, {
        ...opts
    });
}
export function getUploadFilesById(id: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: UploadFileResponse;
    } | {
        status: 400;
        data: Error;
    } | {
        status: 401;
        data: Error;
    } | {
        status: 403;
        data: Error;
    } | {
        status: 404;
        data: Error;
    } | {
        status: 500;
        data: Error;
    }>(`/upload/files/${id}`, {
        ...opts
    });
}
export function deleteUploadFilesById(id: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: number;
    } | {
        status: 400;
        data: Error;
    } | {
        status: 401;
        data: Error;
    } | {
        status: 403;
        data: Error;
    } | {
        status: 404;
        data: Error;
    } | {
        status: 500;
        data: Error;
    }>(`/upload/files/${id}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * Get default generated permissions
 */
export function getUsersPermissionsPermissions(opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: {
            permissions?: UsersPermissionsPermissionsTree;
        };
    } | {
        status: number;
        data: Error;
    }>("/users-permissions/permissions", {
        ...opts
    });
}
/**
 * Get a role
 */
export function getUsersPermissionsRolesById({ id }: {
    id?: any;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: {
            role?: UsersPermissionsRole;
        };
    } | {
        status: number;
        data: Error;
    }>(`/users-permissions/roles/${id}`, {
        ...opts
    });
}
/**
 * List roles
 */
export function getUsersPermissionsRoles(opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: {
            roles?: (UsersPermissionsRole & {
                nb_users?: number;
            })[];
        };
    } | {
        status: number;
        data: Error;
    }>("/users-permissions/roles", {
        ...opts
    });
}
/**
 * Create a role
 */
export function postUsersPermissionsRoles(body: {
    name?: string;
    description?: string;
    "type"?: string;
    permissions?: UsersPermissionsPermissionsTree;
}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: {
            ok?: true;
        };
    } | {
        status: number;
        data: Error;
    }>("/users-permissions/roles", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * Update a role
 */
export function putUsersPermissionsRolesByRole(body: {
    name?: string;
    description?: string;
    "type"?: string;
    permissions?: UsersPermissionsPermissionsTree;
}, { role }: {
    role?: any;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: {
            ok?: true;
        };
    } | {
        status: number;
        data: Error;
    }>(`/users-permissions/roles/${role}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
/**
 * Delete a role
 */
export function deleteUsersPermissionsRolesByRole({ role }: {
    role?: any;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: {
            ok?: true;
        };
    } | {
        status: number;
        data: Error;
    }>(`/users-permissions/roles/${role}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * Get user count
 */
export function getUsersCount(opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: number;
    } | {
        status: number;
        data: Error;
    }>("/users/count", {
        ...opts
    });
}
/**
 * Get list of users
 */
export function getUsers(opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: UsersPermissionsUser[];
    } | {
        status: number;
        data: Error;
    }>("/users", {
        ...opts
    });
}
/**
 * Create a user
 */
export function postUsers(body: {
    email?: string;
    username?: string;
    password?: string;
}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: UsersPermissionsUser & {
            role?: UsersPermissionsRole;
        };
    } | {
        status: number;
        data: Error;
    }>("/users", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * Get authenticated user info
 */
export function getUsersMe(opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: UsersPermissionsUser;
    } | {
        status: number;
        data: Error;
    }>("/users/me", {
        ...opts
    });
}
/**
 * Get a user
 */
export function getUsersById({ id }: {
    id?: any;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: UsersPermissionsUser;
    } | {
        status: number;
        data: Error;
    }>(`/users/${id}`, {
        ...opts
    });
}
/**
 * Update a user
 */
export function putUsersById(body: {
    email?: string;
    username?: string;
    password?: string;
}, { id }: {
    id?: any;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: UsersPermissionsUser & {
            role?: UsersPermissionsRole;
        };
    } | {
        status: number;
        data: Error;
    }>(`/users/${id}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
/**
 * Delete a user
 */
export function deleteUsersById(opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: UsersPermissionsUser;
    } | {
        status: number;
        data: Error;
    }>(`/users/${id}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * Login with a provider
 */
export function getConnect(opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 301;
    } | {
        status: number;
        data: Error;
    }>("/connect/(.*)", {
        ...opts
    });
}
/**
 * Local login
 */
export function postAuthLocal(body: {
    identifier?: string;
    password?: string;
}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: UsersPermissionsUserRegistration;
    } | {
        status: number;
        data: Error;
    }>("/auth/local", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * Register a user
 */
export function postAuthLocalRegister(body: {
    username?: string;
    email?: string;
    password?: string;
}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: UsersPermissionsUserRegistration;
    } | {
        status: number;
        data: Error;
    }>("/auth/local/register", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * Default Callback from provider auth
 */
export function getAuthByProviderCallback(opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: UsersPermissionsUserRegistration;
    } | {
        status: number;
        data: Error;
    }>(`/auth/${provider}/callback`, {
        ...opts
    });
}
/**
 * Send rest password email
 */
export function postAuthForgotPassword(body: {
    email?: string;
}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: {
            ok?: true;
        };
    } | {
        status: number;
        data: Error;
    }>("/auth/forgot-password", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * Rest user password
 */
export function postAuthResetPassword(body: {
    password?: string;
    passwordConfirmation?: string;
    code?: string;
}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: UsersPermissionsUserRegistration;
    } | {
        status: number;
        data: Error;
    }>("/auth/reset-password", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * Confirm user email
 */
export function getAuthEmailConfirmation({ confirmation }: {
    confirmation?: any;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 301;
    } | {
        status: number;
        data: Error;
    }>(`/auth/email-confirmation${QS.query(QS.form({
        confirmation
    }))}`, {
        ...opts
    });
}
/**
 * Send confirmation email
 */
export function postAuthSendEmailConfirmation(body: {
    email?: string;
}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: {
            email?: string;
            sent?: true;
        };
    } | {
        status: number;
        data: Error;
    }>("/auth/send-email-confirmation", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
