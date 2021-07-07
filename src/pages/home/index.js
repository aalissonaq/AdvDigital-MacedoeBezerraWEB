import LogoLight from "../../assets/logoLight.png";
import LogoDark from "../../assets/logoDark.png";
import LogoCI from "../../assets/CI.png";


const Home = () => {
  return (
    <div className="container-fluid h-100 w-100 ">
      <div className="col-10 border offset-md-2 p-1 homeHeader">
        Header
      </div>
      <div className="bgLinearGradient text-muted homeSiderBar h-100 ">
        <div className="siderBarTop">
          <img src={LogoDark} className="img-fluid px-4 my-3 mt-4" alt={LogoLight} />

        </div>
        <div className="contentMenuSiderBar">
          conteudo
        </div>

        <div class="  position-relative">
          <div class="position-absolute bottom-0 end-0">

            <img src={LogoCI} className="img-fluid me-3" alt={LogoCI} />
          </div>

        </div>
      </div>
    </div>
  );

}

export default Home
