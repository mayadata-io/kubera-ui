export interface DataValue {
  date: number;
  value: number;
}

export interface AreaGrapher {
  metricName: string;
  data: Array<DataValue>;
  baseColor?: string;
}
export interface ToolTipInterface {
  metricName: string;
  data: DataValue;
  baseColor?: string;
}

export interface LegendData {
  value: Array<string>;
  baseColor?: string;
}
