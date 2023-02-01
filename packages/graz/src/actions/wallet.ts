import type { Keplr } from "@keplr-wallet/types";

import { useGrazStore } from "../store";
import { WALLET_TYPES, WalletType } from "../types/wallet";

/**
 * Function to check whether given {@link WalletType} or default configured wallet exists.
 *
 * @example
 * ```ts
 * const isSupported = checkWallet();
 * const isKeplrSupported = checkWallet("keplr");
 * ```
 */
export const checkWallet = (type: WalletType = useGrazStore.getState().walletType): boolean => {
  try {
    getWallet(type);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

/**
 * Function to return {@link Keplr} object and throws and error if it does not exist on `window`.
 *
 * @example
 * ```ts
 * try {
 *   const keplr = getKeplr();
 * } catch (error: Error) {
 *   console.error(error.message);
 * }
 * ```
 *
 * @see https://docs.keplr.app
 */
export const getKeplr = (): Keplr => {
  if (typeof window.keplr !== "undefined") return window.keplr;
  useGrazStore.getState()._notFoundFn();
  throw new Error("window.keplr is not defined");
};

/**
 * Function to return Leap object (which is {@link Keplr}) and throws and error if it does not exist on `window`.
 *
 * @example
 * ```ts
 * try {
 *   const leap = getLeap();
 * } catch (error: Error) {
 *   console.error(error.message);
 * }
 * ```
 *
 * @see https://docs.keplr.app
 */
export const getLeap = (): Keplr => {
  console.log("*******window", window);
  console.log("*******window-detail", window.leap, window.keplr);
  if (typeof window.leap !== "undefined") return window.leap;
  useGrazStore.getState()._notFoundFn();
  throw new Error("window.leap is not defined");
};


/**
 * Function to return wallet object based on given {@link WalletType} or from store and throws an error if it does not
 * exist on `window` or unknown wallet type.
 *
 * @example
 * ```ts
 * const wallet = getWallet();
 * const keplr = getWallet("keplr");
 * ```
 *
 * @see {@link getKeplr}
 */
export const getWallet = (type: WalletType = useGrazStore.getState().walletType): Keplr => {
  switch (type) {
    // case WalletType.KEPLR: {
    //   return getKeplr();
    // }
    // case WalletType.LEAP: {
    //   return getLeap();
    // }
    // default: {
    //   throw new Error("Unknown wallet type");
    // }
  }

  return getLeap();
};

export const getAvailableWallets = (): Record<WalletType, boolean> => {
  return Object.fromEntries(WALLET_TYPES.map((type) => [type, checkWallet(type)])) as Record<WalletType, boolean>;
};
