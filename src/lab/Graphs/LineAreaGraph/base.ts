export interface AreaGrapher {
  metricName: string;
  data: Array<DataValueString>;
  baseColor?: string;
}
export interface DataValueString {
  date: number | string;
  value: number | string;
}

export interface ToolTipInterface {
  metricName: string;
  data: DataValueString;
  baseColor?: string;
}

export interface LegendData {
  value: Array<string>;
  baseColor?: string;
}
