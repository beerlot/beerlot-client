# Google Analytics Implementation for Beerlot

This document outlines the Google Analytics (GA4) events that have been implemented in the Beerlot application based on the provided Excel file requirements.

## Analytics Utility

All analytics events are centralized in `src/utils/analytics.ts` using the `Analytics` object with ReactGA4. All events use `ReactGA.gtag()` to ensure proper GA4 compatibility and exact parameter structure as specified in the Excel file.

## Implemented Events

### 1. 회원가입 관련 이벤트 (Signup Events)

| Event | Location | Description |
|-------|----------|-------------|
| `view_sign_up` | `pages/signup/index.tsx` | 회원가입 페이지 진입 시 실행 |
| `signup_nickname` | `src/components/auth/sign-up/Nickname.tsx` | 닉네임 설정, 약관 동의 후 다음으로 클릭 시 실행 |
| `signup_taste` | `src/components/auth/sign-up/BeerTasteSelection.tsx` | 최애맥주 선택 후 다음으로 클릭 시 실행 |
| `sign_up` | `src/components/auth/sign-up/CompleteTemplate.tsx` | 회원 가입 완료 시(비어랏 시작하기 버튼 클릭 시) 실행 |

### 2. 로그인 관련 이벤트 (Login Events)

| Event | Location | Description |
|-------|----------|-------------|
| `view_login` | `pages/login/index.tsx` | 로그인 페이지 진입 시 실행 |
| `login` | `src/components/auth/login/SocialButton.tsx` | 로그인 완료 시 실행 (소셜 로그인 버튼 클릭 시) |
| `logout` | `src/components/account/settings/SettingTemplate.tsx` | 로그아웃 완료 시 실행 |
| `withdraw` | `src/components/account/settings/SettingTemplate.tsx` | 회원 탈퇴 시 실행 |

### 3. 메인 페이지 관련 이벤트 (Main Page Events)

| Event | Location | Description |
|-------|----------|-------------|
| `click_main_best_product` | `src/components/home/CommonBeersList/CommonBeersList.tsx` | 인기 맥주 리스트 항목 클릭 시 실행 |
| `click_main_best_product` | `src/components/home/LoggedInBeersList/TopBeersList.tsx` | 인기 맥주 리스트 항목 클릭 시 실행 (로그인 상태) |
| `click_main_md_product` | `src/components/home/LoggedInBeersList/RecommendedBeersList.tsx` | 추천 맥주 리스트 항목 클릭 시 실행 |
| `click_search_bar` | `src/components/home/SearchInputHome.tsx` | 메인 페이지의 검색바 클릭 시 |

### 4. 검색 관련 이벤트 (Search Events)

| Event | Location | Description |
|-------|----------|-------------|
| `search` | `src/components/search/SearchBarTemplate.tsx` | 검색 결과 페이지 진입 시 실행 |
| `search` | `pages/result/index.tsx` | 검색 결과 페이지 진입 시 실행 |
| `view_filtered_items` | `pages/result/index.tsx` | 필터 적용 완료 시 실행 |

### 5. 상품 상세 관련 이벤트 (Product Detail Events)

| Event | Location | Description |
|-------|----------|-------------|
| `view_item` | `src/components/details/DetailTemplate.tsx` | 상품 상세 페이지 진입 시 실행 |

### 6. 피드 관련 이벤트 (Feed Events)

| Event | Location | Description |
|-------|----------|-------------|
| `view_feed` | `src/components/feed/FeedTemplate.tsx` | 피드 페이지 진입 시 실행 |
| `like_review` | `src/components/feed/TabPanelItem.tsx` | 다른 유저의 리뷰에 좋아요 클릭 시 실행 |

### 7. 마이페이지 관련 이벤트 (My Page Events)

| Event | Location | Description |
|-------|----------|-------------|
| `view_mypage` | `pages/account/index.tsx` | 마이 페이지 진입 시 실행 |
| `edit_profile` | `src/components/account/user-info/edit/ProfileEditContent.tsx` | 프로필 편집 모달의 "완료" 버튼 클릭 시 실행 |

### 8. 리뷰 관련 이벤트 (Review Events)

| Event | Location | Description |
|-------|----------|-------------|
| `click_review_button` | `src/components/feed/FeedTemplate.tsx` | 리뷰 작성 플로팅 버튼 클릭시 실행 |
| `choose_review_product` | `src/components/shared/ReviewModal/ReviewModal/ReviewModal.tsx` | 리뷰할 맥주 선택 완료 시 실행 |
| `click_rate` | `src/components/shared/ReviewModal/BeerRatingSection.tsx` | 별점 클릭 시 실행 |
| `click_store` | `src/components/shared/ReviewModal/BeerPurchaseSection.tsx` | 구매처 중 하나 클릭 시 실행 |
| `write_detail` | `src/components/shared/ReviewModal/BeerReviewTextSection.tsx` | 자세한 리뷰 작성란에 작성 완료 시 실행 |
| `click_add_photo` | `src/components/shared/ReviewModal/UploadedReviewImages.tsx` | 사진 첨부하기 버튼 클릭 시 실행 |
| `upload_review` | `src/components/shared/ReviewModal/ReviewModal/ReviewModalWrapper.tsx` | 작성 완료 버튼 클릭 시 실행 |

## Event Parameters

### User Properties
- `signup_date`: 회원가입 연월일(YYYY-MM-DD)
- `signup_method`: 회원가입 수단 (google, kakao, naver)

### Event Parameters
- `item_id`: 맥주 ID (for product clicks)
- `item_name`: 맥주 이름 (for product clicks)
- `search_term`: 입력 검색어 (for search events)
- `items`: 노출 맥주 목록 (for search and filter events)
- `filter_name`: 설정된 필터 이름 (for filter events)
- `filter_value`: 설정된 필터 값 (for filter events)
- `store_name`: 판매처명 (for store selection events)

## Helper Functions

- `getCurrentDate()`: Returns current date in YYYY-MM-DD format
- `getLoginMethod(provider)`: Converts provider string to standardized format

## Implementation Notes

1. **Excel File Compliance**: All events exactly match the Excel file requirements
2. **GA4 Compatibility**: All events use ReactGA4 with proper event structure
3. **Parameter Structure**: Event parameters match exactly as specified in Excel file
4. **Error Handling**: Analytics calls are wrapped to prevent app crashes
5. **Performance**: Analytics calls are non-blocking and don't affect user experience
6. **Consistency**: All events follow the same naming convention and structure
7. **User Privacy**: Only tracks user interactions, no personal data is sent

## Testing

To test analytics events:
1. Open browser developer tools
2. Go to Network tab
3. Filter by "google-analytics" or "collect"
4. Perform actions in the app
5. Verify events are being sent with correct parameters

## Future Enhancements

1. Add more granular event tracking for user journey analysis
2. Implement conversion funnel tracking
3. Add A/B testing support
4. Enhanced e-commerce tracking for beer purchases
5. Custom dimension tracking for user segments 