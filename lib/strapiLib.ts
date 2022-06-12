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
            title?: string;
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
export type PostRequest = {
    data: {
        Images: (number | string)[];
        title: string;
        discription?: string;
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
            title?: string;
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
export type VisitorListResponse = {
    data?: {
        id?: string;
        attributes?: {
            username?: string;
            email?: string;
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
                };
            };
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
export type VisitorRequest = {
    data: {
        username?: string;
        email?: string;
        avatar?: number | string;
    };
};
export type VisitorResponse = {
    data?: {
        id?: string;
        attributes?: {
            username?: string;
            email?: string;
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
                };
            };
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
    meta?: {
        pagination?: {
            page?: number;
            pageSize?: number;
            pageCount?: number;
            total?: number;
        };
    };
};
export type UsersPermissionsPermissionResponse = {
    data?: {
        id?: string;
        attributes?: {
            action?: string;
            role?: {
                data?: {
                    id?: string;
                    attributes?: {
                        name?: string;
                        description?: string;
                        "type"?: string;
                        permissions?: {
                            data?: {
                                id?: string;
                                attributes?: {
                                    action?: string;
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
                        users?: {
                            data?: {
                                id?: string;
                                attributes?: {
                                    username?: string;
                                    email?: string;
                                    provider?: string;
                                    resetPasswordToken?: string;
                                    confirmationToken?: string;
                                    confirmed?: boolean;
                                    blocked?: boolean;
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
    };
    meta?: object;
};
export type UsersPermissionsRoleResponse = {
    data?: {
        id?: string;
        attributes?: {
            name?: string;
            description?: string;
            "type"?: string;
            permissions?: {
                data?: {
                    id?: string;
                    attributes?: {
                        action?: string;
                        role?: {
                            data?: {
                                id?: string;
                                attributes?: {
                                    name?: string;
                                    description?: string;
                                    "type"?: string;
                                    permissions?: {
                                        data?: {
                                            id?: string;
                                            attributes?: {};
                                        }[];
                                    };
                                    users?: {
                                        data?: {
                                            id?: string;
                                            attributes?: {
                                                username?: string;
                                                email?: string;
                                                provider?: string;
                                                resetPasswordToken?: string;
                                                confirmationToken?: string;
                                                confirmed?: boolean;
                                                blocked?: boolean;
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
            users?: {
                data?: {
                    id?: string;
                    attributes?: {};
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
    };
    meta?: object;
};
export type UsersPermissionsRoleListResponse = {
    data?: {
        id?: string;
        attributes?: {
            name?: string;
            description?: string;
            "type"?: string;
            permissions?: {
                data?: {
                    id?: string;
                    attributes?: {
                        action?: string;
                        role?: {
                            data?: {
                                id?: string;
                                attributes?: {
                                    name?: string;
                                    description?: string;
                                    "type"?: string;
                                    permissions?: {
                                        data?: {
                                            id?: string;
                                            attributes?: {};
                                        }[];
                                    };
                                    users?: {
                                        data?: {
                                            id?: string;
                                            attributes?: {
                                                username?: string;
                                                email?: string;
                                                provider?: string;
                                                resetPasswordToken?: string;
                                                confirmationToken?: string;
                                                confirmed?: boolean;
                                                blocked?: boolean;
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
            users?: {
                data?: {
                    id?: string;
                    attributes?: {};
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
    meta?: {
        pagination?: {
            page?: number;
            pageSize?: number;
            pageCount?: number;
            total?: number;
        };
    };
};
export type UsersPermissionsRoleRequest = {
    data: {
        name: string;
        description?: string;
        "type"?: string;
        permissions?: (number | string)[];
        users?: (number | string)[];
    };
};
export type UsersPermissionsUserResponse = {
    data?: {
        id?: string;
        attributes?: {
            username?: string;
            email?: string;
            provider?: string;
            resetPasswordToken?: string;
            confirmationToken?: string;
            confirmed?: boolean;
            blocked?: boolean;
            role?: {
                data?: {
                    id?: string;
                    attributes?: {
                        name?: string;
                        description?: string;
                        "type"?: string;
                        permissions?: {
                            data?: {
                                id?: string;
                                attributes?: {
                                    action?: string;
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
                        users?: {
                            data?: {
                                id?: string;
                                attributes?: {
                                    username?: string;
                                    email?: string;
                                    provider?: string;
                                    resetPasswordToken?: string;
                                    confirmationToken?: string;
                                    confirmed?: boolean;
                                    blocked?: boolean;
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
    };
    meta?: object;
};
export type UsersPermissionsUserListResponse = {
    data?: {
        id?: string;
        attributes?: {
            username?: string;
            email?: string;
            provider?: string;
            resetPasswordToken?: string;
            confirmationToken?: string;
            confirmed?: boolean;
            blocked?: boolean;
            role?: {
                data?: {
                    id?: string;
                    attributes?: {
                        name?: string;
                        description?: string;
                        "type"?: string;
                        permissions?: {
                            data?: {
                                id?: string;
                                attributes?: {
                                    action?: string;
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
                        users?: {
                            data?: {
                                id?: string;
                                attributes?: {
                                    username?: string;
                                    email?: string;
                                    provider?: string;
                                    resetPasswordToken?: string;
                                    confirmationToken?: string;
                                    confirmed?: boolean;
                                    blocked?: boolean;
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
    meta?: {
        pagination?: {
            page?: number;
            pageSize?: number;
            pageCount?: number;
            total?: number;
        };
    };
};
export type UsersPermissionsUserRequest = {
    data: {
        username: string;
        email: string;
        provider?: string;
        password?: string;
        resetPasswordToken?: string;
        confirmationToken?: string;
        confirmed?: boolean;
        blocked?: boolean;
        role?: number | string;
    };
};
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
export function getVisitors({ sort, paginationWithCount, paginationPage, paginationPageSize, paginationStart, paginationLimit, fields, populate }: {
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
        data: VisitorListResponse;
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
    }>(`/visitors${QS.query(QS.form({
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
export function postVisitors(visitorRequest: VisitorRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: VisitorResponse;
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
    }>("/visitors", oazapfts.json({
        ...opts,
        method: "POST",
        body: visitorRequest
    }));
}
export function getVisitorsById(id: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: VisitorResponse;
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
    }>(`/visitors/${id}`, {
        ...opts
    });
}
export function putVisitorsById(id: string, visitorRequest: VisitorRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: VisitorResponse;
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
    }>(`/visitors/${id}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: visitorRequest
    }));
}
export function deleteVisitorsById(id: string, opts?: Oazapfts.RequestOpts) {
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
    }>(`/visitors/${id}`, {
        ...opts,
        method: "DELETE"
    });
}
export function getUploadFilesCount(opts?: Oazapfts.RequestOpts) {
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
    }>("/upload/files/count", {
        ...opts
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
export function getUsersPermissionsPermissions(opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: UsersPermissionsPermissionResponse;
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
    }>("/users-permissions/permissions", {
        ...opts
    });
}
export function getUsersPermissionsRolesById(id: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: UsersPermissionsRoleResponse;
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
    }>(`/users-permissions/roles/${id}`, {
        ...opts
    });
}
export function getUsersPermissionsRoles({ sort, paginationWithCount, paginationPage, paginationPageSize, paginationStart, paginationLimit, fields, populate }: {
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
        data: UsersPermissionsRoleListResponse;
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
    }>(`/users-permissions/roles${QS.query(QS.form({
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
export function postUsersPermissionsRoles(usersPermissionsRoleRequest: UsersPermissionsRoleRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: UsersPermissionsRoleResponse;
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
    }>("/users-permissions/roles", oazapfts.json({
        ...opts,
        method: "POST",
        body: usersPermissionsRoleRequest
    }));
}
export function putUsersPermissionsRolesByRole(role: string, usersPermissionsRoleRequest: UsersPermissionsRoleRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: UsersPermissionsRoleResponse;
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
    }>(`/users-permissions/roles/${role}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: usersPermissionsRoleRequest
    }));
}
export function deleteUsersPermissionsRolesByRole(role: string, opts?: Oazapfts.RequestOpts) {
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
    }>(`/users-permissions/roles/${role}`, {
        ...opts,
        method: "DELETE"
    });
}
export function getUsersCount(opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: UsersPermissionsUserResponse;
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
    }>("/users/count", {
        ...opts
    });
}
export function getUsers({ sort, paginationWithCount, paginationPage, paginationPageSize, paginationStart, paginationLimit, fields, populate }: {
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
        data: UsersPermissionsUserListResponse;
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
    }>(`/users${QS.query(QS.form({
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
export function postUsers(usersPermissionsUserRequest: UsersPermissionsUserRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: UsersPermissionsUserResponse;
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
    }>("/users", oazapfts.json({
        ...opts,
        method: "POST",
        body: usersPermissionsUserRequest
    }));
}
export function getUsersMe(opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: UsersPermissionsUserResponse;
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
    }>("/users/me", {
        ...opts
    });
}
export function getUsersById(id: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: UsersPermissionsUserResponse;
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
    }>(`/users/${id}`, {
        ...opts
    });
}
export function putUsersById(id: string, usersPermissionsUserRequest: UsersPermissionsUserRequest, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: UsersPermissionsUserResponse;
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
    }>(`/users/${id}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: usersPermissionsUserRequest
    }));
}
export function deleteUsersById(id: string, opts?: Oazapfts.RequestOpts) {
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
    }>(`/users/${id}`, {
        ...opts,
        method: "DELETE"
    });
}
