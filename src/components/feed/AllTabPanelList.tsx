import {Flex} from "@chakra-ui/react";
import {useCallback, useEffect, useState} from "react";
import {ReviewResponseType} from "../../../interface/server/types/Review";
import {MOCK_FEED_FILTER_LIST} from "../../../interface/static";
import {ReviewSortEnum} from "../../../interface/types";

import {useAllReviewsQuery} from "@/../hooks/query/useReviewQuery";
import {FeedFilter} from "./FeedFilter/FeedFilter";
import FollowingTabPanelItem from "./TabPanelItem";

export const AllTabPanelList = () => {
  const [selectedTag, setSelectedTag] = useState<ReviewSortEnum>(
    MOCK_FEED_FILTER_LIST[0].tags[0]
  );
  const [selectedReviews, setSelectedReviews] = useState<ReviewResponseType[]>(
    []
  );

  const allReviewsQuery = useAllReviewsQuery({});

  useEffect(() => {
    allReviewsQuery.refetch();
  }, []);

  const handleSetSelectedReviews = useCallback(
    (reviews: ReviewResponseType[]) => {
      setSelectedReviews(reviews);
    },
    []
  );

  const handleSelectTag = async (tag: ReviewSortEnum) => {
    setSelectedTag(tag);
  };

  return (
    <Flex flexDirection="column" gap={"10px"}>
      <FeedFilter selectedTag={selectedTag} onClickTag={handleSelectTag} />
      {/* ALL_FEED_MOCK을 prop으로 받아서 AllTabPanelList랑 공유하기 */}
      {allReviewsQuery?.data?.contents?.map((feed: any) => {
        return (
          <FollowingTabPanelItem
            key={feed.id}
            isRow
            nickname={feed.member.username}
            postingTime={feed.updated_at}
            beerName={"MOCK_BEER_NAME"}
            rate={feed.rate}
            imageSrc={feed.image_url}
            postText={feed.content}
            thumbsUpNumber={feed.like_count}
            isEditable={false}
          />
        );
      })}
    </Flex>
  );
};
