import { forwardRef } from "react"
import type { LucideProps } from "lucide-react"

const TikTokIcon = forwardRef<SVGSVGElement, LucideProps>(
  ({ color = "currentColor", ...props }, ref) => (
    <svg
      ref={ref}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M15.6 3h2.28v3.46c1.08.89 2.42 1.4 3.84 1.46v3.04c-1.72-.02-3.33-.45-4.78-1.28v6.23a6.74 6.74 0 1 1-6.74-6.74c.46 0 .92.05 1.36.14v3.23a3 3 0 1 0 2.04 2.87V3h2.04Z'
        fill={color}
      />
    </svg>
  ),
)

TikTokIcon.displayName = "TikTokIcon"

export default TikTokIcon
