import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Carousels(props) {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className={props.className}
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={props.className}
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_TallHero_Gamers_en_US_1x._CB667161802_.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={props.className}
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/OnePlusNordNewLaunch/July/SUD/24999/D25228501_IN_WL_SUD_OnePlus_Nord_CE_5G_TallHero_1500x600_2._CB663898844_.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={props.className}
          src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2021/desktop-1x._CB658860139_.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={props.className}
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg"
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}
export default Carousels;
