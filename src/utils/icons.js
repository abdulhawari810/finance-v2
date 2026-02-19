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
