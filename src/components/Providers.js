"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

const BrandingContext = createContext(undefined);

export function BrandingProvider({ children }) {
    const [isIntroFinished, setIsIntroFinished] = useState(false);

    const finishIntro = useCallback(() => {
        setIsIntroFinished(true);
    }, []);

    return (
        <BrandingContext.Provider value={{ isIntroFinished, finishIntro }}>
            {children}
        </BrandingContext.Provider>
    );
}

export function useBranding() {
    const context = useContext(BrandingContext);
    if (context === undefined) {
        throw new Error("useBranding must be used within a BrandingProvider");
    }
    return context;
}
