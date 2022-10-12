const getLoaders = (mimetype: string) => [
  {
    loader: 'url-loader',
    options: {
      limit: 65000,
      mimetype,
      name: 'fonts/[name].[ext]',
    },
  },
];

export const fontLoaders = [
  {
    test: /\.(svg)(\?.*$|$)/,
    use: getLoaders('image/svg+xml'),
  },
  {
    test: /\.(woff)(\?.*$|$)/,
    use: getLoaders('application/font-woff'),
  },
  {
    test: /\.(woff2)(\?.*$|$)/,
    use: getLoaders('application/font-woff2'),
  },
  {
    test: /\.([ot]tf)(\?.*$|$)/,
    use: getLoaders('application/octet-stream'),
  },
  {
    test: /\.(eot)(\?.*$|$)/,
    use: getLoaders('application/vnd.ms-fontobject'),
  },
];
