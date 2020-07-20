import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import { MaterialsService } from '../materials.service';
import { WastageService } from '../wastage.service';

@Component({
  selector: 'app-primaryinput',
  templateUrl: './primaryinput.component.html',
  styleUrls: ['./primaryinput.component.css']
})

export class PrimaryinputComponent implements OnInit {

  @Input() showPrimaryInput_Child;
  @Output() messageEvent = new EventEmitter<any>();

  showFormFirstPart = true;
  showFormSecondPart = false;

  showOutput = false;
  disabledDensity = false;
  errorMessage = "";

  materials = [];
  density: number = null;
  job_name: string = "";
  cost_per_unit_area: number = null;
  thickness: number = null;
  height: number = null;
  width: number = null;
  materialNumber: number = -1;
  materialName: string = "";

  PieChart = [];

  constructor(private _wastageService: WastageService, private _materialsService: MaterialsService) { }

  onCancel() {
    this.showPrimaryInput_Child = false;
    this.messageEvent.emit(this.showPrimaryInput_Child);
  }

  showNextForm() {
    this.showFormFirstPart = false;
    this.showFormSecondPart = true;
  }

  showPrevForm() {
    this.showFormFirstPart = true;
    this.showFormSecondPart = false;
  }

  showMaterials() {
    this._materialsService.getMaterials().subscribe(data => this.materials = data);
  }

  selectMaterial() {
    if (this.materialNumber == -1) {
      this.density = null;
      this.disabledDensity = false;
    } else {
      this.disabledDensity = true;
      this.density = this.materials[this.materialNumber].density;
    }
  }

  onExtractFromDxf(event) {
    var fd = new FormData();
    var files = event.target[9].files;

    if (files.length == 0) {
      this.errorMessage = "Please Select File";
      return;
    }

    if (this.density == null) {
      this.errorMessage = "Density must not be blank";
      return;
    } else if (isNaN(this.density)) {
      this.errorMessage = "Density must be number";
      return;
    }

    if (isNaN(this.cost_per_unit_area) && this.cost_per_unit_area != null) {
      this.errorMessage = "Cost must be number";
      return;
    }

    if (this.thickness == null) {
      this.errorMessage = "Thickness must not be blank";
      return;
    } else if (isNaN(this.thickness)) {
      this.errorMessage = "Thickness must be number";
      return;
    }

    if (this.height == null) {
      this.errorMessage = "Height must not be blank";
      return;
    } else if (isNaN(this.height)) {
      this.errorMessage = "Height must be number";
      return;
    }

    if (this.width == null) {
      this.errorMessage = "Width must not be blank";
      return;
    } else if (isNaN(this.width)) {
      this.errorMessage = "Width must be number";
      return;
    }

    if (this.job_name == "") {
      this.errorMessage = "Job name must not be blank";
      return;
    }

    if(this.materialNumber == -1) {
      this.materialName = "Unknown";
    } else {
      this.materialName = this.materials[this.materialNumber].name;
    }

    fd.append('density', '' + this.density);
    fd.append('cost_per_unit_area', '' + this.cost_per_unit_area);
    fd.append('thickness', '' + this.thickness);
    fd.append('height', '' + this.height);
    fd.append('width', '' + this.width);
    fd.append('job_name', '' + this.job_name);
    fd.append('material_name', '' + this.materialName);
    fd.append('dxf_file', files[0]);
    this._wastageService.extractDxf(fd).subscribe(data => {
      console.log("Done");
      console.log(data);
      this.errorMessage = "";
    });
  }

  ngOnInit() {
    this.showMaterials();
  }

}
