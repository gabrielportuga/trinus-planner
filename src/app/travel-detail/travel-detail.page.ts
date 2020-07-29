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
import { TravelModel } from 'src/models/travel.model';
import { isUndefined } from 'util';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-travel-detail',
  templateUrl: './travel-detail.page.html',
  styleUrls: ['./travel-detail.page.scss'],
})
export class TravelDetailPage implements OnInit, OnDestroy {
  navigationSubscription: Subscription;
  validationsForm: FormGroup;
  travel = {} as TravelModel;
  datePickerObjPtBr: any = {};

  constructor(
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public router: Router,
    private formBuilder: FormBuilder,
    private travelService: TravelService,
    private sharedTabsTravel: SharedTabsTravel,
    private alertCtrl: AlertController
  ) {
    // this.navigationSubscription = this.router.events.subscribe((e: any) => {
    //   // If it is a NavigationEnd event re-initalise the component
    //   if (e instanceof NavigationEnd) {
    //     this.initialiseInvites();
    //   }
    // });
  }

  // initialiseInvites() {
  //   // Set default values and re-fetch any data you need.
  //   this.getData();
  // }

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
    this.resetFields();
  }

  resetFields() {
    this.validationsForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      startDate: new FormControl('', Validators.required),
      endDate: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    // console.log(this.travel);
    if (this.validationsForm.valid) {
      if (this.travel.id) {
        this.travelService
          .updateTravel(this.travel.id, this.travel)
          .then((res) => {
            this.sharedTabsTravel.tabTravel = this.travel;
            this.router.navigate(['tabs/roadmap-list']);
          });
      } else {
        this.travelService.createTravel(this.travel).then((res) => {
          this.travel.id = res.id;
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
      message: 'Deseja excluir a viajem ' + this.travel.name + '?',
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
            this.travelService.deleteTravel(this.travel.id).then(
              (res) => {
                this.router.navigate(['travel-list']);
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
    if (!isUndefined(this.sharedTabsTravel.tabTravel)) {
      this.travel = this.sharedTabsTravel.tabTravel;
    }

    if (!isUndefined(this.router.getCurrentNavigation().extras.state)) {
      // const loading = await this.loadingCtrl.create({
      //   message: 'Please wait...',
      // });
      // this.presentLoading(loading);
      this.travel = this.router.getCurrentNavigation().extras.state.travel;
      this.sharedTabsTravel.tabTravel = this.travel;

      // this.travelService.getTravel(travelId).then(
      //   (data) => {
      //     loading.dismiss();
      //     if (data) {
      //       this.travel = data;
      //       this.travel.id = travelId;
      //       this.sharedTabsTravel.tabTravel = this.travel;
      //     }
      //   },
      //   (err) => {
      //     loading.dismiss();
      //     console.log(err);
      //   }
      // );
    }
  }

  existTravel(): boolean {
    return isUndefined(this.travel.id);
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

  isNewTravel(): boolean {
    return isUndefined(this.sharedTabsTravel.tabTravel);
  }

  async presentLoading(loading) {
    return await loading.present();
  }
}
