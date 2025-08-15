import ReactGA from 'react-ga4'

// Analytics event tracking utility
export const Analytics = {
  // 회원가입 관련 이벤트
  viewSignUp: () => {
    ReactGA.gtag('event', 'view_sign_up')
  },

  signupNickname: () => {
    ReactGA.gtag('event', 'signup_nickname')
  },

  signupTaste: () => {
    ReactGA.gtag('event', 'signup_taste')
  },

  signUp: (date: string, method: string) => {
    ReactGA.gtag('event', 'sign_up', {
      date: date,
      method: method,
    })
    
    // Set user properties
    ReactGA.set({
      signup_date: date,
      signup_method: method,
    })
  },

  // 로그인 관련 이벤트
  viewLogin: () => {
    ReactGA.gtag('event', 'view_login')
  },

  login: (method: string) => {
    ReactGA.gtag('event', 'login', {
      method: method,
    })
  },

  logout: () => {
    ReactGA.gtag('event', 'logout')
  },

  withdraw: () => {
    ReactGA.gtag('event', 'withdraw')
  },

  // 메인 페이지 관련 이벤트
  clickMainBestProduct: (itemId: number, itemName: string) => {
    ReactGA.gtag('event', 'click_main_best_product', {
      item_id: itemId,
      item_name: itemName,
    })
  },

  clickMainMdProduct: (itemId: number, itemName: string) => {
    ReactGA.gtag('event', 'click_main_md_product', {
      item_id: itemId,
      item_name: itemName,
    })
  },

  clickSearchBar: () => {
    ReactGA.gtag('event', 'click_search_bar')
  },

  // 검색 관련 이벤트
  search: (searchTerm: string, items: string[]) => {
    ReactGA.gtag('event', 'search', {
      search_term: searchTerm,
      items: items.join(','),
    })
  },

  viewFilteredItems: (filterName: string, filterValue: string, items: string[]) => {
    ReactGA.gtag('event', 'view_filtered_items', {
      filter_name: filterName,
      filter_value: filterValue,
      items: items.join(','),
    })
  },

  // 상품 상세 관련 이벤트
  viewItem: (items: string[]) => {
    ReactGA.gtag('event', 'view_item', {
      items: items.join(','),
    })
  },

  // 피드 관련 이벤트
  viewFeed: () => {
    ReactGA.gtag('event', 'view_feed')
  },

  likeReview: () => {
    ReactGA.gtag('event', 'like_review')
  },

  // 마이페이지 관련 이벤트
  viewMypage: () => {
    ReactGA.gtag('event', 'view_mypage')
  },

  editProfile: () => {
    ReactGA.gtag('event', 'edit_profile')
  },

  // 리뷰 관련 이벤트
  clickReviewButton: () => {
    ReactGA.gtag('event', 'click_review_button')
  },

  chooseReviewProduct: (itemName: string) => {
    ReactGA.gtag('event', 'choose_review_product', {
      item_name: itemName,
    })
  },

  clickRate: () => {
    ReactGA.gtag('event', 'click_rate')
  },

  clickStore: (storeName: string) => {
    ReactGA.gtag('event', 'click_store', {
      store_name: storeName,
    })
  },

  writeDetail: () => {
    ReactGA.gtag('event', 'write_detail')
  },

  clickAddPhoto: () => {
    ReactGA.gtag('event', 'click_add_photo')
  },

  uploadReview: () => {
    ReactGA.gtag('event', 'upload_review')
  },
}

// Helper function to get current date in YYYY-MM-DD format
export const getCurrentDate = (): string => {
  const today = new Date()
  const year = today.getFullYear()
  const month = String(today.getMonth() + 1).padStart(2, '0')
  const day = String(today.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

// Helper function to get login method from provider
export const getLoginMethod = (provider: string): string => {
  switch (provider.toLowerCase()) {
    case 'google':
      return 'google'
    case 'kakao':
      return 'kakao'
    case 'naver':
      return 'naver'
    default:
      return 'unknown'
  }
} 