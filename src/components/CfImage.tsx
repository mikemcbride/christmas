type CfImageTypes = {
  image: string
  classes?: string
  is_bw?: boolean
  width?: number
  height?: number
}
export default function CfImage({ image, classes, is_bw, width, height }: CfImageTypes) {

  let options = ['fit=cover', 'g=face', 'f=webp', 'q=90']
  if (is_bw) {
    options.push('saturation=0')
  }
  if (width) {
    options.push(`w=${width}`)
  }
  if (height) {
    options.push(`h=${height}`)
  }
  let imageSrc = `https://christmas.mcbrides.us/cdn-cgi/image/${options.join(',')}/https://christmas.r2.mcbrides.us/${image}`

  return (
    <img
      loading="lazy"
      src={imageSrc}
      className={`${classes}`} />
  )
}

