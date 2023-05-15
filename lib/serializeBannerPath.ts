const serializeBannerPath = ({ banner }: IPost) => {
  if (!banner) return null;

  let sanitizeBannerPath = banner;
  if (banner.match(/\.(jpeg|jpg|gif|png|svg)$/)) {
    sanitizeBannerPath = sanitizeBannerPath.replace(/^.*[\\\/]/, "");
    sanitizeBannerPath = `/blog/assets/${sanitizeBannerPath}`;
  }
  return sanitizeBannerPath;
};

export default serializeBannerPath;
