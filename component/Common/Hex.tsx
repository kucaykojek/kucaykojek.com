type Props = {
  id: string
  width?: number
  height?: number
  colorFrom?: string
  colorTo?: string
  className?: string
}

const Hex = ({
  id,
  width = 364,
  height = 410,
  colorFrom = '#e5b45c',
  colorTo = '#d48a38',
  className
}: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 364 410"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M166.547 405.867L15.4526 318.792C5.8905 313.281 -4.43796e-06 303.097 -3.47445e-06 292.076L1.17503e-05 117.924C1.27138e-05 106.903 5.89052 96.7192 15.4526 91.2086L166.547 4.13303C176.11 -1.37759 187.891 -1.37759 197.453 4.13303L348.547 91.2086C358.11 96.7192 364 106.903 364 117.925L364 292.076C364 303.097 358.11 313.281 348.547 318.792L197.453 405.867C187.89 411.378 176.109 411.378 166.547 405.867Z"
        fill={`url(#${id})`}
      />
      <defs>
        <linearGradient
          id={id}
          x1="182"
          y1="410"
          x2="182"
          y2="4.51242e-05"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={colorFrom} />
          <stop offset="1" stopColor={colorTo} />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default Hex
