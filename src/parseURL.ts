interface URL {
  protocol: string;
  hostname: string;
  port: string;
  query: string;
  routes: string;
}

export default function parseURL(url: string) {
  const urlSlice = url.match(
    /(\w+):\/\/([^\/:]+)(:\d+)?(\/#\/\S*|[^#]*)(\?\S+)/
  );

  const urlParsed: URL = {
    protocol: urlSlice?.[1] as string,
    hostname: urlSlice?.[2] as string,
    port: urlSlice?.[3] as string,
    routes: urlSlice?.[4] as string,
    query: urlSlice?.[5] as string,
  };

  return urlParsed;
}
