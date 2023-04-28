import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { bsc } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { Toaster } from "react-hot-toast";

const { chains, provider } = configureChains(
  [bsc],
  [
    alchemyProvider({ apiKey: "aSDT-aK1-0jAEVEOfhP4WMB_zCbhbsOX" }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "Staking Pool",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <App />
        <Toaster />
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>
);
