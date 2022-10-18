import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Login.css";
import letterIcon from "../assets/Letter1.png";
import lockIcon from "../assets/Lock.png";

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="header" color="">
        <IonToolbar>
          <IonTitle className="title">Đăng nhập</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="content" color={"dark"}>
        <section className="section-wrapper">
          <div className="wrapper">
            <label htmlFor="hospital">Bệnh viện</label>
            <div className="wrap-input">
              <select name="hospital" id="hospital">
                <option value="">Chọn bệnh viện</option>
                <option value="">Bệnh viện Trung ương Huế</option>
              </select>
              <hr />
              <div className="input">
                <div>
                  <img src={letterIcon} alt="" />
                </div>
                <input type="text" />
              </div>
              <div className="input">
                <div className="input-icon-second">
                  <img src={lockIcon} alt="" />
                </div>
                <input type="password" />
              </div>
            </div>
          </div>
          <button className="btn-login">Đăng nhập </button>
          <a href="/list-faculty-treatment">dang nhap</a>
        </section>
      </IonContent>
    </IonPage>
  );
};

export default Login;
