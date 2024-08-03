"use client";

import CircularProgress from "@mui/material/CircularProgress";
import React, { useEffect, useState } from "react";
import { I18nextProvider } from "react-i18next";

import i18n from "../../i18n/i18n";
import { LOCAL_STORAGE_LANGUAGE_KEY } from "../../utils/constants/i18n";

const I18nProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedLanguage = localStorage.getItem(LOCAL_STORAGE_LANGUAGE_KEY);
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
    } else {
      i18n.changeLanguage("pt"); // Default language if none is stored
    }
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <CircularProgress />
      </div>
    );
  }

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default I18nProvider;
