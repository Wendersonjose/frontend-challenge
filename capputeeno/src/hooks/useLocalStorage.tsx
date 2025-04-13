import { useEffect, useState } from "react";

export function useLocalStorage<T>(item: string, initialValue: T) {
  const [value, setValue] = useState<T>(initialValue);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const storedValue = localStorage.getItem(item);
        if (storedValue !== null) {
          setValue(JSON.parse(storedValue));
        } else {
          localStorage.setItem(item, JSON.stringify(initialValue));
        }
      } catch (error) {
        console.error("Erro ao ler do localStorage:", error);
      }
    }
  }, [item]);

  const updateLocalStorage = (newValue: T) => {
    try {
      setValue(newValue);
      if (typeof window !== 'undefined') {
        localStorage.setItem(item, JSON.stringify(newValue));
      }
    } catch (error) {
      console.error("Erro ao salvar no localStorage:", error);
    }
  };

  return {
    value,
    updateLocalStorage,
  };
}