export interface IConverter {
  code: string;
  codein: string;
  name: string;
  high: number;
  low: number;
  varBid: number;
  pctChange: number;
  bid: number;
  ask: number;
  timestamp: number;
  create_date: number;
}

export interface IConverterData {
  [item: string]: IConverter;
}
