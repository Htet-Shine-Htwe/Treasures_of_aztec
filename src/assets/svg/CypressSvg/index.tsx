import styles from './styles.module.scss';
import tequila from '../../symbols/treasures-of-aztec_h_flower_a.png'

interface SymbolSvgProps {
  animate?: boolean;
}

const CypressSvg: React.FC<SymbolSvgProps> = ({ animate }) => {
  return (
    <img src={tequila} className={animate ? styles.icon : ''} width="70px" height="70" alt="" />

    // <svg
    //   aria-hidden={true}
    //   width="50"
    //   height="50"
    //   className={animate ? styles.icon : ''}
    //   viewBox="0 0 32 32"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <title>file_type_cypress</title>
    //   <path
    //     d="M16.075,3.588A12.48,12.48,0,1,1,3.6,16.068a12.473,12.473,0,0,1,12.48-12.48Z"
    //     fill="#4a4a4d"
    //     data-name="<Path>"
    //   />
    //   <path
    //     d="M16.075,28.775A12.707,12.707,0,1,1,28.782,16.068,12.721,12.721,0,0,1,16.075,28.775Zm0-24.959A12.253,12.253,0,1,0,28.328,16.068,12.267,12.267,0,0,0,16.075,3.815Z"
    //     fill="#fff"
    //   />
    //   <g fill="#fff" opacity=".1" data-name="<Group>">
    //     <path
    //       d="M29.871,16.613a1.63,1.63,0,0,0,.091-.817,1.139,1.139,0,0,1-.091-.454v-.363c0-.318-.091-.5-.091-.771a9.462,9.462,0,0,0-.318-1.634,13.736,13.736,0,0,0-3.63-6.444A12.823,12.823,0,0,0,22.61,3.77,28.61,28.61,0,0,0,19.343,2.5h-.454V2.408h-.635V2.318h-.862V2.227H14.759v.091H13.9v.091h-.545V2.5h-.545A19.7,19.7,0,0,0,9.178,4,15.908,15.908,0,0,0,7.362,5.222,21.546,21.546,0,0,0,5.547,6.947,8.31,8.31,0,0,0,4.367,8.58c-.318.545-.635,1.044-.908,1.588-.091.136-.091.318-.182.5l-.182.363c-.091.272-.136.5-.227.771a9.64,9.64,0,0,0-.454,1.634,14.78,14.78,0,0,0,.363,6.489A14.306,14.306,0,0,0,4.14,23.147a12.059,12.059,0,0,0,2.541,3.177A17.679,17.679,0,0,0,9.9,28.548c1.044.5,2.133.771,3.222,1.18h.545v.091h.862v.091h1.18V30h.635v-.091h1.18v-.091h.862v-.091h.545a35.28,35.28,0,0,0,3.63-1.407,11.514,11.514,0,0,0,3.63-2.814,13.642,13.642,0,0,0,3.267-6.444,1.892,1.892,0,0,0,.091-.272v-.182a1.612,1.612,0,0,0,.091-.454v-.363c0-.136.091-.227.091-.363A1.359,1.359,0,0,0,29.871,16.613Z"
    //       data-name="<Path>"
    //     />
    //     <g data-name="<Group>">
    //       <path
    //         d="M16.075,3.588A12.48,12.48,0,1,1,3.6,16.068a12.473,12.473,0,0,1,12.48-12.48Z"
    //         data-name="<Path>"
    //       />
    //       <path d="M16.075,28.775A12.707,12.707,0,1,1,28.782,16.068,12.721,12.721,0,0,1,16.075,28.775Zm0-24.959A12.253,12.253,0,1,0,28.328,16.068,12.267,12.267,0,0,0,16.075,3.815Z" />
    //     </g>
    //   </g>
    //   <path
    //     d="M22.7,21.559a6.555,6.555,0,0,1-2.088,3.222A6.827,6.827,0,0,1,16.8,26.1l-.318-2.088a5.141,5.141,0,0,0,2.314-.726,5.873,5.873,0,0,0,.545-.545h0L15.576,10.668h3.131L20.886,19.7,23.2,10.668h3.041L22.7,21.559Z"
    //     fill="#fff"
    //     data-name="<Path>"
    //   />
    //   <path
    //     d="M11.764,10.259a5.18,5.18,0,0,1,1.951.318,5.865,5.865,0,0,1,1.679,1L14.124,13.3a4.977,4.977,0,0,0-1.044-.59,2.893,2.893,0,0,0-1.089-.182c-1.543,0-2.314,1.18-2.314,3.585a4.176,4.176,0,0,0,.59,2.587,1.961,1.961,0,0,0,1.724.771,2.662,2.662,0,0,0,1.044-.182,9.3,9.3,0,0,0,1.135-.59l1.271,1.815a5.421,5.421,0,0,1-3.585,1.271,5.616,5.616,0,0,1-2.814-.681,4.568,4.568,0,0,1-1.815-2,6.987,6.987,0,0,1-.635-3.041,7.133,7.133,0,0,1,.635-3.041A4.807,4.807,0,0,1,9.041,10.94a5.756,5.756,0,0,1,2.723-.681Z"
    //     fill="#fff"
    //     data-name="<Path>"
    //   />
    // </svg>
  );
};

export { CypressSvg };
