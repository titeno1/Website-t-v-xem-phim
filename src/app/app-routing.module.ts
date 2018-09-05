import { QuanLyTinTucComponent } from './admin/quan-ly-tin-tuc/quan-ly-tin-tuc.component';

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserLayoutsComponent } from "./user/user-layouts/user-layouts.component";
import { AdminLayoutComponent } from "./admin/admin-layout/admin-layout.component";
import { QuanLyPhimComponent } from "./admin/quan-ly-phim/quan-ly-phim.component";
import { QuanLyNguoiDungComponent } from "./admin/quan-ly-nguoi-dung/quan-ly-nguoi-dung.component";
import { LoginAdminComponent } from "./admin/login-admin/login-admin.component";
import { TrangchuAdminComponent } from "./admin/trangchu-admin/trangchu-admin.component";
import { ChiTietPhimLayoutsComponent } from "./user/chi-tiet-phim-layouts/chi-tiet-phim-layouts.component";
import { DatVeLayoutsComponent } from "./user/dat-ve-layouts/dat-ve-layouts.component";
import { TrangCaNhanLayoutsComponent } from "./user/trang-ca-nhan-layouts/trang-ca-nhan-layouts.component";
import { AnouThongBaoComponent } from "./user/anou-thong-bao/anou-thong-bao.component";
import { TrangChuLayoutsComponent } from "./user/trang-chu-layouts/trang-chu-layouts.component";
import { TinTucLayoutsComponent } from './user/tin-tuc-layouts/tin-tuc-layouts.component';
import { LoginGuardService } from './services/login-guard.service';

const appRoute: Routes = [
  {
    path: '', component: UserLayoutsComponent, children: [
      { path: '', component: TrangChuLayoutsComponent },
      { path: 'chitiet/:maphim', component: ChiTietPhimLayoutsComponent },
      { path: 'trangcanhan', component: TrangCaNhanLayoutsComponent },
      { path: 'chitietTinTuc/:matin', component: TinTucLayoutsComponent },
    ]
  },
  { path: 'datve/:maphim', component: DatVeLayoutsComponent },
  { path: 'datvethanhcong', component: AnouThongBaoComponent },
  {
    path: "admin", component: LoginAdminComponent
  },
  {
    path: "admintrangchu", component: AdminLayoutComponent, canActivate: [LoginGuardService], children: [
      { path: 'charts', component: TrangchuAdminComponent },
      { path: 'quanlyphim', component: QuanLyPhimComponent },
      { path: 'quanlynguoidung', component: QuanLyNguoiDungComponent },
      { path: 'quanlytintuc', component: QuanLyTinTucComponent },
      { path: 'admin', component: LoginAdminComponent }
    ]
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoute)]
})
export class AppRoutingModule { }
