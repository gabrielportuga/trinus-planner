import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  Validators,
  FormBuilder,
  FormGroup,
  FormControl,
} from '@angular/forms';
import {
  LoadingController,
  ToastController,
  AlertController,
} from '@ionic/angular';
import { Router, NavigationEnd } from '@angular/router';
import { TravelService } from '../services/travel.service';
import { SharedTabsTravel } from '../services/shared-tabs-travel.service';
import { isUndefined } from 'util';
import { Subscription } from 'rxjs';
import { TravelRoadmapModel } from 'src/models/roadmap.model';
import { TravelRoadmapService } from '../services/travel-roadmap.service';
import { TravelModel } from 'src/models/travel.model';

@Component({
  selector: 'app-roadmap-travel-new',
  templateUrl: './roadmap-new.page.html',
  styleUrls: ['./roadmap-new.page.scss'],
})
export class RoadmapNewPage implements OnInit, OnDestroy {
  navigationSubscription: Subscription;
  validationsForm: FormGroup;
  travelRoadmap = {} as TravelRoadmapModel;
  travel = {} as TravelModel;
  datePickerObjPtBr: any = {};

  constructor(
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public router: Router,
    private formBuilder: FormBuilder,
    private travelRoadmapService: TravelRoadmapService,
    private sharedTabsTravel: SharedTabsTravel,
    private alertCtrl: AlertController
  ) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.initialiseInvites();
      }
    });
  }

  initialiseInvites() {
    // Set default values and re-fetch any data you need.
    this.getData();
  }

  ngOnInit() {
    this.datePickerObjPtBr = {
      inputDate: new Date(), // If you want to set date in date-picker
      fromDate: new Date(),
      toDate: new Date().setFullYear(new Date().getFullYear() + 5),
      //disableWeekDays: [],
      //disabledDates: [],
      mondayFirst: true,
      showTodayButton: true,
      dateFormat: 'DD/MM/YYYY',
      closeOnSelect: false,
      setLabel: 'ok',
      todayLabel: 'Hoje',
      closeLabel: 'Cancelar',
      titleLabel: 'Selecione uma data',
      monthsList: [
        'Jan',
        'Fev',
        'Mar',
        'Abr',
        'Mai',
        'Jun',
        'Jul',
        'Ago',
        'Set',
        'Out',
        'Nov',
        'Dez',
      ],
      weeksList: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
      clearButton: false,
      momentLocale: 'pt-BR',
      btnProperties: {
        expand: 'full', // "block" | "full"
        fill: 'clear', // "clear" | "default" | "outline" | "solid"
        size: '', // "default" | "large" | "small"
        disabled: '', // boolean (default false)
        strong: 'false', // boolean (default false)
        color: '',
        // "primary", "secondary", "tertiary", "success", "warning", "danger", "light", "medium", "dark" , and give color in string
      },
    };
    this.getData();
    this.travel = this.sharedTabsTravel.tabTravel;
    this.resetFields();
  }

  resetFields() {
    this.validationsForm = this.formBuilder.group({
      place: new FormControl('', Validators.required),
      startDate: new FormControl('', Validators.required),
      endDate: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    // console.log(this.travel);
    if (this.validationsForm.valid) {
      this.travelRoadmap.travel = this.travel;

      if (this.travelRoadmap.id) {
        this.travelRoadmapService
          .updateTravel(this.travelRoadmap)
          .then((res) => {
            this.sharedTabsTravel.tabTravel = this.travel;
            this.router.navigate(['tabs/roadmap-list']);
          });
      } else {
        this.travelRoadmapService
          .createTravel(this.travelRoadmap)
          .then((res) => {
            this.travelRoadmap.id = res.id;
            this.sharedTabsTravel.tabTravel = this.travel;
            this.router.navigate(['tabs/roadmap-list']);
          });
      }
    } else {
      this.validateAllFormFields(this.validationsForm);
    }
  }

  async delete() {
    const alert = await this.alertCtrl.create({
      header: 'Confirm',
      message:
        'Deseja realmente excluir o roteiro ' + this.travelRoadmap.place + '?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {},
        },
        {
          text: 'Sim',
          handler: () => {
            this.travelRoadmap.travel = this.travel;
            this.travelRoadmapService.deleteTravel(this.travelRoadmap).then(
              (res) => {
                this.sharedTabsTravel.tabTravel = this.travel;
                this.router.navigate(['tabs/roadmap-list']);
              },
              (err) => console.log(err)
            );
          },
        },
      ],
    });
    await alert.present();
  }

  async getData() {
    if (!isUndefined(this.router.getCurrentNavigation().extras.state)) {
      this.travelRoadmap = this.router.getCurrentNavigation().extras.state.travelRoadmap;

      // const loading = await this.loadingCtrl.create({
      //   message: 'Please wait...',
      // });

      // this.presentLoading(loading);
      // this.travelRoadmapService.getTravel(travelRoadmapId).then(
      //   (data) => {
      //     loading.dismiss();
      //     if (data) {
      //       this.travelRoadmap = data;
      //       this.travelRoadmap.id = travelRoadmapId;
      //     }
      //   },
      //   (err) => {
      //     loading.dismiss();
      //     console.log(err);
      //   }
      // );
    }
  }

  goToTravelRoadmapList() {
    this.sharedTabsTravel.tabTravel = this.travel;
    this.router.navigate(['tabs/roadmap-list']);
  }

  existTravel(): boolean {
    return isUndefined(this.travelRoadmap.id);
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  async presentLoading(loading) {
    return await loading.present();
  }
}
