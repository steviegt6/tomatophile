import { AppShell, MantineProvider } from "@mantine/core";
import { FooterSocial } from "./mantine/FooterSocial";
import { HeaderMenu } from "./mantine/HeaderMenu";

/**
 * Streamlined layout shared by all webpages, providing default stylization, headers, footers, etc.
 * @param param0 Parameters for the generic layout.
 */
export default function GenericLayout({
  children,
  // path,
  // title,
  home = false,
}: any) {
  return (
    <MantineProvider theme={{ colorScheme: "dark" }}>
      <AppShell
        fixed
        header={
          <HeaderMenu
            links={[
              { link: "/", label: "Home", links: undefined },
              { link: "/projects", label: "Projects", links: undefined },
              { link: "/about", label: "About", links: undefined },
              {
                link: "/wiki/en/main_page",
                label: "Wiki",
                links: [
                  { link: "/wiki/en/mc", label: "Minecraft" },
                  { link: "/wiki/en/terraria", label: "Terraria" },
                ],
              },
            ]}
          />
        }
        footer={<FooterSocial />}
      >
        {/* Background */}
        <div className="background" />
        <div className="background-cover" />

        {/* Body Content */}
        <div>{children}</div>
      </AppShell>
    </MantineProvider>
  );
}
