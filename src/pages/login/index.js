/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import LogoLight from "../../assets/logoLight.png";
import LogoDark from "../../assets/logoDark.png";

const Login = () => {
  return (
    <div className="container-fluid h-100">
      <center>
        <div className="container-fluid position-relativer mx-auto">

          <div className="row loginPanel position-absolute top-50 start-50 translate-middle">
            <div className="col-6 d-none d-sm-block d-flex align-items-center justify-content-center text-center loginLogo  ">
              <div className="d-flex h-100 align-items-center">
                <img src={LogoLight} className="img-fluid d-flex align-items-center justify-content-center mx-auto col-11 p-4 " alt="Logo" />
              </div>
            </div>
            <div className="col-xs-12 col-sm-3 col-md-6 my-auto flex-column loginForm bgLinearGradient ">
              <div className="d-flex h-100 flex-column align-items-center justify-content-center">
                <img src={LogoDark} className="img-fluid d-block d-sm-none mx-auto col-11 p-1 " alt="Logo" />
                <h2 className="titleFormLogin mt-5 text-center">Bem-Vindo</h2>
                <p class="description description-primary text-muted text-center subTitleFormLogin mb-4">Por favor entre com suas informações pessoais</p>

                <div className="formLigin col-10">
                  <input
                    type="text"
                    className="form-control form-control-lg mb-3"
                    placeholder="Usuário" />
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Senha" />

                  <a href="#" className="hadleSenha d-flex justify-content-end m-1">Esqueceu a senha?</a>

                  <div class="d-grid gap-2 mt-3">
                    <button type="button" className="btn btn-lg btn-secondary btn-block d-md-block ">
                      Entrar
                    </button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </center>
    </div>
  );

}

export default Login;
