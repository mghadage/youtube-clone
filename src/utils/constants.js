const GOOGLE_API_KEY = "AIzaSyAgQjKgEL9-9qFZVt9KSVmoWeeW0frpEZ0";

export const YOUTUBE_VIDEOS_API_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;
