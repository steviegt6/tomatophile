import { AppShell, MantineProvider } from "@mantine/core";
import { FooterSocial } from "./mantine/FooterSocial";
import { HeaderMenu, HeaderSearchProps } from "./mantine/HeaderMenu";

const headerLinks: HeaderSearchProps = {
  links: [{ link: "/", label: "Home", links: undefined }],
};

export default function Shell({ children }) {
  return (
    <MantineProvider withNormalizeCSS theme={{ colorScheme: "dark" }}>
      <AppShell
        fixed
        header={<HeaderMenu links={headerLinks.links} />}
        footer={<FooterSocial />}
      >
        {children}
      </AppShell>
    </MantineProvider>
  );
}
