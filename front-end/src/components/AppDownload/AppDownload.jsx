import { assets } from '../../assets/assets';
import './AppDownload.css'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For Beter Experience Download <br /> Tomato App</p>
        <div className="app-downlaod-plateforms">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
    </div>
  );
}

export default AppDownload;
