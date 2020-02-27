beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({
      site: {
        siteMetadata: {
          title: `Matt Popovich`,
          description: `My personal site`,
          author: `Matt Popovich`,
        },
      },
    })
  );
});
