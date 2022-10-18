import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./list-faculty-treatment.css";
import PatientInfoTable from "../components/PatientInfoTable";
import searchIcon from "../assets/SearchIcon.png";

const ListFacultyTreatment: React.FC = () => {
  return (
    <IonContent>
      {/*-- Back button with a default href --*/}
      <IonHeader className="header">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/login" />
            <IonTitle className="name-hospital">
              TRUNG TÂM Y TẾ THỊ XÃ HƯƠNG THỦY - THỪA THIÊN HUẾ
            </IonTitle>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <section className="section-wrapper-treatment">
        <div className="title-treatment">CHỌN KHOA ĐIỀU TRỊ</div>
        <div className="wrapper-faculty">
          <div className="content-faculty">
            <div className="title-content">K05</div>
            <div className="text-content">KHOA CHỐNG NHIỄM KHUẨN (0)</div>
          </div>
          <div className="content-faculty">
            <div className="title-content">K05</div>
            <div className="text-content">KHOA CHỐNG NHIỄM KHUẨN (0)</div>
          </div>
          <div className="content-faculty">
            <div className="title-content">K05</div>
            <div className="text-content">KHOA CHỐNG NHIỄM KHUẨN (0)</div>
          </div>
          <div className="content-faculty">
            <div className="title-content">K05</div>
            <div className="text-content">KHOA CHỐNG NHIỄM KHUẨN (0)</div>
          </div>
          <div className="content-faculty">
            <div className="title-content">K05</div>
            <div className="text-content">KHOA CHỐNG NHIỄM KHUẨN (0)</div>
          </div>
          <div className="content-faculty">
            <div className="title-content">K05</div>
            <div className="text-content">KHOA CHỐNG NHIỄM KHUẨN (0)</div>
          </div>
          <div className="content-faculty">
            <div className="title-content">K05</div>
            <div className="text-content">KHOA CHỐNG NHIỄM KHUẨN (0)</div>
          </div>
          <div className="content-faculty">
            <div className="title-content">K05</div>
            <div className="text-content">KHOA CHỐNG NHIỄM KHUẨN (0)</div>
          </div>
          <div className="content-faculty">
            <div className="title-content">K05</div>
            <div className="text-content">KHOA CHỐNG NHIỄM KHUẨN (0)</div>
          </div>
        </div>
        <div className="title-search">
          <span>THÔNG TIN BỆNH NHÂN</span>
          <div className="input-wrapper">
            <div className="icon-input">
              <img src={searchIcon} alt="" />
            </div>
            <input
              type="search"
              className="input-search"
              placeholder="Nhập SBA hoặc tên bệnh nhân để tìm kiếm"
            />
          </div>
        </div>
      </section>
      <PatientInfoTable />
    </IonContent>
  );
};

export default ListFacultyTreatment;
