export function ProfileImage() {
  return (
    <figure className="portrait-composition">
      <img className="portrait-image" src="/photo_2025-12-04_14-31-06.jpg"
        alt="Ozioma Okafor" width="896" height="1082" fetchPriority="high" />
      <figcaption className="portrait-caption eyebrow">
        <span>The person behind the pixels</span><span aria-hidden="true">↗</span>
      </figcaption>
    </figure>
  )
}
