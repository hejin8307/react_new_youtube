export function ViewCount(viewCount) {
  if (viewCount < 1000) {
    return viewCount;
  } else if (viewCount < 10000) {
    return `${(viewCount / 1000).toFixed(1)}K views`; // 천
  } else if (viewCount < 100000) {
    return `${(viewCount / 10000).toFixed(1)}M views`; //1만뷰
  } else if (viewCount < 100000000) {
    return `${Math.round(viewCount / 10000)}M views`; //10만뷰
  } else if (viewCount < 10000000) {
    return `${Math.round(viewCount / 10000)}M views`; //100만뷰
  } else if (viewCount < 100000000) {
    return `${Math.round(viewCount / 10000)}M views`; //1000만뷰
  } else if (viewCount < 1000000000) {
    return `${Math.round(viewCount / 100000000)}B views`; //1억뷰
  } else if (viewCount < 1000000000000) {
    return `${Math.round(viewCount / 100000000)}B views`; //10억뷰
  } else if (viewCount < 10000000000000) {
    return `${Math.round(viewCount / 100000000)}B views`; //100억뷰
  }
}

export function SubscriberConverter(subscriberCount) {
  if (subscriberCount < 1000) {
    return subscriberCount;
  } else if (subscriberCount < 10000) {
    return `${(subscriberCount / 1000).toFixed(1)}K subscribers`; //천
  } else if (subscriberCount < 100000) {
    return `${(subscriberCount / 10000).toFixed(1)}M subscribers`; //1만명
  } else if (subscriberCount < 1000000) {
    return `${Math.round(subscriberCount / 10000)}M subscribers`; //10만명
  } else if (subscriberCount < 10000000) {
    return `${Math.round(subscriberCount / 10000)}M subscribers`; //100만명
  } else if (subscriberCount < 100000000) {
    return `${Math.round(subscriberCount / 10000)}M subscribers`; //1000만명
  } else if (subscriberCount < 1000000000) {
    return `${Math.round(subscriberCount / 100000000)}B subscribers`; //1억명
  } else if (subscriberCount < 10000000000) {
    return `${Math.round(subscriberCount / 100000000)}B subscribers`; //10억명
  }
}
