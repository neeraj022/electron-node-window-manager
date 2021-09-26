export interface IRectangle {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
}

export interface IMonitorInfo {
  id: number;
  bounds?: IRectangle;
  isPrimary?: boolean;
  workArea?: IRectangle;
}

export interface IAddOn {
  getActiveWindow: Function;
  getWindows: Function;
  requestAccessibility: Function;
  getMonitors: Function;
  createProcess: Function;
  initWindow: Function;
  getWindowBounds: Function;
  setWindowBounds: Function;
  getWindowTitle: Function;
  getMonitorFromWindow: Function;
  showWindow: Function;
  setWindowMinimized: Function;
  setWindowMaximized: Function;
  bringWindowToTop: Function;
  redrawWindow: Function;
  isWindow: Function;
  isWindowVisible: Function;
  toggleWindowTransparency: Function;
  setWindowOpacity: Function;
  getWindowOpacity: Function;
  setWindowOwner: Function;
  getWindowOwner: Function;
  getMonitorInfo: Function;
  getMonitorScaleFactor: Function;
}
