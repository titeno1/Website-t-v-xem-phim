import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
import { UserLayoutsComponent } from './user-layouts/user-layouts.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NewsComponent } from './news/news.component';
import { ItemPointComponent } from './item-point/item-point.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DangNhapComponent } from './dang-nhap/dang-nhap.component';
import { ItemPhimComponent } from './item-phim/item-phim.component';
import { ListPhimComponent } from './list-phim/list-phim.component';
import { PhimDangChieuComponent } from './phim-dang-chieu/phim-dang-chieu.component';
import { PopupTrailerComponent } from './popup-trailer/popup-trailer.component';
import { PipeModule } from '../pipe/pipe.module';
import { ChiTietPhimLayoutsComponent } from './chi-tiet-phim-layouts/chi-tiet-phim-layouts.component';
import { RouterModule } from '../../../node_modules/@angular/router';
import { DatVeLayoutsComponent } from './dat-ve-layouts/dat-ve-layouts.component';
import { ItemGheComponent } from './item-ghe/item-ghe.component';
import { FormsModule } from '@angular/forms';
import { LoadItemComponent } from './load-item/load-item.component';
import { AnouThongBaoComponent } from './anou-thong-bao/anou-thong-bao.component';
import { PickGioComponent } from './pick-gio/pick-gio.component';
import { ListGheComponent } from './list-ghe/list-ghe.component';
import { PhimSapChieuComponent } from './phim-sap-chieu/phim-sap-chieu.component';
import { DanhGiaComponent } from './danh-gia/danh-gia.component';
import { ItemPhimSearchComponent } from './item-phim-search/item-phim-search.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TrangCaNhanLayoutsComponent } from './trang-ca-nhan-layouts/trang-ca-nhan-layouts.component';
import { TrangChuLayoutsComponent } from './trang-chu-layouts/trang-chu-layouts.component';
import { ItemTinTucComponent } from './item-tin-tuc/item-tin-tuc.component';
import { TinTucLayoutsComponent } from './tin-tuc-layouts/tin-tuc-layouts.component';
import { ContactComponent } from './contact/contact.component';
import { LoadPageComponent } from './load-page/load-page.component';

@NgModule({
  imports: [
    CommonModule, MatButtonModule, MatDialogModule, BrowserAnimationsModule, NoopAnimationsModule, PipeModule, RouterModule, FormsModule, Ng2SearchPipeModule, BrowserAnimationsModule
  ],
  declarations: [SideBarComponent, UserLayoutsComponent, SearchBarComponent, CarouselComponent, NewsComponent, ItemPointComponent, DangNhapComponent, ItemPhimComponent, ListPhimComponent, PhimDangChieuComponent, PopupTrailerComponent, ChiTietPhimLayoutsComponent, DatVeLayoutsComponent, ItemGheComponent, LoadItemComponent, AnouThongBaoComponent, PickGioComponent, ListGheComponent, PhimSapChieuComponent, DanhGiaComponent, ItemPhimSearchComponent, TrangCaNhanLayoutsComponent, TrangChuLayoutsComponent, ItemTinTucComponent, TinTucLayoutsComponent, ContactComponent, LoadPageComponent],
  exports: [
    SideBarComponent, UserLayoutsComponent, SearchBarComponent, CarouselComponent, NewsComponent, ItemPointComponent, DangNhapComponent, ItemPhimComponent, ListPhimComponent, PhimDangChieuComponent, PopupTrailerComponent, ChiTietPhimLayoutsComponent, DatVeLayoutsComponent, ItemGheComponent, LoadItemComponent, AnouThongBaoComponent, PickGioComponent, ListGheComponent, PhimSapChieuComponent, DanhGiaComponent, ItemPhimSearchComponent, TrangCaNhanLayoutsComponent, ItemTinTucComponent, TinTucLayoutsComponent, ContactComponent, LoadPageComponent
  ]
})
export class UserModule { }
