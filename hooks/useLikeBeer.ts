export const useLikeBeer = () => {
  const isLikedBeer = false;
  const likeBeer = () => {
    console.log("like");
  };
  const dislikeBeer = () => {
    console.log("dislike");
  };

  return {
    isLikedBeer,
    likeBeer,
    dislikeBeer,
  };
};
