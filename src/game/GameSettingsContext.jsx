import React, {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

const GameSettingsContext = createContext(null);

const DEFAULT_SETTINGS = {
  diskCount: 3,
  difficulty: "normal",
  speed: 1,
};

export function GameSettingsProvider({ children }) {
  const [settings, setSettings] = useState(() => {
    try {
      const saved = localStorage.getItem("hanoi-settings");
      return saved
        ? { ...DEFAULT_SETTINGS, ...JSON.parse(saved) }
        : DEFAULT_SETTINGS;
    } catch (e) {
      console.error("Failed to read settings from localStorage", e);
      return DEFAULT_SETTINGS;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("hanoi-settings", JSON.stringify(settings));
    } catch (e) {
      console.error("Failed to save settings to localStorage", e);
    }
  }, [settings]);

  const updateSettings = (patch) => {
    setSettings((prev) => ({ ...prev, ...patch }));
  };

  const value = { settings, updateSettings };

  return (
    <GameSettingsContext.Provider value={value}>
      {children}
    </GameSettingsContext.Provider>
  );
}

export function useGameSettings() {
  const ctx = useContext(GameSettingsContext);
  if (!ctx) {
    throw new Error(
      "useGameSettings must be used inside GameSettingsProvider"
    );
  }
  return ctx;
}
