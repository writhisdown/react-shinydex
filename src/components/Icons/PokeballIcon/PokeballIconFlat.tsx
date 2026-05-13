import styles from "./PokeballIconFlat.module.scss";

type PokebalIconTypes = React.SVGAttributes<SVGElement> & {
  className: string,
  animate?: boolean
}

export default function PokeballIconFlat({ className = null, animate = false, ...rest }: PokebalIconTypes) {
  return (
    <svg
      {...rest}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="currentColor" 
    >
      {animate && (
        <mask id="mask-element">
          <path id="half-circle-bottom" d="M24 13.7476C23.1449 19.5467 18.098 24 12 24C5.90196 24 0.855114 19.5467 0 13.7476H4.98974C5.77782 16.8524 8.61756 19.1515 12 19.1515C15.3824 19.1515 18.2222 16.8524 19.0103 13.7476H24Z"/>
          <path id="half-circle-top" d="M23.9266 10.0194H18.9101C18.0421 7.03317 15.2605 4.84848 11.9633 4.84848C8.66601 4.84848 5.88446 7.03317 5.01643 10.0194H0C0.954188 4.33443 5.94716 0 11.9633 0C17.9794 0 22.9723 4.33443 23.9266 10.0194Z"/>
          <path id="circle" d="M11.8827 15.6117C13.98 15.6117 15.6802 13.9947 15.6802 12C15.6802 10.0054 13.98 8.38837 11.8827 8.38837C9.78534 8.38837 8.08511 10.0054 8.08511 12C8.08511 13.9947 9.78534 15.6117 11.8827 15.6117Z"/>
          <rect
            id="mask"
            className={styles.mask}
            width="5"
            height="24"
            fill="hsla(200,0%,10%,.6)"
          />
        </mask>
      )}
      <path mask={animate ? "url(#mask-element)" : null} id="half-circle-bottom" d="M24 13.7476C23.1449 19.5467 18.098 24 12 24C5.90196 24 0.855114 19.5467 0 13.7476H4.98974C5.77782 16.8524 8.61756 19.1515 12 19.1515C15.3824 19.1515 18.2222 16.8524 19.0103 13.7476H24Z"/>
      <path mask={animate ? "url(#mask-element)" : null} id="half-circle-top" d="M23.9266 10.0194H18.9101C18.0421 7.03317 15.2605 4.84848 11.9633 4.84848C8.66601 4.84848 5.88446 7.03317 5.01643 10.0194H0C0.954188 4.33443 5.94716 0 11.9633 0C17.9794 0 22.9723 4.33443 23.9266 10.0194Z"/>
      <path mask={animate ? "url(#mask-element)" : null} id="circle" d="M11.8827 15.6117C13.98 15.6117 15.6802 13.9947 15.6802 12C15.6802 10.0054 13.98 8.38837 11.8827 8.38837C9.78534 8.38837 8.08511 10.0054 8.08511 12C8.08511 13.9947 9.78534 15.6117 11.8827 15.6117Z"/>
    </svg>
  );
}