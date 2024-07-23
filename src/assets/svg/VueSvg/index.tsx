import styles from './styles.module.scss';
import ten from '../../images/symbols/wild-bandito_h_tequila.png'

interface SymbolSvgProps {
  animate?: boolean;
}

const VueSvg: React.FC<SymbolSvgProps> = ({ animate = false }) => {
  return (
    <img src={ten} className={animate ? styles.icon : ''} width="70px" height="70" alt="" />

    // <svg
    //   aria-hidden={true}
    //   width="50"
    //   height="50"
    //   className={animate ? styles.icon : ''}
    //   viewBox="0 0 32 32"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <path d="M7.53,3.925,16,18.485l8.4-14.56H19.22L16,9.525l-3.29-5.6Z" fill="#35495e" />
    //   <path d="M2,3.925l14,24.15L30,3.925H24.4L16,18.415,7.53,3.925Z" fill="#41b883" />
    // </svg>
  );
};

export { VueSvg };
