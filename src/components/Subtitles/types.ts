export type Props = {
  readonly page: PageTypes;
  readonly length: number;
  readonly setPageIndex: Function;
  readonly pageIndex: number;
  readonly handleMouse: Function;
  readonly current?: string;
}

export type PageTypes = {
  page: number;
  pageType?: string;
  titleDetails: {
    title:  string[];
    titlePosition?: string | 'center';
  };
  backgroundPosition: string;
  subtitle?: string[];
  step?: string;
  socialNetworks?: string[];
}