import { AppProps } from "next/app";
import Head from "next/head";
import { AppShell, MantineProvider } from "@mantine/core";
import "../styles/global.scss";
import {
  HeaderMenu,
  HeaderSearchProps,
} from "../components/mantine/HeaderMenu";
import { FooterSocial } from "../components/mantine/FooterSocial";

const headerLinks: HeaderSearchProps = {
  links: [{ link: "/", label: "Home", links: undefined }],
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minium-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withNormalizeCSS
        theme={{ colorScheme: "dark" }}
      >
        <AppShell
          fixed
          header={<HeaderMenu links={headerLinks.links} />}
          footer={<FooterSocial />}
        >
          <Component {...pageProps} />
        </AppShell>
      </MantineProvider>
    </>
  );
}
