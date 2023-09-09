export interface IAddress {
  uuid: string;
  zipcode: string;
  state: string;
  city: string;
  streetName: string;
  description: string;
  neighbourhood: string;
  streetNumber: string;
  latitude: string;
  longitude: string;
  createdAt: string;
}

export interface IBuildingInsightsResponse {
  name: string;
  center: Center;
  imageryDate: ImageryDate;
  postalCode: string;
  administrativeArea: string;
  statisticalArea: string;
  regionCode: string;
  solarPotential: SolarPotential;
}

export interface SolarPotential {
  maxArrayPanelsCount: number;
  maxArrayAreaMeters2: number;
  maxSunshineHoursPerYear: number;
  carbonOffsetFactorKgPerMwh: number;
  wholeRoofStats: WholeRoofStats;
  roofSegmentStats: RoofSegmentStat[];
  solarPanelConfigs: SolarPanelConfig[];
  financialAnalyses: FinancialAnalysis[];
  panelCapacityWatts: number;
  panelHeightMeters: number;
  panelWidthMeters: number;
  panelLifetimeYears: number;
  buildingStats: WholeRoofStats;
  solarPanels: SolarPanel[];
  imageryQuality: string;
  imageryProcessedDate: ImageryDate;
}

export interface SolarPanel {
  center: Center;
  orientation: string;
  yearlyEnergyDcKwh: number;
  segmentIndex: number;
}

export interface FinancialAnalysis {
  monthlyBill: MonthlyBill;
  panelConfigIndex: number;
  financialDetails?: FinancialDetails;
  leasingSavings?: LeasingSavings;
  cashPurchaseSavings?: CashPurchaseSavings;
  financedPurchaseSavings?: FinancedPurchaseSavings;
}

export interface FinancedPurchaseSavings {
  annualLoanPayment: AnnualLeasingCost;
  rebateValue: StateIncentive;
  loanInterestRate: number;
  savings: Savings;
}

export interface CashPurchaseSavings {
  outOfPocketCost: MonthlyBill;
  upfrontCost: MonthlyBill;
  rebateValue: AnnualLeasingCost;
  paybackYears: number;
  savings: Savings;
}

export interface LeasingSavings {
  leasesAllowed: boolean;
  leasesSupported: boolean;
  annualLeasingCost: AnnualLeasingCost;
  savings: Savings;
}

export interface Savings {
  savingsYear1: MonthlyBill;
  savingsYear20: MonthlyBill;
  presentValueOfSavingsYear20: AnnualLeasingCost;
  financiallyViable: boolean;
  savingsLifetime: MonthlyBill;
  presentValueOfSavingsLifetime: AnnualLeasingCost;
}

export interface AnnualLeasingCost {
  currencyCode: string;
  units: string;
  nanos: number;
}

export interface FinancialDetails {
  initialAcKwhPerYear: number;
  remainingLifetimeUtilityBill: MonthlyBill;
  federalIncentive: MonthlyBill;
  stateIncentive: StateIncentive;
  utilityIncentive: StateIncentive;
  lifetimeSrecTotal: StateIncentive;
  costOfElectricityWithoutSolar: MonthlyBill;
  netMeteringAllowed: boolean;
  solarPercentage: number;
  percentageExportedToGrid: number;
}

export interface StateIncentive {
  currencyCode: string;
}

export interface MonthlyBill {
  currencyCode: string;
  units: string;
}

export interface SolarPanelConfig {
  panelsCount: number;
  yearlyEnergyDcKwh: number;
  roofSegmentSummaries: RoofSegmentSummary[];
}

export interface RoofSegmentSummary {
  pitchDegrees: number;
  azimuthDegrees: number;
  panelsCount: number;
  yearlyEnergyDcKwh: number;
  segmentIndex: number;
}

export interface RoofSegmentStat {
  pitchDegrees: number;
  azimuthDegrees: number;
  stats: WholeRoofStats;
  center: Center;
  boundingBox: BoundingBox;
  planeHeightAtCenterMeters: number;
}

export interface BoundingBox {
  sw: Center;
  ne: Center;
}

export interface WholeRoofStats {
  areaMeters2: number;
  sunshineQuantiles: number[];
  groundAreaMeters2: number;
}

export interface ImageryDate {
  year: number;
  month: number;
  day: number;
}

export interface Center {
  latitude: number;
  longitude: number;
}