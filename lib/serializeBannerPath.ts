const serializeBannerPath = ({ banner }: Pick<IPost, "banner">) => {
  if (!banner) return null;

  let sanitizeBannerPath = banner;
  if (banner.match(/\.(jpeg|jpg|gif|png|svg)$/)) {
    sanitizeBannerPath = sanitizeBannerPath.replace(/^.*[\\\/]/, "");
    sanitizeBannerPath = `krivaten/${sanitizeBannerPath}`;
  }
  return sanitizeBannerPath;
};

export default serializeBannerPath;
