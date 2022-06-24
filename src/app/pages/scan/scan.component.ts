import {Component, OnInit, ViewChild} from '@angular/core';
import {BarcodeFormat} from "@zxing/browser";
import {BarcodeScannerLivestreamComponent} from "ngx-barcode-scanner";

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.scss']
})
export class ScanComponent implements OnInit {

  public availableDevices: MediaDeviceInfo[];
  public hasDevices: boolean;
  currentDevice: MediaDeviceInfo;

  formatsEnabled: BarcodeFormat[] = [
    BarcodeFormat.CODE_128,
    BarcodeFormat.DATA_MATRIX,
    BarcodeFormat.EAN_13,
    BarcodeFormat.QR_CODE,
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  onCodeResult(stringResult: string): void {
    console.log(stringResult);
  }

  onCamerasFound(devices: MediaDeviceInfo[]): void {
    this.availableDevices = devices;
    this.hasDevices = Boolean(devices && devices.length);
    console.log(this.availableDevices)
  }

  changeCamera(): void {
    this.currentDevice = this.availableDevices[1];
  }

  @ViewChild(BarcodeScannerLivestreamComponent)
  barcodeScanner: BarcodeScannerLivestreamComponent;

  barcodeValue: any;

  ngAfterViewInit() {
    this.barcodeScanner.start();
  }

  onValueChanges(result: any) {
    console.log(result);
    this.barcodeValue = result.codeResult.code;
  }

  onStarted(started: any) {
    console.log(started);
  }

}
