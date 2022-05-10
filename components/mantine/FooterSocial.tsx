import React from "react";
import {
  createStyles,
  Container,
  Group,
  ActionIcon,
  Footer,
} from "@mantine/core";
import {
  BrandTwitter,
  BrandYoutube,
  BrandInstagram,
  BrandDiscord,
} from "tabler-icons-react";
import GenericFooter from "../footer/GenericFooter";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      marginTop: theme.spacing.md,
    },
  },
}));

export function FooterSocial() {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Footer height={80}>
        <Container className={classes.inner}>
          <GenericFooter />
          <Group spacing={0} className={classes.links} position="right" noWrap>
            <a href="https://twitter.com/TheTomatophile">
              <ActionIcon size="lg">
                <BrandTwitter size={18} />
              </ActionIcon>
            </a>
            <a href="https://youtube.com/c/tomatophile">
              <ActionIcon size="lg">
                <BrandYoutube size={18} />
              </ActionIcon>
            </a>
            <a href="https://discord.gg/tomat">
              <ActionIcon size="lg">
                <BrandDiscord size={18} />
              </ActionIcon>
            </a>
          </Group>
        </Container>
      </Footer>
    </div>
  );
}
