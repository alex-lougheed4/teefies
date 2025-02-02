type ReviewCardProps = {
  id: number
  name: string
  review: string
  rating: number
}

export const ReviewCard: React.FC<ReviewCardProps> = ({
  name,
  review,
  rating
}) => {
  const renderStars = () => {
    const stars = []
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} style={{ color: i < rating ? '#FFD700' : '#C0C0C0' }}>
          ★
        </span>
      )
    }
    return stars
  }

  return (
    <div className="h-48 w-full rounded-lg border border-baseGrey bg-white p-5 text-center">
      <h3 className="truncate text-lg font-semibold">{name}</h3>
      <div>{renderStars()}</div>

      <p className="overflow-visible text-ellipsis text-sm text-baseGrey">
        {review}
      </p>
    </div>
  )
}
