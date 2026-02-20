import {
  Home as HomeIcon,
  AccountBalanceWalletRounded as WalletIcon,
  CallMadeRounded as ArrowUp,
  CallReceivedRounded as ArrowDown,
  TrendingUpRounded as ExpenseIcon,
  TrendingDownRounded as IncomeIcon,
  SyncAltRounded as TransferIcon,
  GridViewRounded as DashboardIcon,
  ReceiptRounded as TransactionIcon,
  SettingsRounded as SettingsIcon,
  AnalyticsRounded as AnalyticsIcon,
  ArrowBackRounded as ArrowBackIcon,
} from "@mui/icons-material";

import bri from "../assets/bank/bri-banking.png";
import bca from "../assets/bank/bca-banking.png";
import jago from "../assets/bank/jago-banking.png";
import jenius from "../assets/bank/jenius-banking.png";
import seabank from "../assets/bank/seabank-banking.png";
import mandiri from "../assets/bank/mandiri-banking.png";
import neobank from "../assets/bank/neobank-banking.png";

import dana from "../assets/e-wallet/dana-ewallet.png";
import ovo from "../assets/e-wallet/ovo-ewallet.png";
import gopay from "../assets/e-wallet/gopay-ewallet.png";
import shopeepay from "../assets/e-wallet/shopeepay-ewallet.png";
import linkaja from "../assets/e-wallet/linkaja-ewallet.png";

import master_card from "../assets/debit/mastercard-debit.png";
import visa from "../assets/debit/visa-debit.png";

const iconMapping = {
  home: HomeIcon,
  wallet: WalletIcon,
  arrowup: ArrowUp,
  arrowdown: ArrowDown,
  expense: ExpenseIcon,
  income: IncomeIcon,
  transfer: TransferIcon,
  dashboard: DashboardIcon,
  transaction: TransactionIcon,
  settings: SettingsIcon,
  analytics: AnalyticsIcon,
  arrowback: ArrowBackIcon,
};

export const getIcons = (name) => {
  return iconMapping[name] || null;
};

export const ProviderIcons = {
  bri,
  bca,
  dana,
  ovo,
  shopeepay,
  linkaja,
  jenius,
  jago,
  seabank,
  visa,
  master_card,
  gopay,
  mandiri,
  neobank,
};
