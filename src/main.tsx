import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { bsc } from "wagmi/chains";
import { Toaster } from "react-hot-toast";

const chains = [bsc];
const projectId = "523d3d83a0bcca9d8ba03a932a712917";

const { provider } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  provider,
});
const ethereumClient = new EthereumClient(wagmiClient, chains);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <WagmiConfig client={wagmiClient}>
      <App />
      <Toaster />
    </WagmiConfig>
    <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
  </React.StrictMode>
);
